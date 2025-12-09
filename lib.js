//array functions
function arrayHardCheck(arr, searchString) {
  return arr.some((arrVal) => searchString === arrVal);
}
function arraySoftCheck(arr, searchString) {
  return arr.includes(searchString)
}
const getting = browser.storage.local.get("desire");
getting.then(onGot, onError);

function onError(error) {
  console.log(`Error: ${error}`);
}
getting.then(onGot, onError);

function onGot(item) {
  console.log(item.desire)
  if (item.desire) {
    desire = item.desire;
  }
}
//get config settings
function xpathSearch(contextNode, xpathExpression){
  const xpathResult = document.evaluate(
  xpathExpression,
  contextNode,
  null,
  XPathResult.ANY_UNORDERED_NODE_TYPE,
  null,
);
return xpathResult;
}