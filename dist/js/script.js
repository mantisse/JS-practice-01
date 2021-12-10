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
// let n = 5;

// if (n <= 6 && n >= 1) {
//     if (n % 2 == 0) {
//         console.log('vyresnelis')
//     } else {
//         console.log('juanelis');
//     }

// } else {
//     console.log('zasine, kauliuke tik iki sesiu');
// }

// 9 užduotis
// let p1 = 5;
// let p2 = 8;
// let p3 = 10;

// if (p1 > p2 && p3 < p1) {
//     console.log("geriausias1")
// } else if (p2 < p1 && p3 < p2) {
//     console.log("prastesnis2")
// } else {
//     console.log("geriausias3")
// }


// ---------5 užduotis--------

// let n = 222442;
// let m = n.toString();
// console.log(m);
// let o = m.split("");
// console.log(o);

// let sum = 0;
// for (let i = 0; i < 6; ++i){
//     sum += parseInt(o[i]);
// }
// console.log(sum);



// Math.floor(); - Apvalina skaičių į mažąją pusę
// Math.round(); - Apvalina skaičių pagal matematikos taisykles
// Math.ceil(); - Apvalina skaičių į didžiąją pusę
// && (AND) if(a == 0 && b == 5){then...}  ----- The logical AND (&&) operator (logical conjunction) for a set of Boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
// % - 17/5=3.4    17 = 3*5+2  17 = 2*6+5 
// || (OR) if (a === 0 || b === 5){then...}
// ! (NOT) if (a !== 0 && a!==5 ) - loginis NE



// 10 užduotis
// let n = 10;

// if (n>0 && n<13){
//     if(n == 2){
//         console.log(28);
//     } else if (n == 4 || n === 6 || n === 9 || n === 11){
//         console.log(30)
//     } else if (n === 1 || n === 3 || n === 5 || n === 7 || n === 8 || n === 10 || n === 12){
//         console.log(31)
//     } else {console.log("Tokio mėnesio nėra")}


// 11 uzd
// let v = 8;
// let m = 30;
// let v1 = 8;
// let m1 = 29;
// let m2 = 43;

// if (v*60+m >= v1*60+m1+m2){
//     console.log("Nepaveluos")
// } else {
//     console.log("Paveluos")
// }


// 12 uzd
// Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti:Trikampį sudėlioti negalima.

// let n = 26;

// if ((n % 3 === 0) && (n != 0)){
//     console.log("Galima")
// } else {
//     console.log("Negalima")
// }

// 13 uzd
// Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.

// let m = 1904;
// let n = 1896;

// if ((m-n)%4===0){
//     console.log(((m-n/4)+1));
// } else {
//     console.log("Neolimpiniai")
// }



// 14 uzd
// Žinomi kvadratinės lygties ax2 +bx+c=0 koeficientai a, b, c. Parašykite programą, kuri rastų lygties sprendinius. Pasitikrinkite:a=1, b=2, c=1, kompiuterio ekrane turi būti rodomas rezultatas: vienas sprendinys 1.00 a=1, b=4, c=3, kompiuterio ekrane turi būti rodomas rezultatas: du sprendiniai 3.00 1.00 a=1, b=3, c=4, kompiuterio ekrane turi būti rodomas rezultatas: nėra sprendinių

let a = 1;
let b = 2;
let c = 1;

