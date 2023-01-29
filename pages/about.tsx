import Head from 'next/head'
import Image from 'next/image'
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
        <title> Test Register</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <body>
        <Header/>

        <div className={style.middle}>
            <div className={style.about} >
                <h1 className={style.abouttitle}>Why <span>EndoMeet!?</span></h1>
            </div>
            <div>
                <div>className={style.aboutbox}</div>
                <div>className={style.aboutbox2}</div>
                <div>className={style.aboutbox3}</div>
            </div>
        </div>

    <Footer/>
      
    </body>
</div>
  )
}
}
