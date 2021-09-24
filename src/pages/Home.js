import React from 'react';
import HexGrid from '../components/HexGrid'

function Home({setNewStudent}) {
    return (
        <div className="home">
            <HexGrid setNewStudent={setNewStudent}/>
        </div>
    )
}

export default Home
