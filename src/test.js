//using mapping with the props.

import React from 'react';
import Employee from './test_components/employee';

export default  function Test(){
    const Employees = [
        {
            name: "miroj",
            position: "CEO",
        },
        {
            name: "binamra",
            position : "Peon",
        },
        {
            name: "anish",
            position : "water boy",
        }
    ];
    return(
        <div className= "employees">
            <h1>Name of the employees of the company.</h1>
        {
            Employees.map((employee) => (
                <Employee name = {employee.name} position = {employee.position}/>
            ))
        }
        </div>
    );
}

