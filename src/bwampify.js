const ORDER = ["q", "w", "e", "r", "a", "s", "d", "f", "z", "x", "c", "v", "u", "i", "o", "p", "j", "k", "l", ";", "m", ","]
const KEY_TO_EMOJI = {
  "q": "ð",
  "w": "ððð",
  "e": "ð",
  "r": "ð",

  "a": "ðŪ",
  "d": "ðŧ",
  "s": "ðŠ",
  "f": "ð°",

  "z": "ðĨðĨðĨ",
  "x": "âĻ",
  "c": "ðĨðŧ",
  "v": "ððĪ­ð",

  "u": "ð",
  "i": "ðð",
  "o": "ððð",
  "p": "ðĶĒ",

  "j": "ð°ðš",
  "k": "âð",
  "l": "ðīðīðī",
  ";": "ððð",

  "m": "ððŊð",
  ",": "ððð",
};

const EMOJI_TO_KEY = {}
const KEY_TO_ELEMENT = {}
Object.keys(KEY_TO_EMOJI).forEach(key => {
  const emoji = KEY_TO_EMOJI[key]
  EMOJI_TO_KEY[emoji] = key
})

const processElement = element => {
  const child = element.childNodes[0]
  const key = EMOJI_TO_KEY[child.innerText];
  KEY_TO_ELEMENT[key] = element
  child.innerHTML = `${key.toUpperCase()}&nbsp;` + child.innerHTML
  hotkeys(key, function () {
    child.click();
    child.style.backgroundColor = '#ddd'
    setTimeout(() => { child.style.backgroundColor = null }, 400)
  });
  element.style.fontFamily = 'Menlo, monospace'
  element.remove()
}


chrome.extension.sendMessage({}, function (response) {
  const readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);


      const container = document.querySelector("#bwamp_container");
      Array.from(container.childNodes).forEach(processElement)

      ORDER.forEach(key => {
        container.appendChild(KEY_TO_ELEMENT[key])
      })


    }
  }, 10);
});
