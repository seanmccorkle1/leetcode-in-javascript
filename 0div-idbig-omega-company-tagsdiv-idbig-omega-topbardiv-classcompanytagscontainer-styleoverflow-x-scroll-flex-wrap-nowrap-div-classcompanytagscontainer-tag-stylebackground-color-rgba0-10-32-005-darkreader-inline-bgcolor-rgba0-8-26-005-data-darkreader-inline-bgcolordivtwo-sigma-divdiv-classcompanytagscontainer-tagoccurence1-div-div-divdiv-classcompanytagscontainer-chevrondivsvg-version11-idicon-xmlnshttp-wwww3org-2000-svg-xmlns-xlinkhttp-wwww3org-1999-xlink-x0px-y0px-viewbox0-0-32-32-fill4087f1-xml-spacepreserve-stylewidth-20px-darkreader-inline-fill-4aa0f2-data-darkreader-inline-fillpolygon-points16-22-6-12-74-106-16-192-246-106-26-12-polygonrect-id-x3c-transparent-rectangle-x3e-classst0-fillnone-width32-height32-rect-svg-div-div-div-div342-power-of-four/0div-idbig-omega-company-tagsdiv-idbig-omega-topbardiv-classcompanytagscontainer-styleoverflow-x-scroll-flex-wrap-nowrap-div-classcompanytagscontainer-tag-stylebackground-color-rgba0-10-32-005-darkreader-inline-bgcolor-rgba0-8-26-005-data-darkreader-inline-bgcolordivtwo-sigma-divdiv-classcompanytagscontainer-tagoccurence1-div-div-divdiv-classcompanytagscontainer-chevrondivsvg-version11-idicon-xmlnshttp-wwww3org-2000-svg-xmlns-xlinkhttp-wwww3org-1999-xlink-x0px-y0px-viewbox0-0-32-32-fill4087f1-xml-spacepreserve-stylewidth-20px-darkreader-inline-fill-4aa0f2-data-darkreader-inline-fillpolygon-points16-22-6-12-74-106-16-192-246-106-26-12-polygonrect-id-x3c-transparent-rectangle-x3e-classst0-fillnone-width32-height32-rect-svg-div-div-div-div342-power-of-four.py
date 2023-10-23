# import math

class Solution:
    def isPowerOfFour(self, num: int) -> bool:
        return num>=1 and log(num, 4).is_integer()

#         twoLogExponent = log(num, 4)
#         exponentIsEven = (twoLogExponent % 2) == 0
#         if exponentIsEven:
#             return True
#         else:
#             return False

# # print(isPowerOfFour(16), True, "power of 4")