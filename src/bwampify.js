const ORDER = ["q", "w", "e", "r", "a", "s", "d", "f", "z", "x", "c", "v", "u", "i", "o", "p", "j", "k", "l", ";", "n", "m"]
const KEY_TO_EMOJI = {
	"q": "👏",
	"w": "👏👏👏",
	"e": "👍",
	"r": "👎",

	"a": "😮",
	"d": "😻",
	"s": "💪",
	"f": "💰",

	"z": "🥁🥁🥁",
	"x": "✨",
	"c": "🥂🍻",
	"v": "😂🤭😂",

	"u": "🎉",
	"i": "🎉🎉",
	"o": "🎉🎉🎉",
	"p": "🦢",

	"j": "😰🎺",
	"k": "⛏💀",
	"l": "🐴🐴🐴",
	";": "🐄🐄🐄",

	"n": "🍖📯🔁",
	"m": "🐈👎👎",
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
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			console.log("POTATO")
			clearInterval(readyStateCheckInterval);


			const container = document.querySelector("#bwamp_container");
			Array.from(container.childNodes).forEach(processElement)

			ORDER.forEach(key => {
				container.appendChild(KEY_TO_ELEMENT[key])
			})


		}
	}, 10);
});
