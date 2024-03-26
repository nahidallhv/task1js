// EV TASKI Js


// 1.İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın.
// let name = prompt("Adinizi daxil edin: ");
// console.log(name.length);

// 2.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?.
// let soz = prompt("Sozu daxil edin: ");
// let simvol = prompt("Simvolu daxil edin: ");
// let simvolvar = soz.includes(simvol);
// console.log(simvolvar);

// 3.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?.
// let soz = prompt("Sozu daxil edin: ");
// let simvol = prompt("Simvolu daxil edin: ");
// function startsWithCharacter(soz, simvol) {
// if (!soz || !simvol) return false;
// return soz.charAt(0) === simvol;
// }
// console.log(`${soz} sozu ${simvol} simvolu ile başlıyir ${startsWithCharacter(soz, simvol) ? 'He' : 'Yox'}`);

// 4.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?.
// let soz = prompt("Sozu daxil edin: ");
// let simvol = prompt("Simvolu daxil edin: ");
// if (soz.endsWith(simvol)) {
// console.log("soz gosderilen simvol ile bitir.");
// } else {
// console.log("soz gosderilen simvol ile bitmir.");
// }

// 5.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın.
// let soz = prompt("Sozu daxil edin: ");
// let simvol = prompt("Simvolu daxil edin: ");
// var index = soz.indexOf(simvol);
// if (index !== -1) {
// console.log("Girilen simvolun index'i: " + index);
// } else {
// console.log("Girilen simvol soz içinde tapilmadı.");
// }

// 6.İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın.
// let soz = prompt("Sozu daxil edin: ");
// if (soz === soz.toUpperCase()) {
// console.log("Girilen soz boyukk herflerden ibaretdir.");
// } else {
// console.log("Girilen soz boyuk herflerden ibaret deyil.");
// }