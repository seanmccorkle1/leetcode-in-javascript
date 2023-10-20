class Solution {
// <?php

function countPairs($array, $target) {
    sort($array);

    $numOfPairs = 0;
    $leftIndex = 0;
    $backIndex = count($array) - 1;
    
    while ($leftIndex < $backIndex) {
        if ($array[$leftIndex] + $array[$backIndex] < $target) {
            $currNumOfPairs = $backIndex - $leftIndex;
            $numOfPairs += $currNumOfPairs;
            $leftIndex++;
        } 
        else {
            $backIndex--;
        }
    }
    return $numOfPairs;
}
}

// $array = [-6, 2, 5, -2, -7, -1, 3];
// $target = -2;
// echo countPairs($array, $target);

// countPairs([-6, 2, 5, -2, -7, -1, 3], -2) //10