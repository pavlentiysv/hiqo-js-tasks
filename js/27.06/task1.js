function chunk(arr, divisionIndex) {
  return [arr.slice(0, divisionIndex), arr.slice(divisionIndex, arr.length)];
}
