const objNotNull = obj => {
  if (!(obj && Object.keys(obj).length === 0 && obj.constructor === Object)) {
    return true;
  }
};
export {objNotNull};
