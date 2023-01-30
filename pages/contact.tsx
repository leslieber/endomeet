import Head from 'next/head'
import Image from 'next/image'
import couple from '../images/couple.png'
import style from '../styles/layout.module.css'
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


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
        <title>EndoMeet Contact</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <body>

        <Header />

          <div className={style.middle}>
            <div className={style.twocolumnpage}>
            <div className={style.contacttext}>
              <h1 className={style.header}> We'd Love to Hear From You!</h1>
              <p>Wheter you're courious about features, have general questions, or have a suggestion for improvement. </p>
              <p>We're ready to answer any and all questions.</p>
            </div> 

              <div className={style.box} >
                <div className={style.titleform}>Contact us</div>
                <form action="#">
                    <div className={style.userfullname}>
                        <div className={style.inputbox}>
                            <input type="text" placeholder="First Name*" required/>
                        </div>
                        <div className={style.inputbox}>
                            <input type="text" placeholder="Last Name*" required/>
                        </div>
                    </div>
                    <div className={style.userdetails}>
                        
                        <div className={style.inputboxtwo}>
                            <input type="text" placeholder="E-mail address*" required/>
                        </div>
                       
                    </div>

                    <div className={style.yourmessage}>
                        <label className={style.messagelabel} htmlFor="dob">Your message:</label>
                        <textarea className={style.message} id="message"></textarea>
                    </div>
                                      
                    <div className={style.registerbuttonalign}>
                        <input className={style.registerbutton} type="submit" value="Submit"/>
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
