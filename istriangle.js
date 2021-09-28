angle1 = document.querySelector("#first-input");
angle2 = document.querySelector("#second-input");
angle3 = document.querySelector("#third-input");
IsTriangleButton = document.querySelector("#isTriangle-button");
message = document.querySelector("#output-message");
IsTriangleButton.addEventListener("click", function isTriangle() {
    hideMessage();

    console.log(angle3.value);
    console.log(angle2.value);
    console.log(angle3.value);

    var a = Number(angle1.value);
    var b = Number(angle2.value);
    var c = Number(angle3.value);

    var x = b + c;
    var y = c + a;
    var z = a + b;
    if (a > 0 && b > 0 && c > 0) {
        if (a < x && b < y && c < z && (a + b + c) === 180) {
            showMessage("Angles form a Triangle");
        } else {
            showMessage("Triangle is not possible");
        }
    } else {
        showMessage("Triangle is not possible");
    }

})

function hideMessage() {
    message.style.display = "none";
}

function showMessage(m) {
    message.style.display = "block";
    message.innerText = m;
}