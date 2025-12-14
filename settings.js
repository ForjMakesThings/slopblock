function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    YTVideoDesire: document.querySelector("#YTVideo").value,
    YTSummaryDesire: document.querySelector("#YTAIDescription").value,
  });
}
function restoreOptions() {
  function setCurrentChoice(result) {
    console.log(result)
    document.querySelector("#YTAIDescription").value = result.YTSummaryDesire || "delete";
    document.querySelector("#YTVideo").value = result.YTVideoDesire || "delete";
}
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.local.get(null);
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("button").addEventListener("click", saveOptions);