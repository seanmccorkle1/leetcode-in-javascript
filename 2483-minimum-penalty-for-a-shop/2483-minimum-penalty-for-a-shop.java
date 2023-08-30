class Solution {
    public int bestClosingTime(String array) {
        
        int currentBalance = 0;
        int maxBalance = 0;
        int closingHour = 0;
            
        for (int index = 0; index < array.length(); index++) {
        
            if (array.charAt(index) == 'Y') {
                currentBalance++;
            } 
            
            else if (array.charAt(index) == 'N') {
                currentBalance--;
            }
            
            if (currentBalance > maxBalance) {
                maxBalance = currentBalance;
                closingHour = index + 1;
            }
        }
        return closingHour;
    }
}