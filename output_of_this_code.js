var x = 10;
var y = 12
var z = 90
 
if (x > y){
  if (x < z){
      x = y
  }
  else{
      var m = z
  }
}
else {
  if(y > z){
      m = y
  }
  else {
      m = x
  }
   
}
console.log(m)


// output will be 10