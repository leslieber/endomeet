import Head from 'next/head'
import Image from 'next/image'
import couple from '../images/couple.png'
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
        <title>EndoMeet Register</title>
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
          <div>
            <h1 className={style.welcome}> Welcome to <span>EndoMeet!</span></h1>
            <Image className={style.couple} src={couple} alt="couple"/> 
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
