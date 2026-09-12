let num = Number(prompt("Enter a number: "));
let total = 0;

while (num !== -1) {
    total += num;
    num = Number(prompt("Enter a number: "));
}

alert("Tổng các số đã nhập: " + total);

let i = 1;
while (i < 100) {
    document.write("<hr width='" + i + "%'>");
    i++;
}