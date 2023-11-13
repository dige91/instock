import Button from '../Button/Button'
import './PageHeaderNoIcon.scss'
import backBtn from '../../assets/icons/arrow_back-24px.svg'
import { useNavigate } from 'react-router-dom'

function PageHeaderNoIcon({ text, }) {
    const navigate = useNavigate()
    function goBack() {
        navigate(-1)
    }

    return (
        <div className='page-header'>
            <img className='page-header__img1' onClick={goBack} src={backBtn} />
            <h1 className='page-header__heading' >{text}</h1>
        </div>
    )
}



export default PageHeaderNoIcon