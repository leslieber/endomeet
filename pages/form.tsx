import Head from 'next/head'
import Image from 'next/image'
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
        <title> EndoMeet Form</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <body>
        <Header/>

        <div className={style.middle}>
            
                    <form className={style.form}>
                        <div className={style.titleform2}>
                             <h2>Fill out form to be matched</h2>
                        </div>
                     <br/>
                     <legend>What is your linkage to endometriosis?</legend>
                     <div>
                        <input className={style.dot}
                        type="radio" id="family" name="linkage" value="family"
                        />
                        <label htmlFor="family">A family member / friend / acquaintance is or might be affected from endometriosis.</label>
                    </div>
                    <div>
                        <input className={style.dot}
                        type="radio" id="diagnosis" name="linkage" value="diagnosis"
                        />
                        <label htmlFor="diagnosis">I have the diagnosis endometriosis.</label>
                    </div>
                    <div>
                        <input className={style.dot}
                        type="radio" id="might_have" name="linkage" value="might_have"
                        />
                        <label htmlFor="might_have">I think I might have endometriosis.</label>
                    </div>
                    <div>
                        <input className={style.dot}
                        type="radio" id="learn_more" name="linkage" value="learn_more"
                        />
                        <label htmlFor="learn_more">I personally don’t have a private linkage but would like to learn more about endometriosis.</label>
                    </div>   
                     <br/>
                    <legend>For what do you want to use EndoMeet? (Multiple answers possible)</legend>
                     <div>
                        <input className={style.check}
                        type="checkbox" id="help" name="usage" value="help"
                        />
                        <label htmlFor="help">I want to help others who are suffering from endometriosis by sharing my experiences.</label>
                    </div>
                    <div>
                        <input className={style.check}
                        type="checkbox" id="learn" name="usage" value="learn"
                        />
                        <label htmlFor="learn">I am not affected but I want to learn more about endometriosis.</label>
                    </div>
                    <div>
                        <input className={style.check}
                        type="checkbox" id="affected" name="usage" value="affected"
                        />
                        <label htmlFor="affected">I am affected and would like to exchange problems / experiences with others in the same position.</label>
                    </div>
                    <div>
                        <input className={style.check}
                        type="checkbox" id="experiences" name="usage" value="experiences"
                        />
                        <label htmlFor="experiences">I would like to share my experiences with others who want to learn more about endometriosis.</label>
                    </div>   
                    <br/>
                    <legend>With how many different groups do you want to be matched with?</legend>
                     <div>
                        <input className={style.dot}
                        type="radio" id="one" name="groups" value="one"
                        />
                        <label htmlFor="one">Only one other person / one group.</label>
                    </div>
                    <div>
                        <input className={style.dot}
                        type="radio" id="two" name="groups" value="two"
                        />
                        <label htmlFor="two">No more than two groups.</label>
                    </div>
                    <div>
                        <input className={style.dot}
                        type="radio" id="three" name="groups" value="three"
                        />
                        <label htmlFor="three">No more than three groups.</label>
                    </div>
                    <div>
                        <input className={style.dot}
                        type="radio" id="four" name="groups" value="four"
                        />
                        <label htmlFor="four">No more than four groups.</label>
                    </div>   
                    <div>
                        <input className={style.dot}
                        type="radio" id="limit" name="groups" value="limit"
                        />
                        <label htmlFor="limit">I don't have a limit.</label>
                    </div>   
                    <br/>
                    <legend>With how many people do you want to communicate?</legend>
                     <div>
                        <input className={style.dot}
                        type="radio" id="one1" name="people" value="one1"
                        />
                        <label htmlFor="one1">Just one other person.</label>
                    </div>
                    <div>
                        <input className={style.dot}
                        type="radio" id="two2" name="people" value="two2"
                        />
                        <label htmlFor="two2">In a group of three.</label>
                    </div>
                    <div>
                        <input className={style.dot}
                        type="radio" id="three3" name="people" value="three3"
                        />
                        <label htmlFor="three3">In a group of four.</label>
                    </div>
                    <div>
                        <input className={style.dot}
                        type="radio" id="four4" name="people" value="four4"
                        />
                        <label htmlFor="four4">In a group of five.</label>
                    </div>   
                    <div>
                        <input className={style.dot}
                        type="radio" id="preference" name="people" value="preference"
                        />
                        <label htmlFor="preference">I don't have a preference.</label>
                    </div>   
                    <div className={style.registerbuttonalign}>
                        <input className={style.registerbutton} type="submit" value="Submit"/>
                    </div>
            </form>
           
        </div>

    <Footer/>
      
    </body>
</div>
  )
}
}
