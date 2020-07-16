var numbers = [1,2,32,56,55,34,32,11,19,17,58,66,13];
var result = [];

function table() {
    for(let i = 0; i <=numbers.length; i++) {
    if (numbers[i] < 50 && numbers[i]%2 == 0) { // mniejsze od 50 i parzyste 
        result.push(numbers[i]*2);
        }
    }
    console.log(result)
    return result;
}

table();
