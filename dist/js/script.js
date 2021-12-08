// 1 užduotis
// var n;
// n = 10;

// if (n > 0) {
//     console.log("Skaičius yra geras");
// } else if (n < 0) {
//     console.log("Skaičius yra blogas");
// } else {
//     console.log("Skaičius yra nulis");
// }

// // 2 užduotis
// var m;
// m = 5;

// if (m == 2) {
//     console.log("Palaukite")
// } else if (m == 2) {
//     console.log("Eikite")
// } else if (m == 3) {
//     console.log("Stovėkite");
// } else {
//     console.log("Įvestas skaičius nėra nei 1, nei 2, nei 3");
// }

// // 3 užduotis
// var d;
// var k;
// var t;
// d = 3;
// k = 18;
// t = 5;

// if (k <= d * t) {
//     console.log("Knygos telpa į dėžes")
// } else if (k > d * t) {
//     console.log("Knygos netelpa į dėžes")
// }

// 4 užduotis
// let n = 1221;
// let ketvirtas = n % 10;
// let trecias = Math.floor(n / 10) % 10;
// let antras = Math.floor(n / 100) % 10;
// let pirmas = Math.floor(n / 1000);

// if (pirmas == ketvirtas) {
//     if (antras == trecias) {
//         console.log("Skaicius yra polindromas")
//     } else {
//         console.log("Skaicius nera polindromas");
//     }

// }



// // 6 užduotis
// let metai = 1996;

// if (metai % 4 == 0 && metai % 100 != 0) {
//     console.log ("Keliamieji")
// } else {
//     console.log ("Nekeliamieji")
// } 


// // 7 užduotis
// let h = 12321;

// let t1 = h % 10;
// let t2 = Math.floor (h/10) % 10;
// let t3 = Math.floor (h/100) % 10;
// let t4 = Math.floor (h/1000) % 10;
// let t5 = Math.floor (h/10000) % 10;

// if (t1 == t5 && t2 = t4) {
//     console.log("Skaicius polindromas")
// } else {
//     console.log("Skaicius nepolindromas")
// }

// 8 užduotis
let n = 5;

if (n <= 6 && n >= 1) {
    if (n % 2 == 0) {
        console.log('vyresnelis')
    } else {
        console.log('juanelis');
    }

} else {
    console.log('zasine, kauliuke tik iki sesiu');
}

// 9 užduotis
let p1 = 5;
let p2 = 8;
let p3 = 10;

if (p1 > p2 && p3 < p1) {
    console.log("geriausias1")
} else if (p2 < p1 && p3 < p2) {
    console.log("prastesnis2")
} else {
    console.log("geriausias3")
}