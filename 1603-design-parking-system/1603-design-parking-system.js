var ParkingSystem = function(big, medium, small) {
    this.count = [big, medium, small]
}

ParkingSystem.prototype.addCar = function(carType) {
    
    let numOfSpaces=  this.count[carType - 1]
    
    if (numOfSpaces >= 1){
        this.count[carType - 1] -= 1
        return true
    }
    
    else if (numOfSpaces <= 0){
        return false
    }
    
}


// const obj = new ParkingSystem(big, medium, small)
// var param_1 = obj.addCar(carType)