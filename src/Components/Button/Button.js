import { useNavigate } from 'react-router-dom'
import  './Button.scss'


function Button ({text,src, type , path}) {    

    return (
        <>
            <button className='button'><img className='button__image' type={type} src={src} />{text}</button>
        </>
    )
}



export default Button