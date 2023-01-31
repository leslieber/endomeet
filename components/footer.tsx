import style from '../styles/layout.module.css'
import Link from 'next/link';

function Footer() {
    return (
        <div className={style.legal_content}>
        <span className="legal-text">&#169; EndoMeet</span> <Link href="#">Impressum</Link>   <Link href="../contact">Contact</Link>   <Link href="#">Data Protection</Link> <Link href="#">Cookies</Link>
        </div>
    )
}

export default Footer;
