var canConstruct = function(ransomNote, magazine) {
    var map = { };
  var replicable = true;
  for ( var i of magazine ) {
      map[i] = (map[i] || 0) + 1;
  }
  for ( var i of ransomNote ) {
      map[i] = (map[i] || 0) - 1;
  }
  for ( var i in map ) {
      if ( map[i] < 0 ) {
          replicable = false;
          break;
      }
  }
  return replicable
  
  
};