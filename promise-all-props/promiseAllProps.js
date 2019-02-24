function promiseAllProps(promiseObj) {
  const newObj = {};
  for (const keys of Object.keys(promiseObj)) {
    promiseObj[keys].then((res) => {
      newObj[keys] = res;
    });
  }
  return Promise.resolve(newObj);
}

export {
  promiseAllProps,
};
