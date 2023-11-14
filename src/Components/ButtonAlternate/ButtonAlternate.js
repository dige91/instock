import { useNavigate } from 'react-router-dom'
import  './ButtonAlternate.scss'


function ButtonAlternate ({text, type}) {
    const navigate = useNavigate()
            function goBack() {
                    navigate(-1)
            };
            
    return (
        <>
            <button className='button-alt' onClick={goBack}>{text}</button>
        </>
    )
}



export default ButtonAlternate