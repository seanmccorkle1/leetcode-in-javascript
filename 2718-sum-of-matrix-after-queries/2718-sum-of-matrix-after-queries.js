var matrixSumQueries = function(n, queries) {
  const seen = [new Set(), new Set()];
  return queries.reduceRight((sum, [type, index, val]) => 
    !seen[type].has(index)
      ? (seen[type].add(index), sum + (n-seen[1-type].size) * val)
      : sum
  , 0);
}
