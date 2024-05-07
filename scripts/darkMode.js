const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const header = document.querySelector("header");



modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌚")) {
		body.style.backgroundColor = "#070f0a";
		body.style.color = "#fff";
		header.style.backgroundColor = "#070f0a";
		header.style.color = "#fff";
		
		modeButton.textContent = "🔆";
	} else {
		body.style.backgroundColor = " #f0f0f0";
		body.style.color = "#333";
		header.style.backgroundColor = "#3A5A40";
		header.style.color = "#fff";
		modeButton.textContent = "🌚";
	}
});
