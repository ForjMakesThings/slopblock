let getting = browser.storage.local.get(null);
getting.then(afterGet, onError)

function afterGet(result) {
  console.log(result.desire)
  if (!result.YTVideoDesire) {
    browser.storage.local.set({
      YTVideoDesire: "delete",
    });
  }
  if (!result.YTSummaryDesire) {
    browser.storage.local.set({
      YTSummaryDesire: "delete",
    });
  }
}
function onError(error) {
  console.log(`Error: ${error}`);
}