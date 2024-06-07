import Navbar from "../../components/navbar/Navbar";
import homepage from './Homepage.module.css'

const Homepage = () =>
{

    return(
        <div className={homepage.container}>
            <Navbar/>
        </div>
    )
}

export default Homepage;