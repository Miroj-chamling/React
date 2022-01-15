import React from 'react';

function Employee(props){
    const {name, position} = props;
    return(
        <div>
            <h1>{`name : ${name} position : ${position}`}</h1>
        </div>
    )
}

export default Employee;