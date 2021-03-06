// Przykładowa tablica
var arr = ["Alfa Romeo", "Mercedes", "Skoda", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes"];

function updateArrayContentDOM() {
    // Wybranie elementu z DOM
    var arrayContentDOM = document.getElementById('array-content');
    // Usuniecie istniejacych elementów
    arrayContentDOM.innerHTML = '';

    // Iterujemy po kazdym elemencie w tablicy
    arr.forEach(function (value, index) {
        // Przygotowanie HTML z wartością
        var contentDOM = '<div class="col-3"><div class="box"><div class="box-actions"><button class="btn btn-warning btn-sm" onclick="mergeLeftElement(' + index + ')"><i class="fas fa-angle-left"></i></button><button class="btn btn-warning btn-sm" onclick="mergeRightElement(' + index + ')"><i class="fas fa-angle-right"></i></button><button class="btn btn-warning btn-sm" onclick="mergeAllRightElement(' + index + ')"><i class="fas fa-angle-double-right"></i></button><button class="btn btn-warning btn-sm" onclick="cloneElement(' + index + ')"><i class="far fa-copy"></i></button><button class="btn btn-danger btn-sm" onclick="removeElement(' + index + ')"></i><i class="far fa-trash-alt"></i></button></div>' + value + '</div></div>';
        // Wstawienie do DOM przygotowanego HTML'a (przed końcem)
        arrayContentDOM.insertAdjacentHTML('beforeend', contentDOM);
    });
}

function removeElement(index) {
    // 0. Musimy wiedziec ktory jest klikniety
    // 1. Usunac klikniety (konkretny) element z tablicy
    arr.splice(index, 1);
    // 2. Zaktualizować widok
    updateArrayContentDOM();
}

function cloneElement(index) {
    arr.splice(index, 0, arr[index]);
    updateArrayContentDOM();
}

// 1. Mergowanie elementu z lewej
function mergeLeftElement(index) {
    if (index !== 0) {
        arr[index] = arr[index - 1] + ' ' + arr[index]
        arr.splice(index - 1, 1)
        updateArrayContentDOM();
    }
}

// 2. Mergowanie elementu z prawej
function mergeRightElement(index) {
    if (index < arr.length - 1) {
        arr[index] = arr[index] + ' ' + arr[index + 1]
        arr.splice(index + 1, 1);
        updateArrayContentDOM();
    }
}

// 3. Mergowanie wszystkich elementów z prawej
function mergeAllRightElement(index) {
    arr.splice(index + 1);
    updateArrayContentDOM();
}

// 4. Przesuń w lewo
// 5. Przesuń w prawo
// Mergeowanie = Dołącz składniki do źródła i usuń składniki


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

// var prices = [15, 16.08, 33.23, 49.99, 50, 50.01, 150, 167.88]
// var cost = prices.reduce(function (reduced, price) {
//     console.log(reduced)
//     console.log(price)
//     var reducedPrice = price
//     if (price > 50) {
// reducedPrice *= 0.85
//     }
//     console.log(reducedPrice)
//     console.log('...')
//     return reduced + reducedPrice
// }, 0)
// console.log(cost)
//     console.log('..................')

    console.log(arr)
var lengthTotal = arr.reduce(function (reduced, name) {
    console.log(reduced)
    console.log('+')
    console.log(name.length)
    console.log('=')
    var unitLength = name.length
    return reduced + unitLength
}, 0)
console.log(lengthTotal)


// var squaresP1 = [1, 4, 5, 3]
// var squaresP2 = [2, 2, 2, 2, 2]

// function whoWind(squaresP1, squaresP2)
// var areaP1 = squaresP1.reduce(function)


var cars = ["Alfa Romeo", "Mercedes", "Skoda", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes"];

var carsLength = cars.map(function(name){
    return name.length
})
console.log(carsLength)