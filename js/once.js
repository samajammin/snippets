function once(func) {
  let hasBeenCalled = false;
  return function() {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      func.apply();
    }
  };
}

const fn = () => console.log('hello!');
const oncedFn = once(fn);

oncedFn();
oncedFn();
oncedFn();
