import './App.css';
import {ListofPlayers} from './Components/ListofPlayers';
import {ScoreBelow70} from './Components/ScoreBelow70';
import {OddPlayers} from './Components/OddPlayers';
import {EvenPlayers} from './Components/EvenPlayers';
import {IndianPlayers} from './Components/IndianPlayers';
function App() {
  var flag=true;
  let IndianTeam = ["Sachin1","Dhoni2","Virat3"
,"Rohit4","Yuvraj5","Raina6"];

  var players=[{name:"Jack",score:50},{name:"Michael",score:70},
  {name:"John",score:40},{name:"Ann",score:61},
  {name:"Elisabeth",score:61},{name:"Sachin",score:95},
  {name:"Dhoni",score:100},{name:"Virat",score:84},
  {name:"Jadeja",score:64},{name:"Raina",score:75},{name:"Rohit",score:80}];

  if(flag===true){
    return( 
    <div>
      <h1>List of Players</h1>
      <ListofPlayers players={players}/>
      <hr></hr>
      <h1>List of Players having Scores Less than 70</h1>
      <ScoreBelow70 players={players}/>
    </div>)
     
  }else{
    return ( 
    <div>
      <h1>Odd Players</h1>
      {OddPlayers(IndianTeam)}
      <hr></hr>
      <h1>Even Players</h1>
      {EvenPlayers(IndianTeam)}
      <hr></hr>
      <h1>List of Indian Players Merged</h1>
      <IndianPlayers />
    </div>)
   
  }

}

export default App;