import Navlinks from "../navlinks/Navlinks"

const Sidebar = ({setOpen}) =>
{

    return(
        <div>
            <Navlinks setOpen={setOpen} type="sidebar"/>
        </div>
    )
}

export default Sidebar