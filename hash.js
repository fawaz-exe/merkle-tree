/**
 * Test -> xeihgois
 * Test -> 1234134
 */


// This is how we do basic hashing.
function hash(string){
    let hashing = '';
    for(let i = 0; i< string.length ; i++){
        hashing += string.charCodeAt(i);
    }
    return hashing;
}

console.log(hash('Fawaz'));

