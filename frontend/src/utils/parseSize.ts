const base = 1024;

const units = ["B", "KiB", "MiB", "GiB"];

const parseSize = (size: number, power = units.length - 1): string => {
    const unitValue = base ** power;
    if (size < unitValue && power > 0)
        return parseSize(size, power - 1);

    const parsedValue = (size / unitValue).toFixed(2);
    const unit = units[power];
    return `${parsedValue} ${unit}`;
};

export default parseSize;
