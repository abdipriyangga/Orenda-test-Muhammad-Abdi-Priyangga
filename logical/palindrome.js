const isPalindrome = (x) => {
  const toArr = x.toString();
  let len = toArr.length;
  for (let i = 0; i < len / 2; i++) {
    if (toArr[i] !== toArr[toArr.length - i - 1]) {
      return false;
    }
    return true;
  }
};

console.log(isPalindrome(-121));
