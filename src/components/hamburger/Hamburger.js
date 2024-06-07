import hamburger from './Hamburger.module.css'

const Hamburger = ({setOpen}) =>
{

    return(
        <div className={hamburger.container} onClick={()=>setOpen(true)}>
            <div className={hamburger.row}></div>
            <div className={hamburger.row}></div>
            <div className={hamburger.row}></div>
        </div>
    )
}

export default Hamburger