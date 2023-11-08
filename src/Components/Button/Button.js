import  './Button.scss'


function Button ({text,src}) {
    return (
        <>
            <button className='button'><img className='button__image' src={src} />{text}</button>
        </>
    )
}



export default Button