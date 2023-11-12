import { Navigate } from 'react-router-dom'
import  './ButtonAlternate.scss'


function ButtonAlternate ({text, type}) {
    return (
        <>
            <button className='button-alt'>{text}</button>
        </>
    )
}



export default ButtonAlternate