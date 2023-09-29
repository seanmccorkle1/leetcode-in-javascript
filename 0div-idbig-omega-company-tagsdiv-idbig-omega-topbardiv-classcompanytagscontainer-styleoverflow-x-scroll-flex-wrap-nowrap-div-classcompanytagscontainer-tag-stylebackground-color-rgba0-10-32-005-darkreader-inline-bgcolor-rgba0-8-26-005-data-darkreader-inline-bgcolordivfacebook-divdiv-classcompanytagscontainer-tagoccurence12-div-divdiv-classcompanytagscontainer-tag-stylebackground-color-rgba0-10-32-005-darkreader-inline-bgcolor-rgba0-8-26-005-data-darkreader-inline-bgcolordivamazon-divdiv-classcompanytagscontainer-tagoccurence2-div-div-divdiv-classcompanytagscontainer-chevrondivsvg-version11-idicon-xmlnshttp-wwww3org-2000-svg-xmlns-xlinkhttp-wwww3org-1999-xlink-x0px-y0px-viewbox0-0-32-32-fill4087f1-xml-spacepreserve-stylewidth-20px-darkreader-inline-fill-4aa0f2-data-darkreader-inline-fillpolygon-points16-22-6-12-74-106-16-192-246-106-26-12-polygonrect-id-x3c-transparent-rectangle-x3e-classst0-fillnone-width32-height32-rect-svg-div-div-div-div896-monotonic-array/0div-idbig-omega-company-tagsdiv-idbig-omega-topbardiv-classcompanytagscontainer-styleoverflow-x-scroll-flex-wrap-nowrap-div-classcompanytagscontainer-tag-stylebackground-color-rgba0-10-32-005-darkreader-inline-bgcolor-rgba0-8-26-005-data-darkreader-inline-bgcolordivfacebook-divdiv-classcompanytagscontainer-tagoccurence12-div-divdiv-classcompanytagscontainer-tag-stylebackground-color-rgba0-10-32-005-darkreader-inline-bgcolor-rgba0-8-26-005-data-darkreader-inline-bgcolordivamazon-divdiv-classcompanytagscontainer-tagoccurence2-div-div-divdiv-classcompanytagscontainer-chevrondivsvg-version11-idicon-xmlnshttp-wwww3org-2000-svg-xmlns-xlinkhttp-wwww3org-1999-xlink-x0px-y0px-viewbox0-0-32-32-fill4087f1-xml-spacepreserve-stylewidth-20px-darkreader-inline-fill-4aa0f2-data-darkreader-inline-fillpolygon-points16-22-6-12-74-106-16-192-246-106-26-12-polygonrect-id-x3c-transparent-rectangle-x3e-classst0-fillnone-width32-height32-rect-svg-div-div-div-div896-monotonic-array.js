const isMonotonic=a=>a.every((x,i)=>(i===0)||(x<=a[i-1])) ||  a.every((x,i)=>(i===0)||(x>=a[i-1]))

