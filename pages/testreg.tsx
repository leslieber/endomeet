import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/layout.module.css'
import React from 'react';



export default function Home() {
	const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);

	// This useEffect will only run once, during the first render
	React.useEffect(() => {
		// Updating a state causes a re-render
		setInitialRenderComplete(true);
	}, []);

	// initialRenderComplete will be false on the first render and true on all following renders
	if (!initialRenderComplete) {
		// Returning null will prevent the component from rendering, so the content will simply be missing from
		// the server HTML and also wont render during the first client-side render.
		return null;
	} else {
  return (
<div>
  
      <Head>
        <title> Test Register</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <body>

         <div className={style.navbar}>
            <div>
            <a href="#">EndoMeet!</a>
            <a href="#">About</a>
            <a href="#">Forum</a>
            </div>

            <div className={style.searchbar}>
            <input type="text" id="search" name="search" placeholder='Search'/>
            </div>

            <div>
            <a href="#">Login</a>
            <a href="#">Pic</a>
            </div>
         
         </div>

        <div className={style.middle}>
            
            <div className={style.box} >
                <div className={style.titleform}>Registration</div>
                <form action="#">
                    <div className={style.userfullname}>
                        <div className={style.inputbox}>
                            <input type="text" placeholder="First Name" required/>
                        </div>
                        <div className={style.inputbox}>
                            <input type="text" placeholder="Last Name" required/>
                        </div>
                    </div>
                    <div className={style.userdetails}>
                        <div className={style.inputboxtwo}>
                            <input type="text" placeholder="Username" required/>
                        </div>
                        <div className={style.inputboxtwo}>
                            <input type="text" placeholder="E-mail address" required/>
                        </div>
                        <div className={style.inputboxtwo}>
                            <input type="text" placeholder="Password" required/>
                        </div>
                    </div>
                    <div className={style.genderdetails}>
                        <span className={style.gendertitle}>Gender</span>
                        <div className={style.category}>
                            <label htmlFor="">
                                <span className={style.gender}>Female</span>
                                <input className={style.dot} type="radio"/>
                            </label>
                            <label htmlFor="">
                                <span className={style.gender}>Male</span>
                                <input className={style.dot} type="radio"/>
                            </label>
                            <label htmlFor="">
                                <span className={style.gender}>Diverse</span>
                                <input className={style.dot} type="radio"/>
                            </label>
                        </div>
                    </div>
                    <div className={style.button}>
                        <input type="submit" value="Sign up"/>
                    </div>
                </form>
            </div>
           
        </div>

        <div className={style.legal_content}>
        <span className="legal-text">&#169; EndoMeet</span>   <a href="#">Contact</a>   <a href="#">Data Protection</a> <a href="#">Cookies</a>
        </div>

      </body>
</div>
  )
}
}
