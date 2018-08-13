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
    newDiv8.textContent = JSON.stringify("Katas 4-8: Removed " + lotrCitiesArray.splice(-6, 1));
    console.log(lotrCitiesArray);

    let currentDiv8 = document.getElementById("div8");
    document.body.insertBefore(newDiv8, currentDiv8);

    //Number 9
    let newDiv9 = document.createElement("div");
    newDiv9.textContent = JSON.stringify("Katas 4-9: Removed " + lotrCitiesArray.splice(5));

    let currentDiv9 = document.getElementById("div9");
    document.body.insertBefore(newDiv9, currentDiv9);
    console.log(lotrCitiesArray);

    //number 10
    let newDiv10 = document.createElement("div");
    newDiv10.textContent = JSON.stringify("Katas 4-10: Check Console Log for re-add " + lotrCitiesArray.splice(2, 0, 'Rohan'));

    let currentDiv10 = document.getElementById("div10");
    document.body.insertBefore(newDiv10, currentDiv10);
    console.log(lotrCitiesArray);

    //Number 11
    let newDiv11 = document.createElement("div");
    newDiv11.textContent = JSON.stringify("Katas 4-11: " + lotrCitiesArray.splice(5, 1, 'Deadest Marshes') + " changed.  Check Console.");

    let currentDiv11 = document.getElementById("div11");
    document.body.insertBefore(newDiv11, currentDiv11);
    console.log(lotrCitiesArray);

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

    // //Number 14
    let newDiv14 = document.createElement("div");
    newDiv14.textContent = JSON.stringify("Katas 4-14: " + bestThing.slice(23, -43));

    let currentDiv14 = document.getElementById("div14");
    document.body.insertBefore(newDiv14, currentDiv14);

    // //Number 15
    let newDiv15 = document.createElement("div");
    newDiv15.textContent = JSON.stringify("Katas 4-15: " + bestThing.substr(-12));

    let currentDiv15 = document.getElementById("div15");
    document.body.insertBefore(newDiv15, currentDiv15);

    // //Number 16
    let newDiv16 = document.createElement("div");
    newDiv16.textContent = JSON.stringify("Katas 4-16: " + bestThing.substr(23, 15));

    let currentDiv16 = document.getElementById("div16");
    document.body.insertBefore(newDiv16, currentDiv16);

    // //Number 17
    let newDiv17 = document.createElement("div");
    newDiv17.textContent = JSON.stringify("Katas 4-17: The index number of where 'Only' starts at " + bestThing.indexOf("only"));

    let currentDiv17 = document.getElementById("div17");
    document.body.insertBefore(newDiv17, currentDiv17);

    // //Number 18
    let newDiv18 = document.createElement("div");
    newDiv18.textContent = JSON.stringify("Katas 4-18: The index number of the last word is " + bestThing.lastIndexOf("bit"));

    let currentDiv18 = document.getElementById("div18");
    document.body.insertBefore(newDiv18, currentDiv18);

    // //Number 19
    let newDiv19 = document.createElement("div");
    let newArray19 = gotCitiesCSV.split(",");

    let fa19 = [];
    for (let i = 0; i < newArray19.length; i += 1) {
        if (newArray19[i].includes('aa') || newArray19[i].includes('ee') || newArray19[i].includes('ii') || newArray19[i].includes('oo') || newArray19[i].includes('uu')){
        fa19.push(newArray19[i]);
    }
         }
         newInfo19 = document.createTextNode(JSON.stringify("Katas 4-19: " + fa19));
     let currentDiv19 = document.getElementById("div19");
     document.body.insertBefore(newInfo19, currentDiv19);


    // //Number 20
    let newDiv20 = document.createElement("div")
    let fa20 = [];

    for (let i = 0; i < lotrCitiesArray.length; i += 1) {
        if (lotrCitiesArray[i].endsWith("or")) {
            fa20.push(lotrCitiesArray[i])
        }
    }
    newInfo20 = document.createTextNode(JSON.stringify("Katas 4-20: " + fa20));
    let currentDiv20 = document.getElementById("div20");
    document.body.insertBefore(newInfo20, currentDiv20);

    // //Number 21
    // let newDiv21 = document.createElement("div");
    // newDiv21.textContent = JSON.stringify("Katas 4-21: " + bestThing.slice(0, 14));

    // let currentDiv21 = document.getElementById("div21");
    // document.body.insertBefore(newDiv21, currentDiv21);

    // //Number 12
    // let newDiv12 = document.createElement("div");
    // newDiv12.textContent = JSON.stringify("Katas 4-12: " + bestThing.slice(0, 14));

    // let currentDiv12 = document.getElementById("div12");
    // document.body.insertBefore(newDiv12, currentDiv12);

    // //Number 12
    // let newDiv12 = document.createElement("div");
    // newDiv12.textContent = JSON.stringify("Katas 4-12: " + bestThing.slice(0, 14));

    // let currentDiv12 = document.getElementById("div12");
    // document.body.insertBefore(newDiv12, currentDiv12);
