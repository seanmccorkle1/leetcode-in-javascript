var makeConnected = (n, connections) => {

    //Initialize our UnionFind Array.  Basic intuition is that indexes 
    //stand for nodes, -1 means they aren't connected to anything.

    //As our Union function runs, it will create these connections.
    //Find will tell us what group nodes belong to.
  
    const parent =new Array(n).fill(-1)
    
  //Spare tracks how many unnecessary connections we have -
  //If we try to connect two computers already in the same group, 
  //we increment spare.  Not connected tracks how many 
  //Are not in groups. -1 is because one cable connectes two computers.
  //You need five cables to connect six computers, not six, etc.
  let spare = 0, notConnected = n - 1
  
  //Iterate through node / connections.  If both nodes aren't in the same group -
  //I.e. Are not already connected, we connect them and decrement the not
  //connected counter.  If we get a connection for two computers that are already
  //connected, we increment the spare counter.
  for (let [node, connection] of connections) {
    if (find(node) !== find(connection)) {
      union(node, connection);
      notConnected--;
    } else spare++;
  }
  
  //If our count of unconnected computers is less than our spares,
  //We simply return the not connected number.  Else, we can't
  //connect them all and return -1.
  return notConnected <= spare ? notConnected : -1;
  
  //Standard find function.  If node at idx === -1 it belongs
  //in it's own group / to itself.  If not, we dfs to find the parent node.
  //Parent node is the 'chosen' one to represent the group.  If we union
  //1 and 2 for example, we pick either 1 or 2 to be the 'group representative'.
  function find(node) {
    if (parent[node] === -1) return node
    parent[node] = find(parent[node])
    return parent[node]
  }
  
  //Standard union.  We check to make sure nodes aren't already in the same
  //group first.  If not, we set parent[parent2] = parent1.  Works the same way
  //around if we pick parent[parent1] = parent2.  Just need to arbitrarily pick
  //one to be the 'group representative'.  That said, there is an optimization for
  //this algorithm called Union By Rank that will always union smaller groups to 
  //larger ones to reduce dfs look up times.  That's not implemented here.
  function union(node1, node2) {
    const parent1 = find(node1), parent2 = find(node2);
    if (parent1 !== parent2) parent[parent2] = parent1;
  }
};