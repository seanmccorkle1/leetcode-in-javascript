package main

import (
	"fmt"
	"sort"
)

func countPairs(array []int, target int) int {
	
    sort.Ints(array)
    
	numOfPairs := 0
	leftIndex := 0
	backIndex := len(array) - 1

	for leftIndex < backIndex {
        if (array[leftIndex]+array[backIndex] < target) {
			currNumOfPairs := backIndex - leftIndex
			numOfPairs += currNumOfPairs
			leftIndex++
		} else {
			backIndex--
		}
	}

	return numOfPairs
}

// func main() {
// 	array := []int{-6, 2
