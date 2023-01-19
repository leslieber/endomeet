import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/test.module.css'


export default function Home() {
  return (
<div>
      <Head>
        <title>EndoMeet Register</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <body>

         <div className={style.navbar}>
            <div>
            <a href="#">EndoMeet!</a>
            <a href="#">About</a>
            <a href="#">Forum</a>
            </div>

            <div>
            <input type="text" id="search" name="search" placeholder='Search'/>
            </div>

            <div>
            <a href="#">Login</a>
            <a href="#">Pic</a>
            </div>
         
         </div>

        <div className={style.middle}>
            <form className={style.register_form}>
                <h1>Register</h1>
                
                <br />
               
                
                <input type="text" id="fname" name="fname" placeholder='First Name*' />
                <input type="text" id="lname" name="lname" placeholder='Last Name*'/>
                <br/>
                <br/>
                <input type="text" id="email" name="email" placeholder='E-mail address*' />
                <br />
                <br/>
                <input type="text" id="password" name="password" placeholder='Set A Password*' />
                <br/>
                <br/>
                <input type="submit" value="Sign in" />
            </form>
        </div>

        <div className={style.legal_content}>
        <span className="legal-text">(c) EndoMeet</span>   <a href="#">Contact</a>   <a href="#">Data Protection</a> <a href="#">Cookies</a>
        </div>


      </body>
</div>
  )
}
