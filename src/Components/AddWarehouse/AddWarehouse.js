import ContactDetails from '../ContactDetails/ContactDetail'
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails'
import ButtonAlternate from '../ButtonAlternate/ButtonAlternate'
import Button from '../Button/Button'
import './AddWarehouse.scss'

function AddWarehouse (){
    return (
        <form className='form' >
            <div className='form__input-container'>
                <WarehouseDetails />
                <ContactDetails />
            </div>
            
            <div className='form__button-container'>
                <ButtonAlternate text='cancel'/>
                <Button text='+ add a warehouse'/>
            </div>
        </form>
    )
}


export default AddWarehouse



