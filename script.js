const loadFunct = () => {
    const lines = 3;
    let verifySol = false;
    let winnerIs  

  let verifyType ={
    horizontal: false,
    vertical: false,
    diagonal: false
}


  // --------services-----------
  const flatToTable = (array, line) => {
    let table = [];

    for (let arrayIndex = 0; arrayIndex < line; arrayIndex++) {
      const tableLine = [];
      for (let lineIndex = 0; lineIndex < line; lineIndex++) {
        tableLine.push(array[lineIndex + arrayIndex * 3]);
      }
      table.push(tableLine);
    }
    return table;
  };

  const verifyArray = (...elements) => {
    let solution = elements[0].every((element) => element === elements[0][0])
    if(solution){winnerIs = elements[0][0]}
    return  solution;
  };

            //console.log(verifyArray(["a", "b", "a"]))

  const verifyer = (table, line) => {
            /*   let verifyType ={
                    horizontal: false,
                    vertical: false,
                    diagonal: false
                } */

// ---verify horizontal
    for (let i = 0; i < line; i++) {
      //console.log(table[i])             // this for I can see the table
      if(verifyArray(table[i])) {
        verifyType.horizontal = true
        verifySol = true
      }
    }

// -----verify vertical
    for (let index = 0; index < lines; index++) {
        const elementArray = table.map((line) => line[index])
        //console.log(elementArray)
        if(verifyArray(elementArray)){
            verifySol = true;
            verifyType.vertical = true
        }
    }

// ------verify diagonal

    let diag1 = []
    let diag2 = []
    for (let index = 0; index < lines; index++) {
       diag1.push(table[index][index])
       diag2.push(table[index][lines-index-1])
    }

    if(verifyArray(diag1)){
        verifySol = true
        verifyType.diagonal = true
    }

    if(verifyArray(diag2)){
        verifySol = true
        verifyType.diagonal = true
    }

                //console.log("diag1 is" , diag1)
                //console.log("diag2 is" , diag2)

                //console.log("verify is" , verifySol)
                //console.log(verifyType)
                //console.log("verify END----");


    return verifySol
  };

  // create tic-tac-Toe map
  let toeMap = [];
  for (i = 0; i < lines; i++) {
    const start = i * lines + 1;
    const end = (i + 1) * lines;
    const range = [...Array(end - start + 1).keys()].map((x) => x + start);
    //console.log(range)
    toeMap.push(range);
  }

  let mapFlat = toeMap.flat();

  // fill the map
  mapFlat.forEach((number, iterator) => {
    const leftPlaces = mapFlat.filter(
      (element) => element !== "O" && element !== "X"
    );
    const random = Math.floor(Math.random() * leftPlaces.length);

    let player = "O";

    if ((iterator + 1) % 2 === 0) {
      player = "X";
    }

    //console.log(verifySol)
    //console.log(mapFlat)
    if(!verifySol){
        mapFlat[leftPlaces[random] - 1] = player;
    }
  
    const readyTable = flatToTable(mapFlat, lines);

    verifyer(readyTable, lines);

    //console.log(readyTable)

});

console.table(flatToTable(mapFlat, lines));
if(verifySol){
    console.log("Winner is: " +  winnerIs)
}
console.log(verifyType)

  //console.log(mapFlat);
};

window.addEventListener("load", loadFunct());
