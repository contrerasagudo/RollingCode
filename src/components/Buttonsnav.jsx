import React from 'react'
import './buttonsNav.css'

function Buttonsnav(){
    return(
        <div className='izquierda'>
            <button><a href="https://github.com/">GitHub</a></button>
            <button><a href="https://getbootstrap.com/">Bootstrap</a></button>
            <button><a href="https://developer.mozilla.org/es/docs/Web/JavaScript">JavaScript</a></button>
            <button><a href="https://nodejs.org/es">NodeJS</a></button>
        </div>
    )
}

export default Buttonsnav;