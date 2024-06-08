import logo from './Logo.module.css'
import  anchor from '../../assets/anchor.png'

const Logo = () =>
{
    return(
        <div className={logo.container}>
            <div className={logo.header}>
                <img src={anchor} alt="logo"/>
                <span></span>
                <p>BMA</p>
            </div>
            <p className={logo.name}>BINDU MARINE ACADEMY</p>
        </div>
    )
}

export default Logo