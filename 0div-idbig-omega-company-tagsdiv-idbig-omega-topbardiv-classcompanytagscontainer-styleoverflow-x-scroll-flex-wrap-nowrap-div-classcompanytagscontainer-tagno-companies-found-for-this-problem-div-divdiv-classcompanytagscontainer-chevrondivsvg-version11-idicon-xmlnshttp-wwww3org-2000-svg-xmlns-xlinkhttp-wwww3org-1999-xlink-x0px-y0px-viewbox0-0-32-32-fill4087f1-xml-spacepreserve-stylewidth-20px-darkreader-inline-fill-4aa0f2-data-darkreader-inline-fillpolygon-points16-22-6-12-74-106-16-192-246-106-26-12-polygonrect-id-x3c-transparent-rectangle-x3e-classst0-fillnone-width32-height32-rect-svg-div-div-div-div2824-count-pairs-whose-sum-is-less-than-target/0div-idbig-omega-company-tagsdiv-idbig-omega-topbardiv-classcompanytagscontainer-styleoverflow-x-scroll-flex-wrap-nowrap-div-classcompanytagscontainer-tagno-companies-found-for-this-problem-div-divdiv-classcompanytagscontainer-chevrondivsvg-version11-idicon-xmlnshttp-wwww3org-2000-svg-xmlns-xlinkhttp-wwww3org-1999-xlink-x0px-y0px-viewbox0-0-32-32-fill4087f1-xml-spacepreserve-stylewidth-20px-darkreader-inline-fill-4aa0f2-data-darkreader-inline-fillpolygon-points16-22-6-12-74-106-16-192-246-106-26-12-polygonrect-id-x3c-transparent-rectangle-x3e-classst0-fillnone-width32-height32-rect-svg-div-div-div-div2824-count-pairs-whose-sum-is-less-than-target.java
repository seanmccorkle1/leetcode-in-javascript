// import java.util.List;
// import java.util.Collections;
// import java.util.Arrays;

class Solution {

    public int countPairs(List<Integer> integerList, int target) {

        // integerList = integerList.toArray(new Integer[0]);
        
        Collections.sort(integerList);
        // Arrays.sort(integerList);
        
        int numOfPairs = 0;
        int leftIndex = 0;
        // int backIndex = integerList.length - 1;
        int backIndex = integerList.size() - 1;

        while (leftIndex < backIndex) {
            
            if (integerList.get(leftIndex) + integerList.get(backIndex) < target) {
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
}