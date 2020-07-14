var osti = document.getElementById("osti");
var taps = document.getElementById("taps");
var pF = document.getElementById("plagiForest");
var papel = pF.getContext("2d");
var win = 0;
var wined = 0;
// window.addEventListener("mouseMove",playost);
// function playost(){

// }
// var mapa = "imagestile.png";

var fondo =
{
  url: "images/i6_tile.png",
  cargaOK: false
};

var keshin =
{
  url: "images/i1_favicon.png",
  cargaOK: false
};

var fox =
{
  url: "images/i7_fox.png",
  cargaOK: false
}
var nido =
{
  url: "images/i8_nido.png",
  cargaOK: false
}
var egg =
{
  url: "images/i9_egg.png",
  cargaOK: false
}


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
console.log("fondi");

fox.imagen = new Image();
fox.imagen.src = fox.url;
fox.imagen.addEventListener("load", cargarFox);
console.log("foxi");

nido.imagen = new Image();
nido.imagen.src = nido.url;
nido.imagen.addEventListener("load", cargarNido);
console.log("nidi");

keshin.imagen = new Image();
keshin.imagen.src = keshin.url;
keshin.imagen.addEventListener("load", cargarKeshin);
console.log("cargarKeshini");

egg.imagen = new Image();
egg.imagen.src = egg.url;

egg.imagen.addEventListener("load", cargarEgg);
// function precargarEgg() {
//   if (win==0)
//   {
//     cargarEgg()
//   }
//   else
//   {
//     moveKeshin()
//   }
// }


// egg.hatched = false;
console.log("cargarEggi");

console.log("logPosFoxes");

// function logPosFox() {
//   for (v1=0; v1<cantidad; v1++) {
//   console.log("posiciones de los zorros");
//   eval("console.log(posFox"+v1+");");
//   }
// }

var cantidad = aleatorio (3,5);

// var posFox;
// var indice;


for (v2=0; v2<=cantidad; v2++) {
  eval("var posFox" + v2 +"= [0,0];");
  }

  for (v2=0; v2<=cantidad; v2++) {
    // console.log("ciclo for comenzaría en 0=" + v2)
  eval("var posFoxj" + v2 +"= [0,0];");
  // console.log(posFoxj0);
  }

// var aa = 0;

  var repetido=0;
// TIMER
setTimeout(timeout, 10000);


// Set the date we're counting down to
var countDownDate = new Date().getTime();
countDownDate+=10000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var seconds =((distance % (1000 * 60)) / 1000);
  var sec=seconds.toFixed(2);


  // Display the result in the element with id="demo"
  if (wined==0){
  document.getElementById("demo").innerHTML =sec ;
  }
  else{
    document.getElementById("demo").innerHTML = "🥳🐣🥳";

  }
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    if (wined==0){
    document.getElementById("demo").innerHTML = "😭😭😭";
    }
    else 
    {
    document.getElementById("demo").innerHTML = "🥳🐣🥳";

    }
  }
}, 10);


var audio = document.getElementById("audio");

//JUEGO
if (win===0){
var up = document.getElementById("upbutt");
up.addEventListener("click", moveKeshinUp);
var up = document.getElementById("leftbutt");
up.addEventListener("click", moveKeshinLeft);
var up = document.getElementById("rightbutt");
up.addEventListener("click", moveKeshinRight);
var up = document.getElementById("downbutt");
up.addEventListener("click", moveKeshinDown);
var up = document.getElementById("centerbutt");
up.addEventListener("click", Attack);
var keshinX= 206, keshinY=206;
var horizontal = 100;
var vertical = 100;
var targetButton = document.getElementById("centerbutt");
var target = 0;
var remainFoxes = cantidad;
var remainTime = 10000;
var posFoxHorizontalV;

}

