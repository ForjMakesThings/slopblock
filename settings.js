function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    desire: document.querySelector("#filterOption").value,
  });
}
function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#filterOption").value = result.desire;
}
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.local.get("desire");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);