// #include <iostream>
// #include <vector>
// #include <algorithm>

class Solution {
    
    public:
    int countPairs(std::vector<int> array, int target) {

        std::sort(array.begin(), array.end());
        
        int numOfPairs = 0;
        int leftIndex = 0;
        int backIndex = array.size() - 1;

        while (leftIndex < backIndex) {
            
            if (array[leftIndex] + array[backIndex] < target) {

                int currNumOfPairs = backIndex - leftIndex;
                
                numOfPairs += currNumOfPairs;
                leftIndex++;
        } 
            else {
                backIndex--;
            }
        }
        return numOfPairs;
    }
    int main() {
        std::vector<int> array = {-6, 2, 5, -2, -7, -1, 3};
        int target = -2;
        std::cout << countPairs(array, target) << std::endl;
        return 0;
    };
};