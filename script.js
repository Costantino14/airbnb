let locazione = document.getElementById("location");

document.querySelector(".ricerca").addEventListener("click", function() {
    if (locazione.value === "genova") {
        window.open("index2.html")
    } else { 
        if (locazione.value === "inverness") {
            window.open("index4.html")
        } else {
            alert("Devi digitare una location valida");

        }
    }

})