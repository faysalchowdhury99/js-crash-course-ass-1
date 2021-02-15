/* Midterm Assignment */

// Probem-1
let convertInchToMile = (inch) => {
  console.log(`${inch} inch is equals to ${inch * 63360} Mile`);
};
convertInchToMile(3);

// Problem - 2
let myFriends = ["sayed", "pritom", "anik", "sifat", "mehedi"];
let sabinasFriends = ["nabila", "pritom", "sayed", "afrin", "esha"];

let mutualFriend = myFriends.filter((value) => sabinasFriends.includes(value));

if (mutualFriend.length === 0) {
  console.log(`No Mutual Friends`);
} else {
  console.log(mutualFriend);
}

// Problem-3
let wood = (chairErPoriman, tableErPoriman, kahterPoriman) => {
  let chairErJonnoKathLagbe = chairErPoriman * 1;
  let tableErJonnoKathLagbe = tableErPoriman * 3;
  let khaterJonnoKathLagbe = kahterPoriman * 5;

  console.log(
    `${chairErPoriman} ti Chair er jonno kath lagbe ${chairErJonnoKathLagbe} Q.Ft`
  );
  console.log(
    `${tableErPoriman} ti Table er jonno kath lagbe ${tableErJonnoKathLagbe} Q.Ft`
  );
  console.log(
    `${kahterPoriman} ti Khat er jonno kath lagbe ${khaterJonnoKathLagbe} Q.Ft`
  );
  console.log(
    `Tahole mot kath lagbe ${
      chairErJonnoKathLagbe + tableErJonnoKathLagbe + khaterJonnoKathLagbe
    } Q.Ft`
  );
};
wood(6, 3, 2);

// Problem-4
let brick = (totalFloor) => {
  let first10FloorErHeight = 10 * 15;
  let second10FloorErHeight = 10 * 12;
  let bakiShobFloorErHeight = (totalFloor - 20) * 10;

  let totalBuildingHeight =
    first10FloorErHeight + second10FloorErHeight + bakiShobFloorErHeight;

  let totalBrickNeeded = totalBuildingHeight * 1000;

  console.log(totalBrickNeeded);
};
brick(22);

// Problem-5
let gradeCalc = (marks) => {
  if (marks > 0 && marks < 60) {
    console.log(`Fail!`);
  } else if (marks >= 60 && marks <= 64) {
    console.log(`D Grade`);
  } else if (marks >= 65 && marks <= 69) {
    console.log(`D+ Grade`);
  } else if (marks >= 70 && marks <= 74) {
    console.log(`C Grade`);
  } else if (marks >= 75 && marks <= 79) {
    console.log(`C+ Frade`);
  } else if (marks >= 80 && marks <= 85) {
    console.log(`B Grade`);
  } else if (marks >= 86 && marks <= 89) {
    console.log(`A- Grade`);
  } else if (marks >= 90 && marks <= 96) {
    console.log(`A Grade`);
  } else if (marks >= 97 && marks <= 100) {
    console.log(`"Congratulation! You've selected for the scholarship!"`);
  } else {
    console.log(`Invalid marks, batpari cholbe na`);
  }
};
gradeCalc(90);
