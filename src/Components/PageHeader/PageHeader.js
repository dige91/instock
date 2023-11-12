import Button from '../Button/Button'
import './PageHeader.scss'
import backBtn from '../../assets/icons/arrow_back-24px.svg'
import { useNavigate } from 'react-router-dom'

function PageHeader ({text, srcRight , btnImg, btnTxt}) {

    const navigate = useNavigate()
    function goBack() {
        navigate(-1)
    }

    return (
        <div className='page-header'>
            <img className='page-header__img1' onClick={goBack} src={backBtn}/>
            <h1 className='page-header__heading' >{text}</h1>
            <div className='page-header__icon-container' >
                <div className='page-header__img2-container'>
                    <img className='page-header__img2' src={srcRight} />
                </div>
                <Button src={btnImg} text={btnTxt}/>
            </div>
        
        </div>
    )
}

export default PageHeader