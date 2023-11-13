import Button from '../Button/Button'
import './PageHeader.scss'
import backBtn from '../../assets/icons/arrow_back-24px.svg'
import { Link, useNavigate } from 'react-router-dom'
import edit from '../../assets/icons/edit-white-24px.svg'

function PageHeader ({text , path, ID}) {

    console.log(path);
    const warehouse = `/edit-warehouse/${ID}`
    const inventory = `/edit-inventory-item/${ID}` 
    const navigate = useNavigate()
    function goBack() {
        navigate(-1)
    }

    return (
        <div className='page-header'>
            <img className='page-header__img1' onClick={goBack} src={backBtn}/>
            <h1 className='page-header__heading' >{text}</h1>
            <div className='page-header__icon-container' >
                <Link to={( path === 'warehouse' ? warehouse : inventory)} className='page-header__img2-container'>
                    <img className='page-header__img2' src={edit} />
                </Link>
                <Link className='page-header__link' to={( path === 'warehouse' ? warehouse : inventory)} ><Button src={edit} text='Edit'/></Link>
            </div>
        
        </div>
    )
}



export default PageHeader