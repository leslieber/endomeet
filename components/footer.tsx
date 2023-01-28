import style from '../styles/layout.module.css'

function Footer() {
    return (
        <div className={style.legal_content}>
        <span className="legal-text">&#169; EndoMeet</span>   <a href="#">Contact</a>   <a href="#">Data Protection</a> <a href="#">Cookies</a>
        </div>
    )
}

export default Footer;
