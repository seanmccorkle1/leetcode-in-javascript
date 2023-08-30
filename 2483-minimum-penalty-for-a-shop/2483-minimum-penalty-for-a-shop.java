class Solution {
    public int bestClosingTime(String string) {
        
        int currentBalance = 0;
        int maxBalance = 0;
        int closingHour = 0;

        for (int index = 0; index < string.length(); index++) {
        
            if (string.charAt(index) == 'Y') {
                ++currentBalance;
            } 
            
            else if (string.charAt(index) == 'N') {
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