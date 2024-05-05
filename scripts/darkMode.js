const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌚")) {
<<<<<<< HEAD
		main.style.backgroundColor = "#000";
		main.style.color = "#fff";
=======
		body.style.background = "#000";
		body.style.color = "#fff";
>>>>>>> a29b7d6c24140fed00fec42acdc96c0b209a3cca
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🌚";
	}
});
