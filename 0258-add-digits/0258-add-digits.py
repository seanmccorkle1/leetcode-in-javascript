class Solution:
    def addDigits(self, num: int) -> int:
        
        if num==0:
            return 0
        
        isDivisibleBy9 = num % 9 == 0
        
        if (isDivisibleBy9):
            return 9
        
        else:
            return num % 9