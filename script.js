const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

//Number 1
let newDiv1 = document.createElement("div");
newDiv1.textContent = JSON.stringify("Katas 4-1: " + gotCitiesCSV.split(", "));

let currentDiv1 = document.getElementById("div1");
document.body.insertBefore(newDiv1, currentDiv1);


//Number 2
let newDiv2 = document.createElement("div");
newDiv2.textContent = JSON.stringify("Katas 4-2: " + bestThing.split(" "));

let currentDiv2 = document.getElementById("div2");
document.body.insertBefore(newDiv2, currentDiv2);

//Number3
let newDiv3 = document.createElement("div");
newDiv3.textContent = JSON.stringify("Katas 4-3: " + gotCitiesCSV.replace(/,/g, ";"));

let currentDiv3 = document.getElementById("div3");
document.body.insertBefore(newDiv3, currentDiv3);


//Number 4
let newDiv4 = document.createElement("div");
newDiv4.textContent = JSON.stringify("Katas 4-4: " + lotrCitiesArray.join());

let currentDiv4 = document.getElementById("div4");
document.body.insertBefore(newDiv4, currentDiv4);

//Number 5
let newDiv5 = document.createElement("div");
newDiv5.textContent = JSON.stringify("Katas 4-5: " + lotrCitiesArray.slice(0, 5));

let currentDiv5 = document.getElementById("div5");
document.body.insertBefore(newDiv5, currentDiv5);

//Number 6
let newDiv6 = document.createElement("div");
newDiv6.textContent = JSON.stringify("Katas 4-5: " + lotrCitiesArray.slice(-5, 10));

let currentDiv6 = document.getElementById("div6");
document.body.insertBefore(newDiv6, currentDiv6);

//Number 7
let newDiv7 = document.createElement("div");
newDiv7.textContent = JSON.stringify("Katas 4-7: " + lotrCitiesArray.slice(2, 5));

let currentDiv7 = document.getElementById("div7");
document.body.insertBefore(newDiv7, currentDiv7);

//Number 8
let newDiv8 = document.createElement("div");
lotrCitiesArray.splice(-6, 1)
newDiv8.textContent = JSON.stringify("Katas 4-8: " + lotrCitiesArray);

let currentDiv8 = document.getElementById("div8");
document.body.insertBefore(newDiv8, currentDiv8);

//Number 9
let newDiv9 = document.createElement("div");
lotrCitiesArray.splice(5);
newDiv9.textContent = JSON.stringify("Katas 4-9: " + lotrCitiesArray);

let currentDiv9 = document.getElementById("div9");
document.body.insertBefore(newDiv9, currentDiv9);

//number 10
let newDiv10 = document.createElement("div");
newDiv10.textContent = JSON.stringify("Katas 4-10: " + lotrCitiesArray.splice(2, 0, 'Rohan') + lotrCitiesArray);

let currentDiv10 = document.getElementById("div10");
document.body.insertBefore(newDiv10, currentDiv10);

//Number 11
let newDiv11 = document.createElement("div");
lotrCitiesArray.splice(5, 1, 'Deadest Marshes')
newDiv11.textContent = JSON.stringify("Katas 4-11: " + lotrCitiesArray);

let currentDiv11 = document.getElementById("div11");
document.body.insertBefore(newDiv11, currentDiv11);

//Number 12
let newDiv12 = document.createElement("div");
newDiv12.textContent = JSON.stringify("Katas 4-12: " + bestThing.slice(0, 14));

let currentDiv12 = document.getElementById("div12");
document.body.insertBefore(newDiv12, currentDiv12);

//Number 13
let newDiv13 = document.createElement("div");
newDiv13.textContent = JSON.stringify("Katas 4-13: " + bestThing.slice(-12));

let currentDiv13 = document.getElementById("div13");
document.body.insertBefore(newDiv13, currentDiv13);

//Number 14
let newDiv14 = document.createElement("div");
newDiv14.textContent = JSON.stringify("Katas 4-14: " + bestThing.slice(23, -43));

let currentDiv14 = document.getElementById("div14");
document.body.insertBefore(newDiv14, currentDiv14);

//Number 15
let newDiv15 = document.createElement("div");
newDiv15.textContent = JSON.stringify("Katas 4-15: " + bestThing.substr(-12));

let currentDiv15 = document.getElementById("div15");
document.body.insertBefore(newDiv15, currentDiv15);

//Number 16
let newDiv16 = document.createElement("div");
newDiv16.textContent = JSON.stringify("Katas 4-16: " + bestThing.substr(23, 15));

let currentDiv16 = document.getElementById("div16");
document.body.insertBefore(newDiv16, currentDiv16);

//Number 17
let newDiv17 = document.createElement("div");
newDiv17.textContent = JSON.stringify("Katas 4-17: The index number of where 'Only' starts at " + bestThing.indexOf("only"));

let currentDiv17 = document.getElementById("div17");
document.body.insertBefore(newDiv17, currentDiv17);

//Number 18
let newDiv18 = document.createElement("div");
newDiv18.textContent = JSON.stringify("Katas 4-18: The index number of the last word is " + bestThing.lastIndexOf("bit"));

let currentDiv18 = document.getElementById("div18");
document.body.insertBefore(newDiv18, currentDiv18);

//Number 19
let newDiv19 = document.createElement("div");
let newArray19 = gotCitiesCSV.split(",");

