var s1 = {
    // Przechowujemy pozycję lewy górny punkt = x, y
    x: 5,
    y: 5,
    // Przechowujemy długość boku = a
    a: 5,
    // Metoda zwracajaca powierzchnie kwadratu
    getArea: function () {
        return this.a * this.a;
    },
    // Metoda zwraca czy punkt jest wewnatrz kwadratu
    collide: function (p) {
        // Zwracamy true / false
        return (p.x > this.x) && (p.x < this.x + this.a) && (p.y < this.y) && (p.y > this.y - this.a);
    }
}

var s2 = {
    // Przechowujemy pozycję lewy górny punkt = x, y
    x: -2,
    y: -2,
    // Przechowujemy długość boku = a
    a: 2,
    // Metoda zwracajaca powierzchnie kwadratu
    getArea: function () {
        return this.a * this.a;
    },
    // Metoda zwraca czy punkt jest wewnatrz kwadratu
    collide: function (p) {
        // Zwracamy true / false
        return (p.x > this.x) && (p.x < this.x + this.a) && (p.y < this.y) && (p.y > this.y - this.a);
    }
}

var p1 = {x: 3, y: 3}
var p2 = {x: 7, y: 2}
var p3 = {x: 6, y: 6}
var p4 = {x: 9, y: 4}

console.log(s1.collide(p1));
console.log(s1.collide(p2));
console.log(s1.collide(p3));
console.log(s1.collide(p4));
console.log(s2.collide(p1));
console.log(s2.collide(p2));
console.log(s2.collide(p3));
console.log(s2.collide(p4));