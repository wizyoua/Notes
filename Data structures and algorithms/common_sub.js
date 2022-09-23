//https://www.geeksforgeeks.org/maximum-length-substring-with-highest-frequency-in-a-string/
//find the most common substring in a string 

s = "ababecdecd";

function maxFreq(str){
    let n = str.length;
    let map = new Map();

    for(let i = 0; i < n; i++){
        let s = "";

        for(let j = i; j < n; j++){
            s += str[j];
            if(map.has(s)){
                map.set(s, map.get(s) + 1);
            }else {
                map.set(s, 1);
            }
        }
    }
    //console.log(map);

    // To store maximum frequency
    let maxi = 0;
    
    // To store String which
    // has maximum frequency
    let s = "";
    for (let [key, value] of map.entries()){
        console.log(key, value);
        if (value > maxi){
            maxi = value;
            s = key;
        }
        else if (value == maxi){
        let ss = key;
        if (ss.length > s.length)
            s = ss;
        }
    }
    
    // Return subString which
    // has maximum frequency
    return s;
}

console.log(maxFreq(s));