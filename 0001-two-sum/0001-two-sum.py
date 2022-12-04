class Solution:
    def twoSum(self, array: List[int], targetNum: int) -> List[int]:
        obj = {}
        for currentIndex, num in enumerate(array): 
            
            remainder = targetNum - num
            if remainder in obj: 
                pastIndex = obj[remainder]
                return [pastIndex, currentIndex]  # [indexOfRemainder, currentIndex]
            obj[num] = currentIndex