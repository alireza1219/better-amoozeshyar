/**
 * Better Amoozeshyar
 * Filename: cleartimer.js
 * Skipping the countdown timer at the login time
 */

let a = document.getElementById("loginform");

if (document.getElementById("timerMessage") !== null) {
    
    let b = document.getElementsByTagName("tbody")[3]; // #FIXME future frontend changes may break this
    let c = document.createElement("tr");
    c.innerHTML = '<td dir="rtl" align="justify"><span style="color:#1a2563;">' +
    'در صورتی که بعد از وارد کردن کپچا به اشتباه کلید اینتر را فشار داده‌اید، می‌توانید از دکمه روبرو استفاده کنید: ' +
    '<button id="clearBtn">رد شدن از تایمر</button>' +
    '</span></td>';
    b.appendChild(c);
    document.getElementById("clearBtn").addEventListener("click", clearTimer);

}

function clearTimer() {
    a.operation.value = "endTimer";
    a.submit();
}