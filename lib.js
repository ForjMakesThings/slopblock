//array functions
function arrayHardCheck(arr, searchString) {
  return arr.some((arrVal) => searchString === arrVal);
}
function arraySoftCheck(arr, searchString) {
  return arr.some((arrVal) => searchString.includes(arrVal))
}
const getting = browser.storage.local.get(null);
getting.then(onGot, onError);

function onError(error) {
  console.log(`Error: ${error}`);
}
getting.then(onGot, onError);

function onGot(item) {
  console.log(item.desire)
  if (item.YTVideoDesire) {
    YTVideoDesire = item.YTVideoDesire;
  }
  if (item.YTSummaryDesire) {
    YTSummaryDesire = item.YTSummaryDesire;
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