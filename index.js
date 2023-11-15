// 1 uzduotis
// let paz=parseInt(prompt("Iveskite pazymi:"));
// if(paz>=1 && paz<=3){
//     console.log('Neigiamas pazymys');
// }
// else if(paz>=4 && paz<=5){
//     console.log('Teigiamas, bet reikia pasistengti');
// }
// else if(paz>=6 && paz<=7){
//     console.log('Vidutiniskai, ar tikrai tau to gana');
// }
// else if(paz>=8 && paz<=9){
//     console.log('Pagirk save');
// }
// else if(paz==10){
//     console.log('Super!');
// }
// else{
//     console.log('Patekta neteisinga reiksme');
// }

// 2 uzduotis
// let men=prompt("Iveskite menesio pavadinima: ");
// switch(men){
//     case 'gruodis':
//     case 'sausis':
//     case 'vasaris':
//         console.log('Ziemai');
//         break;
//     case 'kovas':
//     case 'balandis':
//     case 'geguze':
//         console.log("Pavasariui");
//         break;
//     case 'birzelis':
//     case 'liepa':
//     case 'rugpjutis':
//         console.log("Vasarai");
//         break;
//     case 'rugsejis':
//     case 'spalis':
//     case 'lapkritis':
//         console.log("Rudeniui");
//         break;
//     default:
//         console.log("Ivestas ne menesio pavadinimas")
// }



// 3 uzduotis
// let time=parseInt(prompt("Iveskite kiek val:"));
// if (time>=6 && time<=11){
//     console.log("Labas rytas")
// }
// else if(time>11 && time<18){
//     console.log("Laba diena")
// }
// else if(time>=18 && time<=21){
//     console.log("Labas vakaras")
// }
// else{
//     console.log("Labanakt")
// }

// 4 uzudotis
// const date = new Date();
// const day = date.getDay();
// switch(day){
//     case 1:
//         console.log(`${date}, pirmadienis`);
//         break;
//     case 2:
//         console.log(`${date}, antradienis`);
//         break;
//     case 3:
//         console.log(`${date}, treciadienis`);
//         break;
//     case 4:
//         console.log(`${date}, ketvirtadienis`);
//         break;
//     case 5:
//         console.log(`${date}, penktadienis`);
//         break;
//     case 6:
//         console.log(`${date}, sestadienis`);
//         break;
//     case 7:
//         console.log(`${date}, sekmadienis`);
//         break;
// }
 

// 5 uzduotis
// let amzius=parseInt(prompt("Iveskite kiek jums metu:"));
// let pazymejimas=prompt("Ar turi vairuotojo pazymejima? (taip/ne)");
// if(amzius>=18){
//     if(pazymejimas=='taip'){
//         console.log("Zmogus yra pilnametis ir turi vairuotojo pazimejima");
//     }
//     else{
//         console.log("Zmogus yra pilnametis, bet neturi vairuotojo pazymejimo");
//     }
// }
// else{
//     console.log("Zmogus yra nepilnametis")
// }

// 6 uzduotis
// let sk=parseInt(prompt("Iveskite skaiciu: "));
// if(sk<0){
//     console.log("Skaicius yra neigiamas")
// }
// else if(sk==0){
//     console.log("Skaicius yra lygus nuliu")
// }
// else{
//     console.log("Skaicius yra teigiamas")
// }

// 7 uzduotis
// let prisijungimas=prompt("Ar vartotojas prisijungias? (taip/ne)")
// let admin=prompt("Ar vartotojas yra adminas? (taip/ne)")
// if(prisijungimas=='taip'){
//     if(admin=='taip'){
//         console.log("Prisijungias vartotojas yra adminas");
//     }
//     else{
//         console.log("Prisijungias vartotojas nera adminas");
//     }
// }
// else{
//     console.log("Vartotojas yra neprisijungias");
// }


// 8 uzudotis
// let login=prompt("Ar vartotojas prisijungias? (taip/ne)");
// let role=prompt("Koks vartotojas esate? (user/admin)");
// let skelbimas=prompt("Ar skelbimas priklauso jums? (taip/ne)");
// if(login=='taip'){
//     if(role=='user'){
//         if(skelbimas=='taip'){
//             console.log("Prisijungias vartotojes yra user galintis istrinti skelbima");
//         }
//         else{
//             console.log("Prisijungias vartotojes, jokie veiksmai negalimi");
//         }
//     }
//     else{
//         console.log("Prisijungias vartotojes yra admin turintis patvirtinti skelbima");
//     }
// }
// else{
//     console.log("Vartotojas yra neprisijungias");
// }


// 9 uzduotis
// let sk1=parseInt(prompt("Iveskite skaiciu: "));
// if(sk1>=50){
//     console.log(`Buvo ivestas skaicius: ${sk1}`)
// }
// else{
//     console.log("Ivestas skaicius mazesnis uz 50")
// }


// 10 uzduotis
// let sk2=parseInt(prompt("Iveskite pirma skaiciu: "));
// let veiksmas=prompt("Iveskite veiksma (+,-,*,/): ");
// let sk3=parseInt(prompt("Iveskite antra skaiciu: "));
// if(veiksmas=='+'){
//     sum1 = sk2+sk3;
//     console.log(`suma: ${sum1}`);
// }
// else if(veiksmas=='-'){
//     sum2 = sk2-sk3;
//     console.log(`suma ${sum2}`);
// }
// else if(veiksmas=='*'){
//     sum3 = sk2*sk3;
//     console.log(`suma ${sum3}`);
// }
// else if(veiksmas=='/' && sk3==0){
//     console.log("veiksmas negalimas");
// }
// else if(veiksmas=='/'){
//     sum4 = sk2/sk3;
//     console.log(`suma ${sum4}`);
// }
// else{
//     console.log("veiksmas negalimas")
// }