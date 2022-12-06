


class Solution:
    def nextGreatestLetter(self, stringArray, targetLetter):
        print("array: ", stringArray)
        
        for letter in stringArray:
            if (letter > targetLetter):
                return letter
        return stringArray[0]

instance=Solution()
print(instance.nextGreatestLetter(["c","f","j"], "c"))
print(instance.nextGreatestLetter(["x","x","y","y"],"z"))