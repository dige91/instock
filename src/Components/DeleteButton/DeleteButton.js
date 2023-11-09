import  './DeleteButton.scss'


function DeleteButton ({text}) {
    return (
        <>
            <button className='delete-button'><img className='delete-button__image' />{text}</button>
        </>
    )
}



export default DeleteButton