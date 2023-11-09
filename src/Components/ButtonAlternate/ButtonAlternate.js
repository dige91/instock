import  './ButtonAlternate.scss'


function ButtonAlternate ({text,src, type}) {
    return (
        <>
            <button className='button-alt'><img className='button__image' type={type} src={src} />{text}</button>
        </>
    )
}



export default ButtonAlternate