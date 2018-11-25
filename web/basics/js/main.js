// Przykładowa tablica
var arr = ["Alfa Romeo", "Mercedes", "Skoda", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes"];

updateArrayContentDOM();

function updateArrayContentDOM() {
    // Wybranie elementu z DOM
    var arrayContentDOM = document.getElementById('array-content');
    arrayContentDOM.innerHTML = '';

    // Iterujemy po kazdym elemencie w tablicy
    arr.forEach(function (value) {
        // Przygotowanie HTML z wartością
        var contentDOM = '<div class="col-3"><div class="box">' + value + '</div></div>';
        // Wstawienie do DOM przygotowanego HTML'a (przed końcem)
        arrayContentDOM.insertAdjacentHTML('beforeend', contentDOM);
    });
}

arr.forEach(function (value, index, arr) {
//    console.log(value);
//    console.log(index);
//    console.log(arr);
});

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}













updateArrayLenghtDOM();

function updateArrayLenghtDOM() {
    var arrayLengthDOM = document.getElementById('array-length');
    arrayLengthDOM.innerHTML = arr.length;
}