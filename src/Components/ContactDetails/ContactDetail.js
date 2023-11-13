import './ContactDetails.scss'

function ContactDetails ( {warehouse} ){
    return (
            <div className='contact'>
                <h2 className='contact__heading'>Contact Details</h2>
                <label className='contact__label' htmlFor='contact_name'>Contact Name</label>
                <input className='contact__input' type='text' id='contact_name' name='contact_name' placeholder='Contact Name'></input>

                <label className='contact__label' htmlFor='contact_position'>Position</label>
                <input className='contact__input'  type='text' id='contact_position' name='contact_position' placeholder='Position'></input>

                <label className='contact__label' htmlFor='contact_phone' >Phone Number</label>
                <input className='contact__input' type='tel' id='contact_phone' name='contact_phone' placeholder='Phone Number'></input>

                <label className='contact__label' htmlFor='contact_email' >Email</label>
                <input className='contact__input' type='contact_email' id='contact_email' placeholder='Email'></input>
                
            </div>
    )
}


export default ContactDetails