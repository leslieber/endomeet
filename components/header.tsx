import style from '../styles/layout.module.css'
import Image from 'next/image'
import lens from '../images/lens.png'
import profilepic from '../images/profile.png'
import Link from 'next/link';

function Header() {
    return (
        <div className={style.navbar}>

            <div>
            <Link href="../">EndoMeet!</Link>
            <Link href="../about">About</Link>
            <Link href="../login">Forum</Link>
            </div>

            <div className={style.searchbar}>
            <input type="text" id="search" name="search" placeholder='Search...'/>
            <button className={style.lensbutton}><Image className={style.lens} src={lens} alt="lens"/></button>
            </div>

            <div className={style.loginpic}>
            <Link href="../login">Login</Link>
            <Link href="../form"><Image className={style.profilepic} src={profilepic} alt="profilepic" /> </Link>
            </div>
         
         </div>

    )
}

export default Header;
