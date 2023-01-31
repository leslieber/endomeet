import Head from 'next/head'
import Image from 'next/image'
import couple from '../images/couple.png'
import style from '../styles/layout.module.css'
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';



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
        <title>EndoMeet Login</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <body>

        <Header />

          <div className={style.middle}>
            <div className={style.twocolumnpage}>
           
            <div className={style.logintext}>
              <h1 className={style.loginheader}> EndoMeet!</h1>
              <p>Share your experiences with others.</p>
              <Image className={style.couplelog} src={couple} alt="couple"/>
              
            </div> 

              <div className={style.box} >
                
                <form action="#">
                    
                    <div className={style.userdetails}>
                        
                        <div className={style.inputboxtwo}>
                            <input type="text" placeholder="Username or E-mail address*" required/>
                            <input type="text" placeholder="Password*" required/>
                        </div>
                       
                    </div>

                    <div className={style.loginbuttonalign}>
                        <input className={style.loginbutton} type="submit" value="Log in"/>
                    </div>
                    <div className={style.forgotpw}>
                    <Link href="#">Forgot your password?</Link>
                    </div>
                    
                    <div className={style.createnewacc}>
                    <Link href="../registration">Create a new account</Link> 
                    </div>
                </form>
            </div>
            </div>
            </div>
          

        <Footer/>

      </body>
</div>
  )
}
}
