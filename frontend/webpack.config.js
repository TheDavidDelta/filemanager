const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, 'src');

module.exports = [
    {
        context: srcPath,
        mode: 'development',
        target: 'web',
        entry: ['./index.tsx'],
        devtool: 'source-map',
        output: {
            filename: 'app.[hash].js',
            path: path.join(__dirname, '/dist'),
        },
        resolve: {
            extensions: ['.tsx', '.ts', 'jsx', '.js', '.css'],
            modules: [
                path.resolve(path.join(__dirname, '/node_modules')),
                path.resolve(srcPath)
            ],
            alias: {
                'react-dom': '@hot-loader/react-dom'
            }
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: srcPath,
                    use: 'ts-loader',
                },
                {
                    test: /\.(js|jsx)$/i,
                    include: srcPath,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true
                            }
                        }
                    ]
                }, {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-modules-typescript-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: "[name]__[local]_[hash:base64:5]",
                                },
                            }
                        }
                    ],
                    include: /\.module\.css$/
                }, {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ],
                    exclude: /\.module\.css$/
                }, {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                            },
                        },
                    ],
                }, {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                favicon: path.join(srcPath, 'assets/images/favicon.png')
            })
        ],
        devServer: {
            port: 80,
            host: '0.0.0.0',
            hot: true,
            sockPort: 443,
            disableHostCheck: true,
            watchOptions: {
                poll: true,
                ignored: /node_modules/
            },
            proxy: {
                '/api': 'http://api:8080'
            }
        },
        cache: {
            type: 'filesystem',
            buildDependencies: {
                config: [__filename]
            }
        }
    }
];
