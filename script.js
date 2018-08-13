const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
//Number 1
    let newDiv1 = document.createElement ("div");
    newDiv1.textContent = JSON.stringify("Katas 4-1: " + gotCitiesCSV);

    let currentDiv1 = document.getElementById("div1");
    document.body.insertBefore(newDiv1, currentDiv1);


//Number 2
    let newDiv2 = document.createElement("div");
    newDiv2.textContent = JSON.stringify("Katas 4-2: " + bestThing);

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
    newDiv8.textContent = JSON.stringify("Katas 4-8" + lotrCitiesArray.splice(-6, 1));

    let currentDiv8 = document.getElementById("div8");
    document.body.insertBefore(newDiv8, currentDiv8);

    //Number 9
    let newDiv9 = document.createElement("div");
    newDiv9.textContent = JSON.stringify("Katas 4-9: " + lotrCitiesArray.splice(6));

    let currentDiv9 = document.getElementById("div9");
    document.body.insertBefore(newDiv9, currentDiv9);