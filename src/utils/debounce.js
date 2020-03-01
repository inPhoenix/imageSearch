const debounce = (func, waitTime) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), waitTime);
    };
};

export default debounce;
