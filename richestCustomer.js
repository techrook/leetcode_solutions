var maximumWealth = function(accounts) {
    let richestCustomer = 0

    for(i=0; i< accounts.length; i++){
        let customerWealth = 0
        for(j=0; j< accounts[i].length; j++){
            customerWealth += accounts[i][j]
        }
        richestCustomer = Math.max(richestCustomer, customerWealth)
        
    }
    return richestCustomer
    
};

console.log(maximumWealth( [[1,5],[7,3],[3,5]]))

// first we have to loop through the accounts 
// then we loop through each coustomers account 
// then we add the value of the account 
// then we find the max account 