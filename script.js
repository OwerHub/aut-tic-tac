const loadFunct = () => {
  const lines = 3;

  // services
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
    return elements[0].every((element) => element === elements[0][0]);
  };

  //console.log(verifyArray(["a", "b", "a"]))

  const verifyer = (table, line) => {
    let verifySol = false;
    // verify horizontal
    for (let i = 0; i < line; i++) {
   
      console.log(table[i])
      if(verifyArray(table[i])) {
        verifySol = true
      }
      //console.log(verifyArray(table[i]))
    }
    console.log("verify is" , verifySol)
    console.log("verify END----");
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
    mapFlat[leftPlaces[random] - 1] = player;

    const readyTable = flatToTable(mapFlat, lines);

    verifyer(readyTable, lines);

    //console.log(readyTable)

    //console.log(flatToTable(mapFlat, lines));
  });

  //console.log(mapFlat)

  //console.log(mapFlat);
};

window.addEventListener("load", loadFunct());
