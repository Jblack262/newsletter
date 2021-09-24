import React from 'react';
import HexGrid from '../components/HexGrid'

function Home({setNewStudent}) {
    return (
        <div className="home">
            <div className="hexContainer">
                <HexGrid setNewStudent={setNewStudent}/>
            </div>
        </div>
    )
}

export default Home
