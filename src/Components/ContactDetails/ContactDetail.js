import './ContactDetails.scss'

function ContactDetails (){
    return (
            <div className='contact'>
                <h2 className='contact__heading'>Contact Details</h2>
                <label className='contact__label' htmlFor='contact_name'>Contact Name</label>
                <input className='contact__input' placeholder='Contact Name' type='text' id='contact_name' name='contact_name'></input>

                <label className='contact__label' htmlFor='contact_position'>Position</label>
                <input className='contact__input' placeholder='Position' type='text' id='contact_position' name='contact_position'></input>

                <label className='contact__label' htmlFor='contact_phone' >Phone Number</label>
                <input className='contact__input' placeholder='Phone Number' type='tel' id='contact_phone' name='contact_phone'></input>

                <label className='contact__label' htmlFor='contact_email' >Email</label>
                <input className='contact__input' placeholder='Email' type='contact_email' id='contact_email'></input>
                
            </div>
    )
}

export default ContactDetails