// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ];
  
  function superbowlWin(record) {
    const winningYearObj = record.find(game => game.result === "W");
  
    if (winningYearObj) {
      return winningYearObj.year;
    } else {
      return undefined;
    }
  }
  
  // Test the function
  const winningYear = superbowlWin(record);
  if (winningYear) {
    console.log(`The Denver Broncos won the Superbowl in ${winningYear}.`);
  } else {
    console.log("The Denver Broncos have not won the Superbowl.");
  }
  