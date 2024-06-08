import { Navdata } from "../../data/navdata/Navdata"
import navlinks from './Navlinks.module.css'

const Navlinks = ({setOpen, type}) =>
{
    return(
        <div className={type === "sidebar" ? navlinks.sidebar : navlinks.container}>
            {Navdata.map((nav)=>
            (
                <span key={nav.id}>{nav.data}</span>
            ))}
            <button onClick={()=>setOpen(false)}>Close</button>
        </div>
    )
}

export default Navlinks
