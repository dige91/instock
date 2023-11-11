import Button from '../Button/Button'
import './PageHeader.scss'

function PageHeader ({text, srcLeft, srcRight , btnImg, btnTxt}) {
    return (
        <div className='page-header'>
            <img className='page-header__img1' src={srcLeft}/>
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