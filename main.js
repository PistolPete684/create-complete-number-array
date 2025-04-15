function pipeFix(numbers){
  // The min and max value of the original array passed as an argument
  let minValue = Math.min(...numbers);
  let maxValue = Math.max(...numbers);
  // An empty array to hold the newly built array
  const results = [];
  // A for loop to build the new array itterating from min to max
  for (let i = minValue; i <= maxValue; i++) {
    results.push(i);
  }
  return results;
}