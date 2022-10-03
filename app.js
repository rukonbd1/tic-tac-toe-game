const playboards=Array.from(Array(9).keys())
console.log(playboards)
const winComb=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let player;

let players={
    player1:[],
    player2:[]
}

const isGame=(player)=>{
    console.log(player)
    winComb.map(c=>{
        let count=0;
        console.log(c)
        for (let i = 0; i < c.length; i++) {
        }
    })
}

const gameResult=(players)=>{
    if(players.player1.length>2){
        isGame(players.player1)
    }
}

const storeBoardNum=(player,boardNum)=>{
    if(player=="X"){
        players.player1.push(boardNum);
    }
    else if(player=="O"){
        players.player2.push(boardNum);
    }
}

const removeListener =(boardNum)=>{
    document.querySelectorAll(".cell")[boardNum].removeEventListener('click',operation,false);
    
}

const turnPlayer=(lastPlayer)=>{
    if(lastPlayer=="X"){
        player="O"
    }
    else if(lastPlayer=="O"){
        player="X"
    }
    else{
        player="X";
    }
    return player
}
const fillGameBoard=()=>{

}
const operation=(e)=>{
    const boardNum = e.target.id;
    removeListener(boardNum);
    if(player){
        e.target.innerText=player;
        storeBoardNum(player,boardNum)
        turnPlayer(player);
    }
    else{
        e.target.innerText="X";
        storeBoardNum("X",boardNum)
        turnPlayer("X");
    }
    gameResult(players);

}
const startGame=()=>{
    document.querySelectorAll(".cell").forEach((node,key)=>{
        node.addEventListener('click',operation,false) 
    })
}
const gameOver=()=>{

}



startGame();
