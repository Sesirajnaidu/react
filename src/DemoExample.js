import React from 'react'
class DemoExample extends React.Component{
   state={
       s:this.props.price
   }
   render(){
       return(
           <div>
               <p>{this.state.s}</p>
           </div>
       )
   }
}
export default DemoExample
{/*function DemoExample(demo){
 
    return(
       <div> {demo.studentname} {demo.rollno}</div>
    )
}

export default DemoExample
 */}
