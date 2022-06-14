import React,{useState, FC, ReactElement} from 'react';
import "./Game.css";
import shitouImg from "./Images/shitou.png";
import jiandaoImg from "./Images/jiandao.png";
import buImg from "./Images/bu.png";


const Game:FC = ():ReactElement => {
  const [aiRes, setAiRes] = useState('paper')
  const [users, setUsers] = useState(['rock','scissors', 'paper']);
  const handleClick = (e:any) => {
    setUsers(users.sort((a, b)=>Math.random()-0.7))
    setAiRes(users[0])
    const resplayer:string = e.target.getAttribute('player-res')
    if(resplayer==='rock'&&aiRes==='rock'||resplayer==='scissors'&&aiRes==='scissors'||resplayer==='paper'&&aiRes==='paper'){
      alert('Tie')
    }
    else if(resplayer==='rock'&&aiRes==='scissors'||resplayer==='scissors'&&aiRes==='paper'||resplayer==='paper'&&aiRes==='rock'){
      alert('player won');
    }
    else if(resplayer==='rock'&&aiRes==='paper'||resplayer==='scissors'&&aiRes==='rock'||resplayer==='paper'&&aiRes==='scissors'){
      alert('AI won');
    }else{
      console.log('res', resplayer)
      console.log('ai', aiRes)
    }
  }
  return (
    <div className='container'>
      <h1>Rock Paper Scissors Game</h1>
      <span>Player：</span> 

      <div className='player-container1'>
      <img src={shitouImg} alt="" /> &nbsp;&nbsp;
        <br />
        <img src={jiandaoImg} alt="" /> &nbsp;&nbsp;
        <br />
        <img src={buImg} alt="" /> &nbsp;&nbsp;
      </div>

      <div className = 'player-container2'>
      <button onClick={(e)=>handleClick(e)} player-res="rock"> Rock</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br /><br />
        <button onClick={(e)=>handleClick(e)} player-res="scissors">Scissors</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br /><br />
        <button onClick={(e)=>handleClick(e)} player-res="paper">Paper</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>

       <div className="ai-container">
      AI: 
      <br/>
      <br/>
      {aiRes}
    </div> 

    </div>
  );
}

export default Game;
