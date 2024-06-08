import Herosection from "../../components/herosection/Herosection";
import Navbar from "../../components/navbar/Navbar";
import homepage from './Homepage.module.css'

const Homepage = () =>
{

    return(
        <div className={homepage.container}>
            <Navbar/>
            <Herosection/>
        </div>
    )
}

export default Homepage;