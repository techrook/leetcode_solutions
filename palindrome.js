var isPalindrome = function(x) {
    var xToString = x.toString()
    if(xToString.split("").reverse().join("") == xToString){
        return true
    }
    else {
        return false
    }
    
};

// first convert value or number to string 
// then split the new converted number then reverse and join it
// then you compare with the original stringfied number 