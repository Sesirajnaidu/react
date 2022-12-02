
import React from "react"
class Events extends React.Component{
    state={
        username:"",
        mobilenumber:""
    }
    handleClick=()=>{
        console.log(this.state.username)
        console.log(this.state.mobilenumber)

    }
    handleChange=(e)=>{
        this.setState
        ({  
            [e.target.name]:e.target.value
        })
      
    }
    render(){
        return(
            <div>
                <input onChange={this.handleChange} placeholder="Username"  name="username"/>
                <input onChange={this.handleChange} placeholder="Enter mobilenumber" name="mobilenumber"></input>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
    
} 
export default Events
