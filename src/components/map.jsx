const Students = () => {
    const name = [
        "miroj",
        "arogya",
    ];
    
    return(
        <div className="studentName">
            {name.map((names) => (<h1>{names}</h1>))
            }
        </div>
    );
}

export default Students;