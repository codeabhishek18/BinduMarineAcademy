import heroimage from '../../assets/heroimage.jpg'
import herosection from './Herosection.module.css'

const Herosection = () =>
{

    return(
        <div className={herosection.container}>
            <img src={heroimage} alt="img"/>
        </div>
    )
}

export default Herosection