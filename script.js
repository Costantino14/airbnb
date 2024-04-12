let locazione = document.getElementById("location");

document.querySelector(".ricerca").addEventListener("click", function() {
    if (locazione.value.toLowerCase() === "genova") {
        window.open("index2.html")
    } else { 
        if (locazione.value.toLowerCase() === "inverness") {
            window.open("index4.html")
        } else {
            alert("Devi digitare una location valida");

        }
    }

})