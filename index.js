let input = document.querySelector("#searchbar");
let animal = document.querySelectorAll(".animals");

input.addEventListener("keyup", () => {
    let output = input.value
    let name = output.toLowerCase();

    for (i = 0; i < animal.length; i++) {
        if (!animal[i].innerHTML.toLowerCase().includes(name)) {
            animal[i].style.display = "none";
        } else {
            animal[i].style.display = "list-item";
        }
    }
});

/*function searchAnimal() {
    let input = document.querySelector("#searchbar").value
    input = input.toLowerCase();
    let x = document.querySelectorAll(".animals");
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
        }
        else {
        x[i].style.display = "list-item";
        }
    }
    };*/
    //document.getElementsByClassName('animals')
    //document.getElementById('searchbar')