function chunk(arr, divisionIndex) {
  let arrResult = [
    arr.slice(0, divisionIndex),
    arr.slice(divisionIndex, arr.length)
  ];
  console.log(arrResult);
  return arrResult;
}
