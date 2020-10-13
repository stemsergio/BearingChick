//            Bearing Chick           //

//SONIDOS
var osti = document.getElementById("osti");
var taps = document.getElementById("taps");
var audio = document.getElementById("audio");

//CANVAS
var pF = document.getElementById("plagiForest");
var papel = pF.getContext("2d");

//ESTADOS DEL JUEGO
var win = 0;
// var wined = 0;
var startTheTime=0; 

//*--------------- descativando para probar mas rapido
//PANTALLA DE INICIO
var introImg = document.getElementById('introImg');
var buttitos = document.getElementsByClassName("butto");
for (iw=0;iw<5;iw++){
    eval("buttitos[" + iw + "].style.width = '0px';");
    eval("buttitos[" + iw + "].style.height = '0px';");
}
if (screen.width>=1125){
  introImg.style.width = '400px';
  introImg.style.top = "115px";
  introImg2.style.width = '400px';
  introImg2.style.top = "115px";
  pF.style.width= '400px';
}
introImg.addEventListener("click", function () {
  introImg.style.width= '0px';
});
introImg2.addEventListener("click", function () {
  introImg2.style.width= '0px';
  if (screen.width>=1125){
    for (iw=0;iw<5;iw++){
      eval("buttitos[" + iw + "].style.width = '100px';");
      eval("buttitos[" + iw + "].style.height = '100px';");
    }
  }
  else {
    for (iw=0;iw<5;iw++){
      eval("buttitos[" + iw + "].style.width = '150px';");
      eval("buttitos[" + iw + "].style.height = '150px';");
    }
  }
  startTheTime=1;
  osti.play();
});

//fin desactivacion-------------------*/

//ESTABLECER LA CANTIDAD DE ENEMIGOS
var cantidad = aleatorio (3,5);

//DECLARAR LAS VARIABLES DE LA POSICIÓN DE LOS ZORROS
for (v2=0; v2<cantidad; v2++) {
  eval("var posFox" + v2 +"= [0,0];");
}
for (v2=0; v2<cantidad; v2++) {
  eval("var posFoxj" + v2 +"= [0,0];");
}

//??
var repetido=0;

//GENERAR ZORROS Y GUARDAR INICIALES
var v = 0;
while ( v < cantidad)
{
  // console.log("dentro del while" + v)
  var x = aleatorio(0,9);
  var y = aleatorio(0,9);
  if ((x<2||x>7)&&(y<2||y>7)){
    // console.log("dentro del iffff " + x + " " + y)
    x = x * 50 + 6;
    y = y * 50 + 6;
    var v3 = 0;
    // if (v3<v) repetido=0;
    repetido = 0;
    // unico=1;
    while (v3<v)
    {
      
      // console.log("dentro del wile v3 cantidad = " + cantidad)

      eval("posFoxi = [x,y];");
      eval("posFoxj = posFox"+v3+";");
      var array1=posFoxi[0]*10000+posFoxi[1];
      var array2=posFoxj[0]*10000+posFoxj[1];
      if (array1==array2) {
        repetido++;
        // console.log("repeticion = " + repetido)
        // unico=0;
      }
      v3++;
      }

      //GUARDAR LA POSICION INICIAL DE LOS ENEMIGOS
    if (repetido==0) {
    eval("posFox" + v + " = [x,y];");
    v++;
    }
  }
}
v = 0;
v3 = 0;


// TIMER
// Set the date we're counting down to
var countDownDate = new Date().getTime();
countDownDate+=10000;
var distance;
// Update the count down every 1 second
var x = setInterval(function() {
   //para que inicie despues de cerrar la img2:
  if (startTheTime==0){
  countDownDate = new Date().getTime();
  countDownDate+=10000;
  }
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var seconds =((distance % (1000 * 60)) / 1000);
  var sec=seconds.toFixed(2);
  // Display the result in the element with id="demo"
  if (win==0)
    document.getElementById("demo").innerHTML =sec;
  else{
    clearInterval(x);
    if (win==1)
      document.getElementById("demo").innerHTML = "🥳🐣🥳";
    else
    document.getElementById("demo").innerHTML = "😭😭😭";
  }
  // If the count down is finished, write some text
victory();
}, 10);

var keshinX= 206, keshinY=206;


//CARGA DE PERSONAJES
var fondo = {}
var fox = {}
var nido = {}
var egg = {}
var keshin = {}
cargarTodo ()

function cargarTodo () {
  fondo.imagen = new Image();
  fondo.imagen.src = "images/i6_tile.png";
  fondo.imagen.addEventListener("load", cFox);
  console.log("fondi");
}

function cFox() {
  fox.imagen = new Image();
  fox.imagen.src = "images/i7_fox.png";
  fox.imagen.addEventListener("load", cNido);
  console.log("foxi");
}
function cNido () {
  nido.imagen = new Image();
  nido.imagen.src = "images/i8_nido.png";
  nido.imagen.addEventListener("load", cEgg);
  console.log("nidi");
}
function cEgg () {
  egg.imagen = new Image();
  if (win==0)
    egg.imagen.src = "images/i9_egg.png";
  else
    if (win==2)
      egg.imagen.src="images/i9_egg_loss.png";
    else
      egg.imagen.src="images/i9_egg_win.png";
  egg.imagen.addEventListener("load", cKeshinLeft);
  console.log("cargarEggi");
}
function cKeshinLeft () {
  keshin.imagen = new Image();
  keshin.imagen.src = "images/i17_kleft.png";
  if (win==2)
    keshin.imagen.src= "images/i11_keshin_sad.png";
  keshin.imagen.addEventListener("load", dibujarStart);
  console.log("cargarKeshini");
}
////////////////////////////////////////////////////////////
//////////////////DIBUJAR LOS ZORROS ACTUALES
////////////////////////////////////////////////////////////

