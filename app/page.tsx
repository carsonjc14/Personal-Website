'use client'

import "./globals.css"

import Image from "next/image";
import {useRef, useState} from 'react';
import {useLockBodyScroll} from 'react-use';
import copy from "copy-to-clipboard";

import ButtonPanel from "./components/ButtonPanel"



export default function Home() {

  useLockBodyScroll(true);
  
  // PDF download function
  const dlPDF = () => {
    const pdfUrl = "./docs/CarsonCooper_resume.pdf"
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CarsonCooper_resume.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyText = (text: string) => {
    copy(text);
  };

  const aboutRef = useRef<HTMLElement | null>(null);
  const involvementRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const homeRef = useRef<HTMLElement | null>(null);
  
  const [homeLight, setHomeLight] = useState("btn-home");
  const [redLight, setRedLight] = useState("btn-holder");
  const [orangeLight, setOrangeLight] = useState("btn-holder");
  const [yellowLight, setYellowLight] = useState("btn-holder");
  const [blueLight, setBlueLight] = useState("btn-holder");
  
  const changeStyle = (color: string) => {
    
    setHomeLight("btn-holder");
    setRedLight("btn-holder");
    setOrangeLight("btn-holder");
    setYellowLight("btn-holder");
    setBlueLight("btn-holder");

    switch (color) {
      case "Red":
        setRedLight("btn-red");
        aboutRef.current?.scrollIntoView({behavior: 'instant'});
        break;
      case "Yellow":
        setYellowLight("btn-yellow");
        projectsRef.current?.scrollIntoView({behavior: 'instant'});
        break;
      case "Orange":
        setOrangeLight("btn-orange");
        involvementRef.current?.scrollIntoView({behavior: 'instant'});
        break;
      case "Blue":
        setBlueLight("btn-blue");
        contactRef.current?.scrollIntoView({behavior: 'instant'});
        break;
      case "Home":
        setHomeLight("btn-home");
        homeRef.current?.scrollIntoView({behavior: 'instant'});
        break;
    }
  }

  return (
    <div>
         
          {/* Home Page */}
          <section ref={homeRef} className=" grid grid-cols-5 bg-gray-800 w-[100vw] h-[100vh] flex">

            {/* Content */}
            <div className="row-start-1 rounded-[125] bg-[var(--background)]  aspect-video w-[70vw] overflow-hidden my-auto ml-[5vw] border border-[var(--stripe-orange)] border-4">
              
              

              {/* Header */}
              <div className="mt-[10vh] ml-6">
                <h1>CARSON COOPER </h1>
                <h2 className="blink-text">Press a button to start </h2>
              </div>
              
              {/* Stripes */}
              <section dir="rtl" className="w-[100vw] rotate-[-15deg] left-[-30]">
              
                <div className="stripe-red w-[120vw] h-6"> </div>                              
                <div className="stripe-orange mt-1 w-[120vw] h-6"> </div>                              
                <div className="stripe-yellow mt-1 w-[120vw] h-6"></div>
                <div className="stripe-blue mt-1 w-[120vw] h-6"></div>

              </section>

            </div>

            <div className="col-start-5 my-auto">
              <ButtonPanel changeStyle={changeStyle} 
              homeLight={homeLight} 
              redLight={redLight}
              orangeLight={orangeLight}
              yellowLight={yellowLight}
              blueLight={blueLight} 
              ></ButtonPanel>
            </div>
        </section>

            

        
      {/* About Page */}
      <section ref={aboutRef} className=" grid grid-cols-5 bg-gray-800 w-[100vw] h-[100vh] flex">
        <div className="row-start-1 justify-items-center rounded-[125] bg-[var(--background)]  aspect-video w-[70vw] overflow-hidden my-auto ml-[5vw] border border-[var(--stripe-orange)] border-4">
           
          <div className="h-full flex items-center">
            <Image src="/images/pol-selfie.png" alt="a selfie of me" className="w-[30%] rotate-[-10deg]" width={500} height={0}/>

            <div className="ml-10">
              <p className="text-[var(--foreground)]">
                Hi, my name's Carson. I'm a senior at UGA studying computer science with plans to graduate in may. 
                In my free time I like to read, exercise, build legos, collect various knick knacks, and learn new things.
              </p>

              <p className="mt-10">
                My favorite thing to code is front-end for websites. I think its the perfect intersection of Computer Science and Creativity.
                I have learned languages and skills such as JavaScript, HTML, CSS/Tailwind, React, and I've taken a web development course at UGA.
                I also have experience in Java, C/C++, MongoDB, and a smattering of python.
              </p>
            </div>

          </div>
          
        </div>


        <div className="col-start-5 my-auto">
              <ButtonPanel changeStyle={changeStyle} 
              homeLight={homeLight} 
              redLight={redLight}
              orangeLight={orangeLight}
              yellowLight={yellowLight}
              blueLight={blueLight} 
              ></ButtonPanel>
            </div>
      </section>



      {/* Involvement Page */}
      <section ref={involvementRef} className=" grid grid-cols-5 bg-gray-800 w-[100vw] h-[100vh] flex">
        <div className="row-start-1 justify-items-center rounded-[125] bg-[var(--background)]  aspect-video w-[70vw] overflow-hidden my-auto ml-[5vw] border border-[var(--stripe-orange)] border-4">
          
          <div className="flex items-center h-full">

            <Image src="/images/pol-redcoats.png" alt="me on the field as a Redcoat" className="w-[35%] rotate-[-15deg] " width={500} height={0}/>
            
            <div className=" mr-6">

              <p className="mb-4 ml-6">
                After taking a two year break from music, I auditioned for the UGA Redcoat Band before my junior year.
                Sdince then, I've been to every home football game, Jacksonville twice with two wins against Florida, Mercedez-Benz Stadium
                three times with an SEC Championship win, Miami to the Orange Bowl, and New Orleans to the Sugar Bowl.
                I made many new friends and
                a lifetime of memories.
              </p>

              
              <p dir="rtl" className="ml-10">
                <a href="https://devdogs.uga.edu" target="_blank">
                <Image src="/images/devdog.png" alt="DevDogs logo" className="w-12" width={100} height={0}/>
                </a>
                

                Recently, I joined DevDogs at UGA, which is a Google Developer Group. I am part of the front-end team
                in a project developing a schedule building website for UGA students. The goal is to provide a feature-rich
                schedule service, tailored to UGA.

                
              </p>


            </div>


          </div>

        </div>
        <div className="col-start-5 my-auto">
              <ButtonPanel changeStyle={changeStyle} 
              homeLight={homeLight} 
              redLight={redLight}
              orangeLight={orangeLight}
              yellowLight={yellowLight}
              blueLight={blueLight} 
              ></ButtonPanel>
            </div>
      </section>

      
      {/* Projects Page */}
      <section ref={projectsRef} className=" grid grid-cols-5 bg-gray-800 w-[100vw] h-[100vh] flex">
        <div className="row-start-1 justify-items-center rounded-[125] bg-[var(--background)]  aspect-video w-[70vw] overflow-hidden my-auto ml-[5vw] border border-[var(--stripe-orange)] border-4">
          About Me
        </div>
        <div className="col-start-5 my-auto">
              <ButtonPanel changeStyle={changeStyle} 
              homeLight={homeLight} 
              redLight={redLight}
              orangeLight={orangeLight}
              yellowLight={yellowLight}
              blueLight={blueLight} 
              ></ButtonPanel>
            </div>
      </section>



      {/* Contact Page */}
      <section ref={contactRef} className=" grid grid-cols-5 bg-gray-800 w-[100vw] h-[100vh] flex">
        <div className="row-start-1 justify-items-center rounded-[125] bg-[var(--background)]  aspect-video w-[70vw] overflow-hidden my-auto ml-[5vw] border border-[var(--stripe-orange)] border-4">
          
          <div className="flex flex-col items-center my-12">

            <h1 className="text-[500%] text-center" >Let's Work Together!</h1>
            
            {/* <section className="flex flex-col mt-20"> */}
              
              <section className="grid grid-cols-2 w-[70%] mt-12"> 
                <div className="flex flex-col items-center col-start-1">
                  <p>School</p>
                  <button onClick={() => copyText("cjc88382@uga.edu")}>cjc88382@uga.edu</button>
                </div>

                <div className="flex flex-col items-center col-start-2">
                  <p>Personal</p>
                  <button onClick={() => copyText("carsoncooper0114@gmail.com")}>carsoncooper0114@gmail.com</button>
                </div>
              </section>
              
              <hr className="mt-4 border border-[var(--foreground)] border-2 border-dotted w-[75%]"></hr>
              
              <div className="mt-4 flex gap-4 row-start-2 col-start-1 col-span-2 items-center justify-center">
                <a href="www.linkedin.com/in/carson-cooper-04a0382ba" target="_blank">
                  LinkedIn</a>
                  |
                <a href="https://www.instagram.com/carson_is_cooper/" target="_blanks">
                  Instagram</a>
              </div>

              <p className="mt-2">My Full Resume</p>
              <button onClick={dlPDF} className="">
                Download PDF
              </button>
              

            {/* </section> */}

          </div>



        </div>
        <div className="col-start-5 my-auto">
              <ButtonPanel changeStyle={changeStyle} 
              homeLight={homeLight} 
              redLight={redLight}
              orangeLight={orangeLight}
              yellowLight={yellowLight}
              blueLight={blueLight} 
              ></ButtonPanel>
            </div>
      </section>

      
    </div>
  );
}
