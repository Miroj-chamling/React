const Employee = () => {
    const employee  = [
        {
            name : "Miroj",
            position: "CEO"
        },
        {
            name : "Manjila",
            position : "Accountant"
        },
        {
            name : "Asmita",
            position : "Manager"
        },
    ];

    return(
        <div className = "employee">
            <h1>Name of the employee of the company :-</h1>
            {
            employee.map((employee) => (
            <div>
            <h1>{`name : ${employee.name}`}</h1>
            <h5>{`position : ${employee.position}`}</h5>
            </div>))
            }
        </div>
    );

}
export default Employee;