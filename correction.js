/**
 * Better Amoozeshyar
 * Filename: correction.js
 * Correcting the course name before search
 */

let a = document.getElementById("submitBtn");
let b = document.createElement("span");
b.className = "gradiantButton";
b.innerHTML =
    '<button type="button" class="button"' +
    ' style="background-image: url(Pages/images/icons/sabte-darkhast.png);"' +
    ' id="correctionBtn"> اصلاح نام درس</button>';
if (a != null) {
    a.insertAdjacentElement("beforebegin", b);
    a.insertAdjacentHTML("beforebegin", "&nbsp");
    document.getElementById("correctionBtn").onclick = function () { cnameCorrection() };
}
function cnameCorrection() {
    let courseInput = document.getElementsByName("parameter(f^courseName)")[0];
    let inputValue = courseInput.value;
    if (inputValue.length === 0) {
        window.alert("قبل از اصلاح، چیزی تایپ کنید");
    } else if (inputValue.startsWith("%")) {
        window.alert("نام درس قبلا اصلاح شده است");
    } else {
        inputValue = "%" + inputValue + "%";
        courseInput.value = inputValue.replace(/[\u06cc\u06a9\s]/g, "%");
    }
}