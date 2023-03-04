var arraySign =array=>array.reduce((sum,curr)=>sum*curr, 1) >= 1 ? 1 : array.reduce((sum,curr)=>sum*curr, 1) <= -1 ? -1 : 0

