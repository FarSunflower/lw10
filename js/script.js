function name(errname){
    while(errname=="" || errname==null){
    errname=prompt("Please enter your Nickname");
    if(errname=="" || errname==null){
    alert("please entern nick name")};
    }
  return errname;
    }
const td11=document.getElementById("d11");
const td12=document.getElementById("d12");
const td13=document.getElementById("d13");
const td21=document.getElementById("d21");
const td22=document.getElementById("d22");
const td23=document.getElementById("d23");
const td31=document.getElementById("d31");
const td32=document.getElementById("d32");
const td33=document.getElementById("d33");
var UserName = name(UserName);
var hiH = document.getElementById("hi");
hiH.innerHTML="Welcome to Monokuma`s casino " + UserName;
const but1 = document.getElementById("but1");
const bal1= document.getElementById("bal1");
balance=1000;
bal1.innerHTML=balance;
but1.addEventListener('click',()=>{
  td11.src="img/gifka.gif";
  td12.src="img/gifka.gif";
  td13.src="img/gifka.gif";
  td21.src="img/gifka.gif";
  td22.src="img/gifka.gif";
  td23.src="img/gifka.gif";
  td31.src="img/gifka.gif";
  td32.src="img/gifka.gif";
  td33.src="img/gifka.gif";
  setTimeout(delo, 600);
function delo(){
  if(balance==0){
    alert("Get out");
    return 0;
  }
var winOrnot=0;
var mas1=new Array();
var mas2=new Array();
var mas3=new Array();
for(let i=0;i<3;i++){
  mas1[i]=Math.floor(Math.random()*(6-1))+1;
  }
for(let i=0;i<3;i++){
  mas2[i]=Math.floor(Math.random()*(6-1))+1;
  }
for(let i=0;i<3;i++){
  mas3[i]=Math.floor(Math.random()*(6-1))+1;
  }
console.log(mas1);
console.log(mas2);
console.log(mas3);
for(let i=0;i<3;i++){
  if((mas2[i]==mas1[i])){
  while((mas2[i]==mas1[i]))
    mas2[i]=Math.floor(Math.random()*(6-1))+1;
}}
for(let i=0;i<3;i++){
  if((mas3[i]==mas1[i]) || (mas3[i]==mas2[i])){
  while((mas3[i]==mas1[i]) || (mas3[i]==mas2[i]))
    mas3[i]=Math.floor(Math.random()*(6-1))+1;
}}

var masAll=new Array(mas1,mas2,mas3);
var kartunku= {
  1:{
    0: "img/mul1.png"
  },
  2:{
    0: "img/mul2.png"
  },
  3:{
    0: "img/mul3.png"
  },
  4:{
    0: "img/mul4.png"
  },
  5:{
    0: "img/mul5.png"
  }
}
td11.src=kartunku[masAll[0][0]][Math.floor(Math.random() * 0)];
td12.src=kartunku[masAll[0][1]][Math.floor(Math.random() * 0)];
td13.src=kartunku[masAll[0][2]][Math.floor(Math.random() * 0)];
td21.src=kartunku[masAll[1][0]][Math.floor(Math.random() * 0)];
td22.src=kartunku[masAll[1][1]][Math.floor(Math.random() * 0)];
td23.src=kartunku[masAll[1][2]][Math.floor(Math.random() * 0)];
td31.src=kartunku[masAll[2][0]][Math.floor(Math.random() * 0)];
td32.src=kartunku[masAll[2][1]][Math.floor(Math.random() * 0)];
td33.src=kartunku[masAll[2][2]][Math.floor(Math.random() * 0)];


setTimeout(winorlose, 100);
function winorlose(){
for(let i=0;i<3;i++){
  if((masAll[i][0] == masAll[i][1]) && (masAll[i][1] == masAll[i][2])){
    alert("you win!");
    balance=balance+500*1;
    bal1.innerHTML=balance;
    winOrnot=1;
  } 
  }

if(winOrnot==0){
    balance=balance-100;
    bal1.innerHTML=balance;
}
}
winOrnot=0;
console.log(masAll);
}});