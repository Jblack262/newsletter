import React from 'react'

function Student({student}) {
    const {name} = student;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Student;
