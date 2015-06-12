// Canvas API Cheatsheet:
// http://www.nihilogic.dk/labs/canvas_sheet/HTML5_Canvas_Cheat_Sheet.pdf

var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

var m=3

// outer gradient
var gradient = ctx.createLinearGradient(7*m, 7*m, 193*m, 7*m);
gradient.addColorStop(0, "#120700") ;
gradient.addColorStop(1, "#211203") ;
ctx.fillStyle = gradient;
ctx.fillRect(7*m, 7*m, 186*m, 186*m);

//img
var qr = new Image();
qr.src = 'images/qr.png';
qr.onload = function () {
      ctx.drawImage(qr, 480, 480, 50, 50);
};

//background
ctx.fillStyle="#fff";
ctx.fillRect(15*m,15*m,170*m,170*m);

var circ=Math.PI * 2;

//shadow
ctx.fillStyle = '#8AABA5';
ctx.beginPath();
ctx.arc(96*m, 98*m, 57*m, 0*m, circ);
ctx.closePath();
ctx.fill();

//eyelashes
ctx.beginPath()
ctx.lineWidth = 5*m;
ctx.lineCap='round';
ctx.moveTo(45*m, 129*m);
ctx.lineTo(54*m, 120*m);
ctx.moveTo(52*m, 136*m);
ctx.lineTo(61*m, 127*m);
ctx.moveTo(59*m, 143*m);
ctx.lineTo(68*m, 134*m);
ctx.strokeStyle = '#3B230B';
ctx.stroke();

//eye
//1
ctx.strokeStyle = '#945757';
ctx.beginPath();
ctx.arc(100*m, 90*m, 54*m, 0*m, circ);
ctx.closePath();
ctx.lineWidth='3*m';
ctx.stroke();
//2
ctx.fillStyle = '#FF9696';
ctx.beginPath();
ctx.arc(100*m, 90*m, 53*m, 0*m, circ);
ctx.closePath();
ctx.fill();
//3
ctx.fillStyle = '#FFE9D1';
ctx.beginPath();
ctx.arc(99*m, 88*m, 50*m, 0*m, circ);
ctx.closePath();
ctx.fill();
//4
ctx.fillStyle = '#FFEEE0';
ctx.beginPath();
ctx.arc(104*m, 84*m, 45*m, 0*m, circ);
ctx.closePath();
ctx.fill();
//5
ctx.fillStyle = '#9E6E3C';
ctx.beginPath();
ctx.arc(123*m, 78*m, 15*m, 0*m, circ);
ctx.closePath();
ctx.fill();
//6
ctx.fillStyle = '#BD8E5E';
ctx.beginPath();
ctx.arc(124*m, 77*m, 14*m, 0*m, circ);
ctx.closePath();
ctx.fill();
//7
ctx.fillStyle = '#000000';
ctx.beginPath();
ctx.arc(124*m, 77*m, 8*m, 0*m, circ);
ctx.closePath();
ctx.fill();
//8
ctx.fillStyle = '#1a1a1a';
ctx.beginPath();
ctx.arc(124*m, 76*m, 7*m, 0*m, circ);
ctx.closePath();
ctx.fill();
//10
ctx.fillStyle = '#222';
ctx.beginPath();
ctx.arc(126*m, 75*m, 12, 0*m, circ);
ctx.closePath();
ctx.fill();
//9
ctx.fillStyle = '#aaa';
ctx.beginPath();
ctx.arc(128*m, 75*m, 2, 0*m, circ);
ctx.closePath();
ctx.fill();
//10
ctx.fillStyle = '#aaa';
ctx.beginPath();
ctx.arc(126.5*m, 74*m, 1.5, 0*m, circ);
ctx.closePath();
ctx.fill();

var eht=30*m;//eyebrow height
var ewd=130*m;//eyebrow width

//eyebrow
ctx.rotate(circ/(36));//bonus 1 matrix transform rotation

//eyebrow test
ctx.beginPath()
ctx.arc(230, 128, 90,Math.PI * 1,Math.PI * -.5);
//ctx.lineTo(452,52	);
ctx.arc(450, 66, 90,Math.PI * 0,Math.PI * .5);
ctx.closePath();
ctx.fillStyle = '#332514';
ctx.fill();


ctx.beginPath()
ctx.arc(230, 126, 90,Math.PI * 1,Math.PI * -.5);
//ctx.lineTo(446,46	);
ctx.arc(450, 64, 90,Math.PI * 0,Math.PI * .5);
ctx.closePath();
ctx.fillStyle = '#0F0B06';
ctx.fill();

ctx.beginPath()
ctx.arc(230, 120, 90,Math.PI * 1,Math.PI * -.5);
//ctx.lineTo(440,50);
ctx.arc(450, 58, 90,Math.PI * 0,Math.PI * .5);
ctx.closePath();
ctx.fillStyle = gradient;
ctx.fill();



// text
ctx.rotate(circ/(-36));
ctx.font = " 12px garamond";
ctx.fillStyle = "#000";
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('ŒIL • EYE • OLHO • OJO • 目 • عَيْن', 100*m,173*m);


/*/ red square
ctx.fillStyle = 'rgb(255, 60, 60)' // you can use any valid CSS color here
ctx.fillRect(30, 30, 300, 300)

// white lines
ctx.beginPath()
ctx.lineWidth = 60
ctx.moveTo(180, 60)
ctx.lineTo(180, 300)
ctx.moveTo(60, 180)
ctx.lineTo(300, 180)
ctx.strokeStyle = '#ffffff'
ctx.stroke()

// Linear Gradient

// Arguments: x0, y0, x1, y1
// The linear gradient will paint along a line from point(x0, y0) to point(x1, y1)
// NOTE these points are relative to the entire canvas!

// suppose we want to draw a 300x300 circle with this gradient, top left at point(360, 30)

var gradient = ctx.createLinearGradient(360, 30, 360 + 300, 30 + 300)
gradient.addColorStop(0, "#ff3333") // starting color
gradient.addColorStop(1, "#ffffff") // ending color

// draw a circle and fill with the gradient
var radius = 150
ctx.beginPath()

// Arguments: x, y, radius，starting angle, ending angle (angles are in radiant: 2*Pi = 360 degrees)
ctx.arc(360 + radius, 30 + radius, radius, 0, Math.PI * 2)
ctx.closePath()
ctx.fillStyle = gradient // This is how you use a gradient as a fill
ctx.fill()

// text
ctx.font = "bold 36px Helvetica, Arial" // any valid CSS font property
ctx.fillStyle = "#ffffff"
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillText('Helvetica', 360 + radius, 30 + radius)

// image
var max = new Image()
max.src = 'max.jpg'
max.onload = function () {
      ctx.drawImage(max, 690, 30)
}
*/