/**
 * Advanced Amoozeshyar
 * Filename: correction.js
 * Correcting the course name before search
 */

let a = document.getElementsByTagName("tbody");
let b = document.createElement("span");
b.className = "gradiantButton"
b.innerHTML =
'<button type="button" class="button"' +
' style="background-image: url(Pages/images/icons/sabte-darkhast.png);"' +
' id="correctionBtn"> اصلاح نام درس</button>'
a[6].lastElementChild.lastElementChild.prepend(b); // #FIXME using 'a.length-1' instead of 6, or find a better way
let c = document.getElementById("correctionBtn");
c.addEventListener("click", cnameCorrection);
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
        console.log("I'm done correcting :^)");
    }
}