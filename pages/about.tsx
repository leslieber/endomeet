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
        <title>About EndoMeet </title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <body>
        <Header/>

        <div className={style.middle}>
            <div className={style.about}>
                  <h1 className={style.abouttitle}>Why <span>EndoMeet!?</span></h1>
                  <p><span>EndoMeet!</span> is an exchanging platform that matches people affected by endometriosis in any form <br/> into groups for exchanging experiences, getting tips and for those affected to feel beeter understood. </p>
                <div className={style.aboutboxes}>
                    <div className={style.aboutbox}>
                    <p>For people with endometriosis. </p>
                    </div>
                    <div className={style.aboutbox}>
                      <p>For people who might have endometriosis.</p>
                    </div>
                    <div className={style.aboutbox}>
                      <p>For surrounding to understand endometriosis.</p>
                    </div>
                </div>
                  <br/>
                  <br/>
                  <br/>

                <div className={style.abouttreatment}>
                  <h1 className={style.abouttitle2}><span>General Information about Endometriosis</span></h1>
                  <h2 className={style.abouttitle2}>What is Endometriosis?</h2>
                    <p>Endometriosis is a medical condition that affects women in their reproductive years. 
                      It occurs when the tissue that normally lines the inside of the uterus (endometrium) grows outside of it, 
                      on other organs such as the ovaries, fallopian tubes, or tissue lining the pelvis. This misplaced tissue continues to act as it normally would — 
                      thickening, breaking down, and bleeding with each menstrual cycle. 
                      However, because it has no way to exit the body, it becomes trapped, causing inflammation, pain, and the formation of scar tissue. 
                      This can lead to various symptoms such as severe menstrual cramps, painful sexual intercourse, bloating, and bowel and bladder issues, as well as potential infertility. 
                      Endometriosis affects approximately 1 in 10 women of reproductive age, and is often misdiagnosed or underdiagnosed due to its wide range of symptoms.</p>
                </div>
                  <br/>
                  <br/>
                <div className={style.abouttreatment}>
                  <h2 className={style.abouttitle2}>Treatment Options</h2>
                      <p>Treatment options for endometriosis aim to relieve pain, improve quality of life, as well as manage fertility if desired. Some common treatment options include:
                      <br/>
                      <br/>
                      <span>Medication:</span> Over-the-counter pain relievers and anti-inflammatory drugs can help relieve menstrual cramps and pain. Hormonal therapies such as birth control pills, patches, or intrauterine devices (IUDs) can reduce the growth of endometrial tissue and regulate menstrual cycles. GnRH (gonadotropin-releasing hormone) agonists can temporarily halt menstrual cycles and reduce endometrial growth.
                      <br/>
                      <br/>
                      <span>Surgery:</span> Laparoscopic surgery can remove the visible endometrial tissue, relieve pain, and improve fertility. This is often done as a minimally invasive procedure. In severe cases, more extensive surgery such as a hysterectomy may be necessary.
                      <br/>
                      <br/>
                      <span>Complementary therapies:</span> Some women may find relief from complementary therapies such as acupuncture, massage, or physical therapy.
                      The choice of treatment will depend on the severity of the symptoms, individual medical history and desired future fertility. It is important to discuss all options with a healthcare provider to determine the best plan for each individual case.</p>
                </div>
                <div className={style.abouttreatment}>
                  <h2 className={style.abouttitle2}>Useful Links</h2>
                      <p>Here are some websites that can provide you with more information about endometriosis:
                      <br/>
                      <br/>
                      <Link href="https://www.acog.org/patient-resources/faqs/gynecologic-problems/endometriosis"> <span> American College of Obstetricians and Gynecologists (ACOG): </span> https://www.acog.org/patient-resources/faqs/gynecologic-problems/endometriosis</Link>
                      <br/>
                      <br/>
                      <Link href="https://www.endofound.org/endometriosis"> <span> Endometriosis Foundation of America: </span> https://www.endofound.org/endometriosis</Link>
                      <br/>
                      <br/>
                      <Link href="https://www.womenshealth.gov/a-z-topics/endometriosis"> <span> Office on Women's Health, U.S. Department of Health and Human Services: </span> https://www.womenshealth.gov/a-z-topics/endometriosis</Link>
                      <br/>
                      <br/>
                      These resources offer a wealth of information on endometriosis, including symptoms, causes, diagnosis, treatment options, and support resources.</p>
                </div>
                <div className={style.createnewacc}>
                    <Link href="../registration">Create a new account</Link> 
                    </div>
            </div>
        </div>

    <Footer/>
    
    </body>
</div>
  )
}
}
