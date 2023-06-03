/**We are given a list of all employees (manager contains all employees / managers) and a list of the time to reach those employees from their direct managers.

We loop through every employee and calculate the time it takes to reach the head of the company from that employee. (Pretty straight forward, just the time from employee -> manager -> ... n manager -> owner. No branches, straight path.)

Since managers can have many employees, but employees only have one manager - this approach is nice since we can change the 'manager' value to -1 after traversing to the owner node from there and storing the updated total calculated value in the informTime array. This approach keeps us from calculating time from said manager to owner multiple times.

If another employee under the same manager comes up again, when we run our helper function on the manager, we'll see that his value is -1 (same as owner) and simply return the previously calculated value.

After we calculate the time for all employees, we can then return the maximum value within the informTime array as it will be the LONGEST  it takes for news to reach the entire company.

O(numOfEmployees * depthOfTree)
*/



var numOfMinutes = function(n, headID, manager, informTime) {

    manager = manager.map(n => n == -1 ? "✔" : n)

    const timeFromEmployeeToHead = (id) => {

        manager
        informTime

        if (manager[id] != "✔") {
            informTime[id] += timeFromEmployeeToHead(manager[id])
            manager[id] = "✔"
        }

        return informTime[id]
    }

    for (let index=0; index < manager.length; index++){
        timeFromEmployeeToHead(index)
    }

    // manager.forEach((_, index) => timeFromEmployeeToHead(index))

    n
    headID

    manager
    informTime

    if (manager.some(e => e != "✔")){
        return false
    }

    return Math.max(...informTime)
}

// console.log(numOfMinutes(6, 2, [2,2,-1,2,2,2], [0,0,1,0,0,0]), 1)
console.log(numOfMinutes(6, 2, [2,2,-1,2,2,2], [0,0,1,0,0,6]), 7, "1 + 6")