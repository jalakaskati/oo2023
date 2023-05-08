let sonad = JSON.parse(localStorage.getItem("sonad")) || [];

function lisaSona() {
    let sisestatudSona = document.getElementById("sisestus").value;
    if (sisestatudSona != "") {
        if (!sonad.includes(sisestatudSona)) {
            sonad.push(sisestatudSona);
        }
        sonad.sort(function(a, b) {
            let a_a_tahed = (a.match(/a/gi) || []).length;
            let b_a_tahed = (b.match(/a/gi) || []).length;
            if (a_a_tahed === b_a_tahed) {
                return a.localeCompare(b);
            } else {
                return a_a_tahed - b_a_tahed;
            }
        });
        document.getElementById("sonad").innerHTML = "";
        sonad.forEach(function(sona) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(sona));
            document.getElementById("sonad").appendChild(li);
        });
        localStorage.setItem("sonad", JSON.stringify(sonad));
    }
    document.getElementById("sisestus").value = "";
    document.getElementById("sisestus").focus();
}

window.onload = function() {
    sonad.forEach(function(sona) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(sona));
        document.getElementById("sonad").appendChild(li);
    });
}
