import style from '../styles/layout.module.css'
import Image from 'next/image'
import lens from '../images/lens.png'
import profilepic from '../images/profile.png'

function Header() {
    return (
        <div className={style.navbar}>

            <div>
            <a href="../">EndoMeet!</a>
            <a href="../about">About</a>
            <a href="../login">Forum</a>
            </div>

            <div className={style.searchbar}>
            <input type="text" id="search" name="search" placeholder='Search...'/>
            <button className={style.lensbutton}><Image className={style.lens} src={lens} alt="lens"/></button>
            </div>

            <div className={style.loginpic}>
            <a href="../login">Login</a>
            <a href="../form"> <Image className={style.profilepic} src={profilepic} alt="profilepic" /> </a>
            </div>
         
         </div>

    )
}

export default Header;
