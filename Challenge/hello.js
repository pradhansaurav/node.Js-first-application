const func = who => {
  console.log("Hello after " + who + " secs");
};
setTimeout(func, 4 * 1000, "4");
setTimeout(func, 8 * 1000, "8");
