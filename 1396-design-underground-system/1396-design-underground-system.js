class UndergroundSystem {
    
  customer = new Map()
  avg = new Map()

  checkIn(id, stationName, t) {
      this.customer.set(id, { stationName, t })
  }
checkOut(id, stationName, t) {
    const checkIn = this.customer.get(id);

    if (!checkIn) {
        throw new Error(`Customer ${id} didn't checked in`)
    }
    
    const key = `${checkIn.stationName}-${stationName}`
    let fallback = {sum: 0, count: 0}
    let { sum, count } = this.avg.get(key) ?? fallback
    
    this.avg.set(key, { sum: sum + (t - checkIn.t), count: count + 1 });
  }
  
  getAverageTime(startStation, endStation) {
    const { sum, count } = this.avg.get(`${startStation}-${endStation}`) ?? { sum: 0, count: 0 };
    return sum / count;
  }
}

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */