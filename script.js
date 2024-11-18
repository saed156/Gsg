// Task 2: Calculate total and average using reduce
function calculateSumAndAverage(numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / numbers.length;
    return { total, average };
}

// Example usage
const numbers = [10, 20, 30, 40];
const result = calculateSumAndAverage(numbers);
console.log(`Total: ${result.total}, Average: ${result.average}`);

// Task 3: Remove duplicates from array
function removeDuplicates(array) {
    const uniqueValues = Array.from(new Set(array));
    return uniqueValues;
}

// Example usage
const strings = ["apple", "banana", "apple", "orange", "banana"];
const uniqueStrings = removeDuplicates(strings);
console.log(uniqueStrings);
