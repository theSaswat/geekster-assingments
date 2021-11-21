function range(start, end) 
{
  if (start > end) {
 var arr = new Array(start - end + 1);
	for (var i = 0; i < arr.length; i++, start--) {
	resarrult[i] = start;
}
	return arr;
} 
  else{
var array2 = new Array(end-start+1);
         
for (var j = 0; j < array2.length; j++, start++) 
   {
array2[j] = start;
}
      return array2;
}
}

console.log(range(5,7));
console.log(range(-6, 8));
