import './ContactDetails.scss'

function ContactDetails (){
    return (
            <div className='contact'>
                <h2>Contact Details</h2>
                <label className='contact__label' htmlFor='name'>Contact Name</label>
                <input className='contact__input' placeholder='Contact Name' type='text' id='name' name='name'></input>

                <label className='contact__label' htmlFor='position'>Position</label>
                <input className='contact__input' placeholder='Position' type='text' id='position' name='position'></input>

                <label className='contact__label' htmlFor='number' >Phone Number</label>
                <input className='contact__input' placeholder='Phone Number' type='tel' id='number'></input>

                <label className='contact__label' htmlFor='email' >Email</label>
                <input className='contact__input' placeholder='Email' type='email' id='email'></input>
                
            </div>
    )
}


export default ContactDetails