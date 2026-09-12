let n = Number(prompt("Enter your number: "));
let total = 0;
let text = "";

for (let i = 1; i <= n; i++) {
    total += i;
    text += "Sau bước " + i + ": tổng hiện tại = " + total + "<br>";
}

text += "<br><b>Tổng cuối cùng: " + total + "</b>";

document.getElementById("demo").innerHTML = text;

