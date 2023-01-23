/**
 * Advanced Amoozeshyar
 * Filename: csvexport.js
 * Export the course table results as csv
 */

// Create a new csv export button

let c = document.createElement("span");
c.className = "gradiantButton";
c.innerHTML =
    '<button type="button" class="button"' +
    ' style="background-image: url(Pages/images/xls.gif);"' +
    ' id="exportAsCSV"> دریافت نتایج</button>';

// Find the broken csv export button

let d = document.querySelectorAll('#exportCSV');
if (d.length != 0) {
    d[0].insertAdjacentElement("beforebegin", c); // Inject the new button before the broken one
    for (let i = 0; i <= d.length - 1; i++) d[i].remove(); // Remove the broken buttons as we don't need them
    document.getElementById("exportAsCSV").onclick = function () {
        // #FIXME: Check if there's a better way doing this!
        let results = export_as_csv('scrollable');
        let filename = 'Course_Export_' + Date.now() + '.csv';
        let link = document.createElement('a');
        link.style.display = 'none';
        link.setAttribute('target', '_blank'); // Stay on the current tab
        link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(results));
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
}

// Original credits goes to: https://stackoverflow.com/a/56370447

function export_as_csv(table_id) {
    let rows = document.querySelectorAll('table#' + table_id + ' tr');
    let csv = [];
    for (let i = 0; i < rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll('td, th');
        for (let j = 0; j < cols.length; j++) {
            let data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ');
            data = data.replace(/"/g, '""');
            row.push('"' + data + '"');
        }
        csv.push(row.join(','));
    }
    return '\uFEFF' + csv.join('\n');
}