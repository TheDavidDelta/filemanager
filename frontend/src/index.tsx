import { hot } from 'react-hot-loader/root';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './views/App';

import './index.css';

if (module.hot) {
    module.hot.accept();
}

const Root = hot(App);
render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
