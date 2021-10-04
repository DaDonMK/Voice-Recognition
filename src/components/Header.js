import React, {useEffect, useState} from 'react'
import {HashRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'

const Header = () => {

    return(
        <div>
            {/* <button onClick={() => <Link to='/alan'></Link>}>ALAN AI</button> */}
            <h1>Six Guys</h1>
            <HashRouter>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/alan'>Voice Recognition</Link>
                </nav>
            </HashRouter>
        </div>
    )
}

export default Header