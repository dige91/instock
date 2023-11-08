import  './ButtonAlternate.scss'


function ButtonAlternate ({text,src}) {
    return (
        <>
            <button className='button'><img className='button__image' src={src} />{text}</button>
        </>
    )
}



export default ButtonAlternate