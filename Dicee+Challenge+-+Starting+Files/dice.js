let a=document.querySelector(".img1");
let b=document.querySelector(".img2");
let c=document.querySelector(`h1`);
let arr=[`dice1.png`,`dice2.png`,`dice3.png`,`dice4.png`,`dice5.png`,`dice6.png`];
let id1=(Math.floor(Math.random()*6));
let id2=(Math.floor(Math.random()*6));
console.log(id1);
console.log(id2);


a.setAttribute("src","images/"+arr[id1]);
b.setAttribute("src","images/"+arr[id2]);
if(id1>id2)
    {
        c.innerText=`Player 1 is winner!!`;
    }
    else if(id1<id2)
    {
        c.innerText=`Player 2 is winner!!`;
    }
    else{
        c.innerText=`Both players are winner!!`;
    }