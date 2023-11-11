import Button from '../Button/Button'
import './PageHeaderNoIcon.scss'

function PageHeaderNoIcon ({text, srcLeft, srcRight , btnImg, btnTxt}) {
    return (
        <div className='page-header'>
            <img className='page-header__img1' src={srcLeft}/>
            <h1 className='page-header__heading' >{text}</h1>
        </div>
    )
}



export default PageHeaderNoIcon