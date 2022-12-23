/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // initializaiton
    let [coolDown, sell, hold] = [0, 0, Number.NEGATIVE_INFINITY];
    
    for( let stockPrice_Day_i of prices){
        
        let [prevCoolDown, prevSell, prevHold] = [coolDown, sell, hold];
        
        // Max profit of cooldown on Day i comes from either cool down of Day_i-1, or sell out of Day_i-1 and today Day_i is cooling day
        coolDown = Math.max(prevCoolDown, prevSell);
        
        // Max profit of sell on Day_i comes from hold of Day_i-1 and sell on Day_i
        sell = prevHold + stockPrice_Day_i;
        
        //  Max profit of hold on Day_i comes from either hold of Day_i-1, or cool down on Day_i-1 and buy on Day_i
        hold = Math.max( prevHold, prevCoolDown - stockPrice_Day_i );
        
        
    }
    
    // The action of final trading day must be either sell or cool down
    return Math.max(sell, coolDown);
    
};