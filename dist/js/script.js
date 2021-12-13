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

// let a = 1;
// let b = 2;
// let c = 1;
// let d = (b*b)-(4*a*c);
// console.log(d);

// // d=0
// let s = b/(2*a);

// // kai d>0
// let s1 = ((-b)+Math.sqrt(d)/(2*a));
// let s2 = ((-b)-Math.sqrt(d)/(2*a));

// if (d>0){
//     console.log("Du sprendimai"+" "+s1+" "+s2);
// } else if (d===0){
//     console.log("Vienas sprendimas"+s);
// } else {
//     console.log("Nera sprendiniu")
// }



// 15 uzd
// Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10

// let c=50160;
// let p=225;
// let k=Math.floor(c/p);

// // m=c % p;

// if (c>=p){
//     console.log("Saulius pirks" + " " + k + " " + "porcijas, liks centu" + " " + (c-(k*p)));
// } else {
//     console.log("Neuztenka")
// }




// 16 uzd
// Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių prekių. Į mašiną telpa m dėžių prekių. Sukurkite programą, kuri apskaičiuotų ir kompiuterio ekrane parodytų, kiek kartų k turės nuvažiuoti vairuotojas į sandėlį, kad parvežtų visas prekių dėžes į parduotuvę. Pasitikrinkite: jei n = 100, m = 14, tai k = 8.

// let n = 5;
// let m = 0;

// if (n>=1 && m>=1){
//     console.log("Reiks nuvaziuoti" + " " + Math.ceil(n/m) + " kartu")
// } else {
//     console.log("Ner ko vaziuot")
// }




// 17 uzd
// Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu vienetu, o mažesnį padidintu vienetu.

// let a = 9;
// let b = 9;

// if (a>b){
//     console.log("a=" + (a-1) + " b=" + (b+1));
// } else if (a<b){
//     console.log("a=" + (a+1) + " b=" + " " + (b-1));
// } else {
//     console.log("Skaiciai lygus")
// }



// ----------------2 dalis---------------------------------
// 1 uzd
// Parašykite programą, kuri apskaičiuotų, kiek knygų k vidutiniškai per metus perskaito vienas mokyklos bibliotekos lankytojas. Žinomas vidutiniškai per vieną mėnesį perkaitytų knygų skaičius v ir vidutiniškai per metus apsilankiusiųjų bibliotekoje skaičius n. Pasitikrinkite: Įvedę v = 120 , n = 800, turėtume gauti: k = 2;

// let v = 120;
// // avg knygos / month
// let n = 800;
// // avg visitors / year

// k = (v*12)/n;
// console.log(k);



// 2 uzd
// Parašykite programą, kuri apskaičiuotų, kiek vidutiniškai keleivių k važiuoja į Vilnių viename traukinio vagone, jei žinomas traukinio keleivių skaičius n, keleivių vykstančių ne į Vilnių, skaičius m ir vagonų skaičius v. Pasitikrinkite: Įvedę n = 100 , m = 20 ir v = 4, turėtume gauti: k = 20;

// let n = 111;
// // bendras keleiviu sk
// let m = 20;
// // keleiviai ne į Vilniu
// let v = 4;
// // vagonu sk

// k = (n-m)/v;
// console.log(k);


// 3 uzd
// Atnaujinus sodo namą, jo kaina išaugo 25%. Rašant skelbimą apie šį namą, buvo padaryta klaida — neteisingai nurodyta naujoji kaina. Kokia turėtų būti naujoji namo kaina, kai pradinė yra n eurų, o nauja parašyta kaina p eurų? Pasitikrinkite: Kai n = 54000, p=60000, turi būti spausdinama: nauja namo kaina 67500.

// let n = 100000;
// // pradine kaina Eur
// // 60000;
// // klaidinga kaina Eur

// p = n + n*0.25;
// console.log("Nauja namo kaina " + p)




// 4 uzd
// Viename ūkyje surinkta n (realus) tonų obuolių derliaus, o kitame surinkta m (realus) tonų mažiau. Kiek tonų surinkta abiejuose ūkiuose? Pasitikrinkite: Kai n = 39.2, m=0.4, turi būti spausdinama: abiejuose ūkiuose surinkta 78.

// let n1 = 39.2;
// let m = 0.4;
// n2 = n1 - m;
// console.log("Abiejuose ūkiuose surinkta " + (n1+n2));




// 5 uzd
// Senį besmegenį sudaro trys sniego rutuliai. Popieriuje jie atrodo kaip skrituliai. Mažiausio skritulio spindulys r. Sudarykite programą, kuri apskaičiuotų kiekvieno skritulio plotą, jei kitų apskritimų spinduliai 2 kartus didesni už prieš tai esantį? Pasitikrinkite: Kai r=1, turi būti spausdinama: skritulių plotai 3.14, 12.56 ir 50.24

// let r1 = 1;
// // mažiausias skritulys 
// r2 = r1 * 2;
// r3 = r2 * 2;
// console.log("Sritulių plotai " + "r1=" + 3.14*r1*r1 + " r2=" + 3.14*r2*r2 + " r3=" + 3.14*r3*r3);




// 6 uzd
// Turime šešis atsitiktinius skaičius nuo 1000 iki 9999. Surikiuoti juos didėjimo tvarka.

// let s1 = 5111;
// let s2 = 2222;
// let s3 = 3333;
// let s4 = 1444;
// let s5 = 5555;
// let s6 = 4666;

// console.log("Pradinės reikšmės")
// console.log(s1+"; "+s2+"; "+s3+"; "+s4+"; "+s5+"; "+s6);

// if (s1<=s2) {
//     let k11=s1;
//     s1=s2;
//     s2=k11;
// }
// if (s2<=s3) {
//     let k21=s2;
//     s2=s3;
//     s3=k21;
// }
// if (s3<=s4) {
//     let k31=s3;
//     s3=s4;
//     s4=k31;
// }
// if (s4<=s5) {
//     let k41=s4;
//     s4=s5;
//     s5=k41;
// }
// if (s5<=s6) {
//     let k51=s5;
//     s5=s6;
//     s6=k51;
// }
 
// if (s1<=s2) {
//     let k12=s1;
//     s1=s2;
//     s2=k12;
// }
// if (s2<=s3) {
//     let k22=s2;
//     s2=s3;
//     s3=k22;
// }
// if (s3<=s4) {
//     let k32=s3;
//     s3=s4;
//     s4=k32;
// }
// if (s4<=s5) {
//     let k42=s4;
//     s4=s5;
//     s5=k42;
// }
 
// if (s1<=s2) {
//     let k13=s1;
//     s1=s2;
//     s2=k13;
// }
// if (s2<=s3) {
//     let k23=s2;
//     s2=s3;
//     s3=k23;
// }
// if (s3<=s4) {
//     let k33=s3;
//     s3=s4;
//     s4=k33;
// }
 
// if (s1<=s2) {
//     let k14=s1;
//     s1=s2;
//     s2=k14;
// }
// if (s2<=s3) {
//     let k24=s2;
//     s2=s3;
//     s3=k24;
// }
 
// if (s1<=s2) {
//     let k15=s1;
//     s1=s2;
//     s2=k15;
// }
// console.log("Rikiavimas didėjančia kryptimi")
// console.log (s6+"; "+s5+"; "+s4+"; "+s3+"; "+s2+"; "+s1);




