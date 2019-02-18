
function greet(name) {
  // return new Promise(res => res(`Hey ${name}`));
  return Promise.resolve(`Hey ${name}`);
}

export {
  greet,
};
