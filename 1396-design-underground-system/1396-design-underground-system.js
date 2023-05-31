class UndergroundSystem {
    
  customer = new Map()
  avg = new Map()

  checkIn(id, stationName, t) {
      this.customer.set(id, { stationName, t })
  }

checkOut(id, stationName, t) {
    
    const checkIn = this.customer.get(id);    
    
    const key = `${checkIn.stationName}-${stationName}`
    const {sum, count} = this.avg.get(key) ?? {sum: 0, count: 0}
    
    this.avg.set(key, { sum: sum + (t - checkIn.t), count: count + 1 });
  }
  
  getAverageTime(startStation, endStation) {
    const { sum, count } = this.avg.get(`${startStation}-${endStation}`) ?? { sum: 0, count: 0 };
    return sum / count;
  }
}

const obj = new UndergroundSystem()

obj.checkIn(123,"asd",60)
// obj.checkOut(id,stationName,t)

// let param_3 = obj.getAverageTime(startStation,endStation)