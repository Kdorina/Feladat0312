/*
* File: app.js
* Author: Kovács Dorina
* Copyright: 2022, Kovács Dorina
* Group: Szoft I / N
* Date: 2022-02-28
* Github: https://github.com/Kdorina/
* Licenc: GNU GPL
*/

var oldalInt = document.getElementById("oldal");
var szamitGomb = document.getElementById("szamitGomb");
var szogInt = document.getElementById("szog");
var eredmenyInt = document.getElementById("eredmeny");

szamitGomb.addEventListener("click", function(){


var oldal = Number(oldalInt.value);
let szog = Number(szogInt.value);
    let eredmeny = (1/2)*oldal*Math.sin(szog);
    eredmenyInt.value = (eredmeny.toFixed(4));
    

   
});