//JUEGO
// if (win===0){
var up = document.getElementById("upbutt");
up.addEventListener("click", moveKeshinUp);
var left = document.getElementById("leftbutt");
left.addEventListener("click", moveKeshinLeft);
var right = document.getElementById("rightbutt");
right.addEventListener("click", moveKeshinRight);
var down = document.getElementById("downbutt");
down.addEventListener("click", moveKeshinDown);
var targetButton = document.getElementById("centerbutt");
targetButton.addEventListener("click", Attack);
var horizontal = 100;
var vertical = 100;
// var targetButton = document.getElementById("centerbutt");
var target = 0;
var remainFoxes = cantidad;
var remainTime = 10000;
var posFoxHorizontalV;
// }


///////////////
///FUNCIONES///
///////////////

function canAttack()
{

  // console.log(keshinX);  
  // console.log(keshinY);  
  // console.log("puedo atacar o no?");
  target = 0;
  for (v2=0; v2<cantidad; v2++) {
    // console.log("zorros");  
    // eval("console.log(posFox" + v2 +");")
    eval("var posFoxHorizontal = posFox" + v2 +" [0];");
    eval("var posFoxVertical = posFox" + v2 +" [1];");
    vertical = Math.abs(Math.abs(posFoxVertical)-Math.abs(keshinY));
    horizontal = Math.abs(Math.abs(posFoxHorizontal)-Math.abs(keshinX));
    if(vertical<=50&&horizontal<=50){
      target=1;
      //cambiar de color el boton
      targetButton.src="images/i5_center_red.png";
    }
  }
  if (target==0)
     targetButton.src="images/i5_center.png";
    console.log(target);
}
function Attack()
{
  if (target==1)
  {
    audio.play();
    for (v2=0; v2<cantidad; v2++) {
      // console.log("zorros");  
      eval("console.log(posFox" + v2 +");")
      eval("var posFoxHorizontal = posFox" + v2 +" [0];");
      eval("var posFoxVertical = posFox" + v2 +" [1];");
      vertical = Math.abs(Math.abs(posFoxVertical)-Math.abs(keshinY));
      horizontal = Math.abs(Math.abs(posFoxHorizontal)-Math.abs(keshinX));
  
      if(vertical<=50&&horizontal<=50)
      {
        eval("posFox"+v2+"=[1000,1000];");

        // targetButton.src="images/i5_center_red.png";
      }
      
    }
    // moveKeshin();
    // victory();
  }
  moveKeshin();
}
function victory()
{
  remainFoxes = cantidad;
  for (v5=0; v5<cantidad; v5++) 
  {
    eval("posFoxHorizontalV = posFox" + v5 +"[0];");
    if(posFoxHorizontalV==1000)
    {
      remainFoxes-=1;
    }
  }

  if (remainFoxes==0&&distance>0)
  {
    win=1;
    setTimeout(function(){
      if (screen.width>=1125){
        winImg.style.top = "115px";
        winImg.style.width = '400px';
      }
      else
        winImg.style.width= '100%';
    },2000);
    cargarTodo();
  }
  else if (distance<=0){
    win=2
    setTimeout(function(){
      if (screen.width>=1125){
        lossImg.style.top = "115px";
        lossImg.style.width = '400px';
      }
      else
        lossImg.style.width= '100%';
    },2000);
    keshinX = 206
    keshinY = 206
    cargarTodo();
  }
  else
    console.log("sigo jugando");
  console.log("funcion victoria");
}
function moveKeshinUp()
{
  if (keshinY>6)
  {
  keshinY-= 50;
  moveKeshin();
  }
}
function moveKeshinLeft()
{
  if (win==2)
    keshin.imagen.src = "images/i11_keshin_sad.png";
  else
    keshin.imagen.src = "images/i17_kleft.png";
  if (keshinX>6)
  {
  keshinX-= 50;
  moveKeshin();
  }
}
function moveKeshinRight()
{
  if (win==2)
    keshin.imagen.src= "images/i19_keshin_sad_right.png"
  else 
    keshin.imagen.src= "images/i18_kright.png" 
  if (keshinX<456)
  {
  keshinX+= 50;
  moveKeshin();
  }
}
function moveKeshinDown()
{
  if (keshinY<456)
  {
  keshinY+= 50;
  moveKeshin();
  }
}
function moveKeshin() 
{
  if (win==0) {
    taps.play();
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(nido.imagen, 206, 206);
    papel.drawImage(egg.imagen, 256-25,256-25 );
    var drawFox=0;
    for (vv=0;vv<cantidad;vv++){
      eval("drawFox = posFox" + vv + ";");
      papel.drawImage(fox.imagen, drawFox[0], drawFox[1]);
    }
    papel.drawImage(keshin.imagen, keshinX, keshinY);
    canAttack();
  }
}
function dibujarStart()
{
  if (win==0){
  papel.drawImage(fondo.imagen, 0, 0);
  papel.drawImage(nido.imagen, 206, 206);
  var drawFox=0;
  for (vv=0;vv<cantidad;vv++){
    eval("drawFox = posFox" + vv + ";");
    papel.drawImage(fox.imagen, drawFox[0], drawFox[1]);
  }
  // var keshinX= 206, keshinY=206;
  papel.drawImage(keshin.imagen, keshinX, keshinY);
  papel.drawImage(egg.imagen, 256-25,256-25 );
  // egg.draweded=true;
  }
  else{
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(nido.imagen, 206, 206);
    papel.drawImage(keshin.imagen, 206, 206);
    papel.drawImage(egg.imagen, 256-25,256-25 );
  }
}
function aleatorio(min, maxi)
{
var resultado;
var resultado = Math.floor(Math.random()*(maxi-min+1))+min;
return resultado;
}