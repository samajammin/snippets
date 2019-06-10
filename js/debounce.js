const debounce = func => {
  let timeout = null;
  return function() {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(func, 2000);
  };
};

const fn = () => console.log('Executed fn');
const debouncedFn = debounce(fn);

console.log('start!');
debouncedFn(); // 'Executed fn' (after 2 seconds)
debouncedFn(); // nothing
debouncedFn(); // nothing
debouncedFn(); // nothing
debouncedFn(); // nothing
debouncedFn(); // nothing