const citiesWithDoubleVowels =
    newArray19.filter(function (cityName) {    
        return cityName.includes("aa") ||
            cityName.includes("ee") ||
            cityName.includes("ii") ||
            cityName.includes("oo") ||
            cityName.includes("uu");
    })

const newInfo19 = document.createTextNode(JSON.stringify("Katas 4-19: " + citiesWithDoubleVowels));
let currentDiv19 = document.getElementById("div19");
document.body.insertBefore(newInfo19, currentDiv19);


//Number 20
let newDiv20 = document.createElement("div")
let fa20 = [];

for (let i = 0; i < lotrCitiesArray.length; i += 1) {
    if (lotrCitiesArray[i].endsWith("or")) {
        fa20.push(lotrCitiesArray[i])
    }
}
const newInfo20 = document.createTextNode(JSON.stringify("Katas 4-20: " + fa20));
let currentDiv20 = document.getElementById("div20");
document.body.insertBefore(newInfo20, currentDiv20);

//Number 21

let newDiv21 = document.createElement("div");
let newArray21 = bestThing.split(" ");
let fa21 = [];
for (let i = 0; i < newArray21.length; i += 1) {
    if (newArray21[i].startsWith("b")) {
        fa21.push(newArray21[i])
    }
}
let newInfo21 = document.createTextNode(JSON.stringify("Katas 4-21: " + fa21));
let currentDiv21 = document.getElementById("div21");
document.body.insertBefore(newInfo21, currentDiv21);

    //Number 22
    if (lotrCitiesArray.includes("Mirkwood") == true) {
    let newDiv22 = document.createElement("div");
    newDiv22.textContent = JSON.stringify("Katas 4-22: Does lotrCitiesArray include Mirkwood? Yes");

    let currentDiv22 = document.getElementById("div22");
    document.body.insertBefore(newDiv22, currentDiv22);
}
    //Number 23
    if (lotrCitiesArray.includes("Hollywood") == true) {
    let newDiv23 = document.createElement("div");
    newDiv23.textContent = JSON.stringify("Katas 4-23: Does lotrCitiesArray include Hollywood. Yes");

    let currentDiv23 = document.getElementById("div23");
    document.body.insertBefore(newDiv23, currentDiv23);
}
else {
    let newDiv23 = document.createElement("div");
    newDiv23.textContent = JSON.stringify("Katas 4-23: Does lotrCitiesArray include Hollywood. No");

    let currentDiv23 = document.getElementById("div23");
    document.body.insertBefore(newDiv23, currentDiv23);
}
    //Number 24
    let newDiv24 = document.createElement("div");
    newDiv24.textContent = JSON.stringify("Katas 4-24: " + lotrCitiesArray.indexOf("Mirkwood"));

    let currentDiv24 = document.getElementById("div24");
    document.body.insertBefore(newDiv24, currentDiv24);

    //Number 25
    let newDiv25 = document.createElement("div"); 
    let newArray25 = lotrCitiesArray

const citiesWithTwoWords =
    newArray25.filter(function (cityName2) {    
        return cityName2.includes(" ")
    })

const newInfo25 = document.createTextNode(JSON.stringify("Katas 4-25: " + citiesWithTwoWords));
let currentDiv25 = document.getElementById("div25");
document.body.insertBefore(newInfo25, currentDiv25);


    //Number 26
    let newDiv26 = document.createElement("div");
    newDiv26.textContent = JSON.stringify("Katas 4-26: " + lotrCitiesArray.reverse());

    let currentDiv26 = document.getElementById("div26");
    document.body.insertBefore(newDiv26, currentDiv26);

    //Number 27
    let newDiv27 = document.createElement("div");
    newDiv27.textContent = JSON.stringify("Katas 4-27: " + lotrCitiesArray.sort());

    let currentDiv27 = document.getElementById("div27");
    document.body.insertBefore(newDiv27, currentDiv27);

    //Number28
    function compareNumbers(a, b) {
        return a.length - b.length;
      }
    let newDiv28 = document.createElement("div");
    newDiv28.textContent = JSON.stringify("Katas 4-28: " + lotrCitiesArray.sort(compareNumbers))

    let currentDiv28 = document.getElementById("div28");
    document.body.insertBefore(newDiv28, currentDiv28);

    //Number 29
    let newDiv29 = document.createElement("div");
    lotrCitiesArray.pop()
    newDiv29.textContent = JSON.stringify("Katas 4-29: " + lotrCitiesArray)

    let currentDiv29 = document.getElementById("div29");
    document.body.insertBefore(newDiv29, currentDiv29);

    //Number 30
    let newDiv30 = document.createElement("div");
    lotrCitiesArray.push("Deadest Marshes")
    newDiv30.textContent = JSON.stringify("Katas 4-30: " + lotrCitiesArray);

    let currentDiv30 = document.getElementById("div30");
    document.body.insertBefore(newDiv30, currentDiv30);

    //Number 31
    let newDiv31 = document.createElement("div");
    lotrCitiesArray.shift()
    newDiv31.textContent = JSON.stringify("Katas 4-31: " + lotrCitiesArray);

    let currentDiv31 = document.getElementById("div31");
    document.body.insertBefore(newDiv31, currentDiv31);

    //Number 32
    let newDiv32 = document.createElement("div");
    lotrCitiesArray.unshift("Rohan")
    newDiv32.textContent = JSON.stringify("Katas 4-32: " + lotrCitiesArray);

    let currentDiv32 = document.getElementById("div32");
    document.body.insertBefore(newDiv32, currentDiv32);