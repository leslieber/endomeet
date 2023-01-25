import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/layout.module.css'
import React from 'react';

const EndometriosisForm = () => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    }
  

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
            <form className={style.form}>
                     <h2>Fill out form to be matched</h2>
                     <legend>What is your linkage to endometriosis?</legend>
                     <div>
                        <input 
                        type="radio" 
                        id="family" 
                        name="linkage" 
                        value="family"
                        checked={selectedOption === 'family'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor="family">A family member / friend / acquaintance is or might be affected from endometriosis.</label>
                    </div>
                    <div>
                        <input 
                        type="radio" 
                        id="diagnosis" 
                        name="linkage" 
                        value="diagnosis"
                        checked={selectedOption === 'diagnosis'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor="diagnosis">I have the diagnosis endometriosis.</label>
                    </div>
                    <div>
                        <input 
                        type="radio" 
                        id="might_have" 
                        name="linkage" 
                        value="might_have"
                        checked={selectedOption === 'might_have'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor="might_have">I think I might have endometriosis.</label>
                    </div>
                    <div>
                        <input 
                        type="radio" 
                        id="learn_more" 
                        name="linkage" 
                        value="learn_more"
                        checked={selectedOption === 'learn_more'}
                        onChange={handleOptionChange}
                        />
                        <label htmlFor="learn_more">I personally don’t have a private linkage but would like to learn more about endometriosis.</label>
                    </div>   
            </form>
        </div>

        <div className={style.legal_content}>
        <span className="legal-text">&#169; EndoMeet</span>   <a href="#">Contact</a>   <a href="#">Data Protection</a> <a href="#">Cookies</a>
        </div>

      </body>
</div>
  )
}
}
