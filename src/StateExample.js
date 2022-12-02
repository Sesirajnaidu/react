import React from 'react'
class StateExample extends React.Component{
    state={
            employees:[{id:1,name:"employee1"},
                    {id:2,name:"employee2"}
                ]
                //employees:["emp1","emp2","emp3"]
                //name:"ReactJS",
                // year:2012,
    }
    render(){
        return(    
            <div>
            {
                this.state.employees.map((emp)=>(
                    <div>
                        <p>{emp.id}</p>
                        <p>{emp.name}</p>
                    </div>
                ))
            }
            </div>
        )
    }
}
export default StateExample
 {/*<p>
                {this.state.employees[0].id} &nbsp;
                {this.state.employees[0].name}
            </p>
            <p>
                {this.state.employees[1].id} &nbsp;
                {this.state.employees[1].name}
               

            </p> */}
        