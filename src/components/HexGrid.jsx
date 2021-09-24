import React from 'react';
import {Link} from 'react-router-dom';
import {students} from '../util/data';

function HexGrid({setNewStudent}) {
    return (
        <ul id="hexGrid">
            {students.map((student, index) => {
                const { name, image } = student;
                return (
                    <li className="hex" key={index}>
                        <div className="hexIn">
                            <Link to="/student" className="hexLink" onClick={() => setNewStudent(student)}>
                                <img src={image} alt={name} />
                                <h1>{name}</h1>
                            </Link>

                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default HexGrid

                    