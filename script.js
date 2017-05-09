Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

function numbers (start, end){
  var arr = [];
  for(i = start; i < end + 1; i++){
    arr.push(i)
  } return arr
}

function sin (x) {
  return Math.sin(x)
}

function cos (x) {
  return Math.cos(x)
}

function tan (x) {
  return Math.tan(x)
}

function asin (x) {
  return Math.asin(x)
}

function acos (x) {
  return Math.cos(x)
}

function atan (x) {
  return Math.atan(x)
}

function ellipse (size, numbers, a, centeredx, centeredy, sized) {
  var e = 1/a;
  var arrx = [];
  var arry = [];
  for (i = 0; i < numbers + 1; i++){
    arrx.push(size * (sin(((Math.radians(360)/numbers) * i)) * sized ) + centeredx);
    arry.push(size * (e * cos(((Math.radians(360)/numbers) * i)) * sized ) + centeredy);
  }
  return ('x: ' + arrx + '\n' + 'y: ' + arry)
}

function ellipseSheet (size, numbers, a, centeredx, centeredy, sized) {
  var e = 1/a;
  var arrx = '';
  var arry = '';
  for (i = 0; i < numbers + 1; i++){
    arrx += (size * (sin(((Math.radians(360)/numbers) * i)) * sized ) + centeredx) + '\n';
    arry += (size * (e * cos(((Math.radians(360)/numbers) * i)) * sized ) + centeredy) + '\n';
  }
  return (arrx + '\n' + arry)
}


var d = 1000;
var degrees = 360;
var radians = Math.radians(360);


console.log(ellipseSheet (1, 100, 2, 0, 0, 1))










