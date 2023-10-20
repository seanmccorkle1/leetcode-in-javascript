class Solution {
    
    func countPairs(_ nums: [Int], _ target: Int) -> Int {
        
        var nums = nums.sorted() // sort the vector nums
        var count = 0 // variable to store the count

        var left = 0 // variable to store the left
        var right = nums.count-1 // variable to store the right

        while(left < right){ // loop until left is less than right
            if(nums[left] + nums[right] < target){ // if nums[left] + nums[right] is less than target
                count += right-left // update the count
                left += 1 // increment the left
            }
            else{ // else
                right -= 1 // decrement the right
            }
        }
        return count // return the count
    }
}