///////////////
///FUNCIONES///
///////////////
function timeout()
{
  remainTime=0;
  // egg.imagen.src="images/i9_egg_loss.png";
  // victory();
}
function canAttack()
{
  osti.play();

  console.log(keshinX);  
  console.log(keshinY);  
  console.log("puedo atacar o no?");
  target = 0;
  for (v2=0; v2<cantidad; v2++) {
    console.log("zorros");  
    eval("console.log(posFox" + v2 +");")
    eval("var posFoxHorizontal = posFox" + v2 +" [0];");
    eval("var posFoxVertical = posFox" + v2 +" [1];");
    vertical = Math.abs(Math.abs(posFoxVertical)-Math.abs(keshinY));
    horizontal = Math.abs(Math.abs(posFoxHorizontal)-Math.abs(keshinX));

    if(vertical<=50&&horizontal<=50)
    {
      target=1;
      //cambiar de color el boton
      targetButton.src="images/i5_center_red.png";
    }
    
  }
  if (target==0)
  {
     targetButton.src="images/i5_center.png";
  }
    console.log(target);
}
function Attack()
{
  
  if (target==1)
  {
    audio.play();
    for (v2=0; v2<cantidad; v2++) {
      console.log("zorros");  
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
  }
  moveKeshin();
  victory();
}
function victory()
{
  if (win==0)
  {
    remainFoxes = cantidad;
    for (v5=0; v5<cantidad; v5++) 
    {
      console.log("zorrosV");  
      eval("console.log(posFox" + v5 +");")
      eval("posFoxHorizontalV = posFox" + v5 +"[0];");
      // eval("var posFoxVerticalV = posFox" + v2 +" [1];");
      // vertical = Math.abs(Math.abs(posFoxVertical)-Math.abs(keshinY));
      // horizontal = Math.abs(Math.abs(posFoxHorizontal)-Math.abs(keshinX));
      
      if(posFoxHorizontalV==1000)
      {
        remainFoxes-=1;
        // eval("posFox"+v2+"=[1000,1000];");
        
        // alert("has matado uno");
        // targetButton.src="images/i5_center_red.png";

      }
    }
    if (remainFoxes==0)
    {
      win=1;
      if (remainTime!=0){
      egg.imagen.src="images/i9_egg_win.png";
      fox.imagen.src="images/i10_tomb.png";
      document.getElementById("demo").innerHTML = "🥳🐣🥳";
      wined=1;
      }
      if (remainTime==0){
      egg.imagen.src="images/i9_egg_loss.png";
      fox.imagen.src="images/i10_tomb.png";
      keshin.imagen.src="images/i11_keshin_sad.png";

      }

      // alert("ganaste");
      egg.hatched=true;
      End();
    }
    // if (remainTime<=0)
    // {
    //   win=2;
    //   egg.imagen.url="images/i9_egg_loss.png";
    //   End();
    // }
  } 
  console.log("funcion victoria");
}
function End() 
{
    // alert(win);
      papel.drawImage(fondo.imagen, 0, 0);
      // console.log("fondo");
      papel.drawImage(nido.imagen, 206, 206);
      // console.log("nido");
      papel.drawImage(egg.imagen, 256-25,256-25 );
    
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
  if (keshinX>6)
  {
  keshinX-= 50;
  moveKeshin();
  }
}
function moveKeshinRight()
{
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

  if (win==0){
    taps.play();

    if (fondo.cargaOK)
    {
      papel.drawImage(fondo.imagen, 0, 0);
      // console.log("fondo");
      papel.drawImage(nido.imagen, 206, 206);
      // console.log("nido");
  
    }
    if (fox.cargaOK)
    {
      var v = 0;
      while ( v < cantidad)
      {
              
        
          eval("x = posFox"+v+"[0];");
          eval("y = posFox"+v+"[1];");
                   
          papel.drawImage(fox.imagen, x, y);
          // console.log("zorro");
          // var indice = v;
          eval("posFox" + v + " = [x,y];");
          console.log("posFox"+v);
          eval("console.log(posFox"+v+");");
          v++;
          
          /////////////////////////////
          // var v3=0;
          // while (v3<v)
                  //  {
            // eval("posFoxi = [x,y];");
            // console.log("i---"+posFoxi);
            // eval("posFoxj=posFoxj"+v3+";");
            // console.log("jabajooooo v3=" +v3);
            // eval("console.log(+posFoxj"+v3+");");
            // posFoxi=posFoxj;
            // v3++;}
            // console.log("asdasdasd");
          // }
          /////////////////////////////
  
  
        
        // unico=1;
      }
      // console.log("vv"+v);
    }
  // aa++;
  // console.log("aa"+aa); 
  console.log("repetiddo"+repetido); 
  
  // if (fox.cargaOK&&keshin.cargaOK&&v==cantidad) {
    // var keshinX= 206, keshinY=206;
    papel.drawImage(keshin.imagen, keshinX,keshinY );
    papel.drawImage(egg.imagen, 256-25,256-25 );
  
  
  // }
    canAttack();
  }
}
function cargarFondo()
{
  fondo.cargaOK = true;
  dibujarStart();
}
function cargarKeshin()
{
  keshin.cargaOK = true;
  dibujarStart();
}
function cargarFox()
{
  fox.cargaOK = true;
    if (win===0){
  dibujarStart();
  }
}
function cargarNido()
{
  nido.cargaOK = true;
  dibujarStart();
}
function cargarEgg()
{
  egg.cargaOK = true;
    // if(win===0){
  dibujarStart();
  // }
}
function dibujarStart()
{
  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
    // console.log("fondo");
    papel.drawImage(nido.imagen, 206, 206);
    // console.log("nido");

  }
  if (fox.cargaOK)
  {
    var v = 0;
    while ( v < cantidad)
    {
            // v1=0;
            // while (v1==0) {
            var x = aleatorio(0,9);
            var y = aleatorio(0,9);
            // console.log("zorros repetidos");
            // eval("console.log(posFox"+v1+");");
            // }

      // eval("posFox" + indice + " = [x,y];");
      

      
      
      if ((x<2||x>7)&&(y<2||y>7)) 
      // if ((x==1)&&(y==1)&&(unico)) 
      {
        x = x * 50 + 6;
        y = y * 50 + 6;

        //////////////////////////////////// start
        var v3=0;
        if (v3<v) repetido=0;
        unico=1;
        while (v3<v)
         
        {
          eval("posFoxi = [x,y];");
          console.log("i---"+posFoxi);
          eval("posFoxj = posFox"+v3+";");
          console.log("jooo"+posFoxj);
          var array1=posFoxi[0]*10000+posFoxi[1];
          var array2=posFoxj[0]*10000+posFoxj[1];
          console.log(array1);
          // posFoxi=posFoxj;
          if (array1==array2) {
            repetido++;
            console.log("se prepitio uno");
            unico=0;
          }
          v3++;
          // console.log("asdasdasd");
        }
          ///////////////////////////////////// end

        if (unico) {
          if(win===0){
        papel.drawImage(fox.imagen, x, y);

          }
        // console.log("zorro");
        // var indice = v;
        eval("posFox" + v + " = [x,y];");
        console.log("posFox"+v);
        eval("console.log(posFox"+v+");");
        v++;
        }
        /////////////////////////////
        // var v3=0;
        // while (v3<v)
                //  {
          // eval("posFoxi = [x,y];");
          // console.log("i---"+posFoxi);
          // eval("posFoxj=posFoxj"+v3+";");
          // console.log("jabajooooo v3=" +v3);
          // eval("console.log(+posFoxj"+v3+");");
          // posFoxi=posFoxj;
          // v3++;}
          // console.log("asdasdasd");
        // }
        /////////////////////////////


      }
      // unico=1;
    }
    // console.log("vv"+v);
  }
// aa++;
// console.log("aa"+aa); 
console.log("repetiddo"+repetido); 

if (fox.cargaOK&&keshin.cargaOK&&v==cantidad) {
  var keshinX= 206, keshinY=206;
  papel.drawImage(keshin.imagen, keshinX,keshinY );
  papel.drawImage(egg.imagen, 256-25,256-25 );
  egg.draweded=true;
}
  // }//fin if de win==0

}
function aleatorio(min, maxi)
{

var resultado;
var resultado = Math.floor(Math.random()*(maxi-min+1))+min;
return resultado;
}