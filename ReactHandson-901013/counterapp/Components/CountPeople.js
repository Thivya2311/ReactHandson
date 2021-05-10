import React, { Component } from 'react'

class CountPeople extends Component {
    constructor(props){
        super(props);
        this.state={
            EntryCount:0,
            ExitCount:0,
        }
    }
    
    updateEntry=()=>
    {
        this.setState((prevState,props)=>{
            return {EntryCount: prevState.EntryCount+1}
        });
    }
    updateExit=()=>{
        this.setState((prevState,props)=>{
            return {ExitCount:prevState.ExitCount+1}
        });
    }
    render() {
        return (
            <div>
               <pre> <button onClick={this.updateEntry}>Login</button> <span>{this.state.EntryCount} People Entered!!!</span>         <button onClick={this.updateExit}>Exit</button> <span>{this.state.ExitCount} People Left!!!</span></pre>
            </div>
        )
    }
}
export {CountPeople}