const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#confirm_password");
const message = document.querySelector("#formmessage");
const message2 = document.querySelector("#formmessage2");


kp2.addEventListener("focusout", checkSame);

function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Password DO NOT MATCH!";
        message.style.visibility = "visible";
        kp2.style.backgroundColor = "#fff0f3";
        kp2.value = "";
    } else {
        message2.textContent = "Password Match";
        message2.style.visibility = "visible";
        kp2.style.backgroundColor = "#90a394";

    }
}
