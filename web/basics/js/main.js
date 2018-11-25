// Przykładowa tablica
var arr = ["Alfa Romeo", "Mercedes", "Skoda", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes"];

function updateArrayContentDOM() {
    // Wybranie elementu z DOM
    var arrayContentDOM = document.getElementById('array-content');
    // Usuniecie istniejacych elementów
    arrayContentDOM.innerHTML = '';

    // Iterujemy po kazdym elemencie w tablicy
    arr.forEach(function (value) {
        // Przygotowanie HTML z wartością
        var contentDOM = '<div class="col-3"><div class="box"><div class="box-actions"><button class="btn btn-danger btn-sm" onclick="removeElement()"><i class="far fa-trash-alt"></i></button></div>' + value + '</div></div>';
        // Wstawienie do DOM przygotowanego HTML'a (przed końcem)
        arrayContentDOM.insertAdjacentHTML('beforeend', contentDOM);
    });
}

function pushElement() {
    // 1. Musze wiedziec co dodaje = chce sciagnac z inputa tresc (value)
    var inputDOM = document.getElementById('element-name');
    // 2. Pobrac wartosc z inputa
    var value = inputDOM.value;
    if (value) {
        // 3. Dodac element do tablicy o wartosci
        arr.push(value);
        // 4. Zaktualizować widok
        updateArrayContentDOM();
    }
}

function unshiftElement() {
    // 1. Musze wiedziec co dodaje = chce sciagnac z inputa tresc (value)
    var inputDOM = document.getElementById('element-name');
    // 2. Pobrac wartosc z inputa
    var value = inputDOM.value;
    if (value) {
        // 3. Dodac element do tablicy o wartosci
        arr.unshift(value);
        // 4. Zaktualizować widok
        updateArrayContentDOM();
    }
}

function removeFirst() {
    arr.shift();
    updateArrayContentDOM();
}

function removeLast() {
    arr.pop();
    updateArrayContentDOM();
}


updateArrayLenghtDOM();

function updateArrayLenghtDOM() {
    var arrayLengthDOM = document.getElementById('array-length');
    arrayLengthDOM.innerHTML = arr.length;
}