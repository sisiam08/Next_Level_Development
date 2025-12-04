const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];


const responseCount = surveyResponses.reduce((countedTable, response)=>{
    // if(countedTable[response])
    // {
    //     countedTable[response]++;
    // }
    // else
    // {
    //     countedTable[response] = 1;
    // }

    countedTable[response] = (countedTable[response] || 0) + 1;

    return countedTable;
}, {});


console.log("Response Count: ", responseCount);