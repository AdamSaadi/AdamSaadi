import React from "react";
import Foot from "../sure/footer/footer";
import Nav from "../sure/nav/nav";
<<<<<<< HEAD:docs/component/home/home.js
import lo from 'D:/the/src/images/_MG_4743with-colore-corect.png'
import loo from "D:/the/src/images/photoToMe.png"
=======
>>>>>>> ded22d9a94f8f1bbcc0eff78026e9cf78136b0b7:src/component/home/home.js
export default function Home(){
    return(
        <>
        <Nav/>
        <div className="container">
                
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Adam Saadi</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro"> Developer  / Designer</p>
<<<<<<< HEAD:docs/component/home/home.js
            <img src={lo} alt=" Adam Saadi smiling" className="intro__img"></img>
=======
            <img src='./images/_MG_4743with-colore-corect.png' alt=" Adam Saadi smiling" className="intro__img"></img>
>>>>>>> ded22d9a94f8f1bbcc0eff78026e9cf78136b0b7:src/component/home/home.js
        </section>
        <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What we do</h2>
        <div className="services">
            
        <div className="service">
                <h3>Website development</h3>
                <p>
                Full-stack development, I build high quality websites and software tools utilizing different platforms such as React, HTML and Css. 
I customize your website to be fast, reliable and to reflect your preferences.
                     </p>
            </div> 

            <div className="service">
                <h3>Design</h3>
                <p>
                I am a professional website designer, I enjoy putting all my energy, and experience into making great designs and deliver creative ideas.
                </p>
            </div>
            <div className="service">
                <h3>Python development </h3>
                <p>This is one of the most enjoyable parts of my work. I am passionate about math and programming; I have studied advanced course in python and used it to deliver few projects. 
                </p>  
            </div>

        </div> 
        <Customlink href="/Work" className="btn">Our Work</Customlink>
    </section>
    <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about"> Developer / Designer </p>
        
        <div className="about-me__body">
            <p>
            My name is Adam Saadi. I am 16 years old, I have started my learning (and working journey) at a very young age, I am motivated by creative ideas.

I am a pro Python Developer who wants to work and learn. I have completed a wide range of website design courses, I have designed several projects (this website is an example!!).

I am proficient using HTML, CSS, SCSS, JavaScprit, Git, Docker, Linux, React and JSX.

Although I work alone, I have a network of engineers and experts who work with me when I need help.

I speak English, German and Arabic. I enjoy sports (playing and watching), I love photography, reading books.

I love spending time with friends and family, discussing new ideas, I respect environment and work for it.

            </p>
        </div>
        
<<<<<<< HEAD:docs/component/home/home.js
        <img src={loo} alt="Adam leaning against a bus" className="about-me__img"></img>
=======
        <img src="./images/photoToMe.png" alt="Adam leaning against a bus" className="about-me__img"></img>
>>>>>>> ded22d9a94f8f1bbcc0eff78026e9cf78136b0b7:src/component/home/home.js

     </section>
        </div>
      <Foot/>
        </>
    )
}
function Customlink ({href,children, ...props}) {
    const path = window.location.pathname 
  
    return(
      <li className={path === href ? "active" : ""}>
        <a href= {href} {...props}>
          {children}
        </a>
      </li>
    )
  }