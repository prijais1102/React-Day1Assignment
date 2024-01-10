import React from 'react'

function StudentFunction(props) {
  return (
    <div>
        Using function Component
        <br></br>
        Name={props.name}
        <br></br>
        Address={props.address} 
        <br></br>
        Scores={props.scores}     
    </div>
  )
}
export default StudentFunction;