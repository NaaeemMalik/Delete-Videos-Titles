var max = document.getElementById("max")
var min = document.getElementById("min")
var cryptoPrice = document.getElementById("cryptoPrice")

chrome.storage.local.get(null, (result) => {
  console.log("retriving ", result);
  setVal(max, result.max, 20)
  setVal(min, result.min, 10)
  setVal(cryptoPrice, result.cryptoPrice, 282)
})

setVal = (elem, value, defaultVal) => {
  elem.value = value ? value : defaultVal;
  elem.dispatchEvent(new Event('input'));
}

//saving

max.addEventListener("input", (e) => {
  let Elval = e.target.value
  let obj = { "max": Elval }
  //console.log("oninput ", obj)
  chrome.storage.local.set(obj)
})
min.addEventListener("input", (e) => {
  let Elval = e.target.value
  let obj = { "min": Elval }
  //console.log("oninput ", obj)
  chrome.storage.local.set(obj)
})
cryptoPrice.addEventListener("input", (e) => {
  let Elval = e.target.value
  let obj = { "cryptoPrice": Elval }
  //console.log("oninput ", obj)
  chrome.storage.local.set(obj)
})

