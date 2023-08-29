var bestClosingTime = function(customers) {
    
    let max = 0
    let balance = 0
    let answer = 0
    
    for (var i = 0;i < customers.length;i++){
        
        if(customers[i] === "Y"){
            balance++
        }
        
        else if (customers[i] != "Y") {
            balance--
        }
        
        if(balance > max){
            max = balance;
            answer = i + 1
        }
    }
    return answer;
};
