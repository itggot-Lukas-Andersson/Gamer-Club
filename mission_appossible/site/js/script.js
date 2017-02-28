function hidePassword() {
    var icons = ["visibility", "visibility_off"];
    if (document.getElementById("vis").innerHTML == icons[0]) {
        document.getElementById("vis").innerHTML = icons [1];
    }
    else {
        document.getElementById("vis").innerHTML = icons [0];
    }

    password()
    
}

function password() {
    if (document.getElementById("vis").innerHTML == "visibility_off") {
        document.getElementById("pw").type = "password"
    }
    else {
        document.getElementById("pw").type = "text"
    }
}

function setActive1() {
    if (document.querySelector("#tab2").classList.contains("selected")) {
        document.querySelector("#tab2").classList.remove("selected");
    }
    if (!document.querySelector("#tab1").classList.contains("selected"))
       document.querySelector("#tab1").classList.add("selected")
}

function setActive2() {
    if (document.querySelector("#tab1").classList.contains("selected")) {
        document.querySelector("#tab1").classList.remove("selected");
    }
    if (!document.querySelector("#tab2").classList.contains("selected"))
       document.querySelector("#tab2").classList.add("selected")
}
