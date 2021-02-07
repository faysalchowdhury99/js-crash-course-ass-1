// Problem-1
let vaaterDam;
if (vaaterDam <= 50) {
  console.log("Vaat Khabo");
} else {
  console.log("Porota Khabo");
}

// Problem-2
let pocketMoney;
if (pocketMoney >= 5000) {
  console.log("Sajek I am Coming");
} else if (pocketMoney >= 3000) {
  console.log("Cox I am coming");
} else {
  console.log("Chiriakhanay Jamu");
}

// Problem-3
let cofferDam;
let isCoffeeAvailable;

if (!isCoffeeAvailable) {
  console.log("Khabo r kmne Coffee nai ee");
} else if (cofferDam <= 50 && isCoffeeAvailable) {
  console.log("Coffee Khabo");
} else {
  console.log("Coffeer Theke Cha ee valo, ekta cha den");
}

// Problem-4
let takarPoriman;
let isCloseFriend;
let ageDharDiyePaisi;
if (takarPoriman > 2000) {
  console.log("Bondhu amar obostha dekhos na? Kmne Choli? Tore Kmne Dimu ko");
} else if (isCloseFriend || ageDharDiyePaisi) {
  console.log(" Are ne beta tor laigai to taka");
} else {
  console.log("Taka Poisa Chais na re bondhu, Basa theke dey na");
}

// Problem-5
let marks;

if (marks > 0 && marks < 60) {
  console.log(
    "Tomare dia ki hoibo mia fail koro khali, amgo somoy 100 te 101 paitam"
  );
} else if (marks >= 60 && marks <= 69) {
  console.log("D paiso mia, eida kono result na");
} else if (marks >= 70 && marks <= 79) {
  console.log("Tumio otota valo koronai C grade paiso ar ki");
} else if (marks >= 80 && marks <= 85) {
  console.log("B grade paiso jao");
} else if (marks >= 86 && marks <= 89) {
  console.log("jao jao A-");
} else if (marks >= 90 && marks <= 96) {
  console.log("jao jao A");
} else if (marks >= 97 && marks <= 100) {
  console.log("Amar meyere biye korba baba? A+");
} else {
  console.log("Invalid marks, batpari cholbe na");
}
