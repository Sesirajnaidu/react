import React from 'react'
class StateExample extends React.Component{
    state={
        name:"ReactJS",
        year:2012
        
    }
    render(){
        return(<div>
            <p>{this.state.name} {this.state.year}</p>
        </div>)
        
        }
    }

export default StateExample
