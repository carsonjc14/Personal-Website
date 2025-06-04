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

  const [showTooltip, setShowTooltip] = useState(false);
  

  const copyText = (text: string) => {
    copy(text);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);

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
    
    setHomeLight("btn-holder border-[var(--stripe-green)]");
    setRedLight("btn-holder border-[var(--stripe-red)]");
    setOrangeLight("btn-holder border-[var(--stripe-orange)]");
    setYellowLight("btn-holder border-[var(--stripe-yellow)]");
    setBlueLight("btn-holder border-[var(--stripe-blue)]");

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
    <div className="grid">
         
          {/* Home Page */}
          <section ref={homeRef} className="relative min-h-[100vh] grid grid-cols-5 bg-gray-800 w-[100vw] h-[100vh] flex">

            {/* Content */}
            <div className="min-h-[400px]  row-start-1 col-span-4 rounded-[125] bg-[var(--background)]  aspect-video w-[100%] overflow-hidden my-auto ml-[5vw]  tv-border">
              
              

              {/* Header */}
              <div className="mt-[10vh] ml-6">
                <h1>CARSON COOPER </h1>
                <h2 className="blink-text">Press a button to start </h2>
              </div>
              
              {/* Stripes */}
              <section dir="rtl" className=" sticky z-[-1] w-[100vw] rotate-[-15deg] left-[-30]">
              
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
      <section ref={aboutRef} className="relative min-h-[100vh] grid grid-cols-5 bg-gray-800 w-[100vw] h-[100vh] flex">
        <div className="min-h-[400px] row-start-1 col-span-4 rounded-[125] bg-[var(--background)]  aspect-video w-[100%] overflow-hidden my-auto ml-[5vw] tv-border">
           
          <div className="h-full flex items-center">
            <Image src="/images/pol-selfie.png" alt="a selfie of me" className="w-[30%] rotate-[-10deg]" width={500} height={0}/>

            <div className="ml-10">
              <p className="text-[var(--foreground)]">
                Hi, my name&apos;s Carson. I&apos;m a senior at UGA studying computer science with plans to graduate in May. 
                In my free time, I like to read, exercise, build legos, collect various knickknacks, and learn new things.
              </p>

              <p className="mt-10">
                My favorite thing to code is front-end for websites. I think it is the perfect intersection of Computer Science and Creativity.
                I have learned languages and skills such as JavaScript, HTML, CSS/Tailwind, and React, and I&apos;ve taken a web development course at UGA.
                I also have experience in Java, C/C++, MongoDB, and a smattering of Python.
              </p>

              <p className="mt-10">
               ! Note: This website is a work-in-progress so I am still updating it and working out some of its quirks. Thanks for visiting!
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
      <section ref={involvementRef} className="justify-center relative min-h-[100vh] grid grid-cols-5 bg-gray-800 w-[100vw] h-[100vh] flex">
        <div className="min-h-[400px] row-start-1 col-span-4 rounded-[125] bg-[var(--background)]  aspect-video w-[100%] overflow-hidden my-auto ml-[5vw]  tv-border">
          
          <div className="flex items-center h-full">

            <Image src="/images/pol-redcoats.png" alt="me on the field as a Redcoat" className="w-[35%] rotate-[-15deg] " width={500} height={0}/>
            
            <div className=" mr-6">

              <p className="mb-4 ml-6">
                After taking a two-year break from music to focus on school, I auditioned for the UGA Redcoat Band before my junior year.
                Since then, I&apos;ve been to every home football game, Jacksonville twice with two wins against Florida, Mercedez-Benz Stadium
                three times with an SEC Championship win, Miami to the Orange Bowl, and New Orleans to the Sugar Bowl.
                I made many new friends and
                a lifetime of memories.
              </p>

              
              <p dir="rtl" className="ml-10">
                <a href="https://devdogs.uga.edu" target="_blank">
                <Image src="/images/devdog.png" alt="DevDogs logo" className="w-12" width={100} height={0}/>
                </a>
                

                Recently, I joined DevDogs at UGA, which is a Google Developer Group. I am part of the front-end team
                in a project developing a schedule-building website for UGA students. The goal is to provide a feature-rich
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
      <section ref={projectsRef} className="overflow-hidden relative min-h-[100vh] grid grid-cols-5 bg-gray-800 w-[100vw] h-[100vh] flex">
        <div className=" min-h-[400px] md:min-h-[200px] row-start-1 col-span-4 rounded-[125] bg-[var(--background)]  aspect-video w-[100%] overflow-hidden my-auto ml-[5vw]  tv-border">
          
          <div className="flex flex-col justify-center mx-10 h-[90%] ">
            <h3 className="text-[var(--stripe-red)]">Pokémon Team Builder - Course: Web Programming</h3>
            <p>
            A CRUD Operations project with an open-ended topic. My team of 3 created a website that allows users
            to create a team of 6 Pokémon like in the games, and the ability to input and customize their
            individual characteristics. The user could then edit and delete their 
            team, or view information about it. The team was saved to the MongoDB database and displayed on 
            the home screen. Front-end implemented with React along with HTML, CSS, and JavaScript. 
            Back-end implemented with Node.js and MongoDB. Team collaboration with git.
            </p>
            <h3 className="mt-[3%] text-blue-900">Cinema E-Booking System - Course: Software Engineering</h3>
            <p>
            A full-stack term project with a scrum-based workflow. My team of 4 built a website that 
            allowed users to book movies, which included picking showtimes and selecting seats. I was 
            responsible for building the seat selection page, among others, which
            required custom components, conditional rendering, and communication between the previous ticket 
            selection page and the next checkout page. Front-end implemented with React, along with HTML,
            CSS, and JavaScript. Team collaboration with git.
            </p>

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



      {/* Contact Page */}
      <section ref={contactRef} className="overflow-hidden relative min-h-[100vh] grid grid-cols-5 bg-gray-800 w-[100vw] h-[100vh] flex">
        <div className="min-h-[400px] row-start-1 col-span-4 rounded-[125] bg-[var(--background)]  aspect-video w-[100%] overflow-hidden my-auto ml-[5vw]  tv-border">
          
          <div className=" flex flex-col justify-space items-center my-[6%]">

            <h1 className="text-[400%] text-center  " >Let&apos;s Work Together!</h1>
            
            {/* <section className="flex flex-col mt-20"> */}
              
              <section className="grid grid-cols-2 w-[70%] mt-[10%]"> 
                <div className="flex flex-col items-center col-start-1">
                  <p className="font-bold">School</p>
                  <button onClick={() => copyText("cjc88382@uga.edu")}><p>cjc88382@uga.edu</p></button>
                </div>

                <div className="flex flex-col items-center col-start-2">
                  <p className="font-bold">Personal</p>
                  <button onClick={() => copyText("carsoncooper0114@gmail.com")}><p>carsoncooper0114@gmail.com</p></button>
                </div>
              </section>

              {showTooltip && (
                <div className="h-14 w-20 text-center absolute z-1 inset-y-[45%] border rounded-xl px-2 border-[var(--stripe-green)] bg-[var(--stripe-green)] ">
                  <p className="text-wrap text-[#efecdb]">copied! :D</p>
                  </div>
              )}
              
              <hr className="mt-[2%] border border-[var(--stripe-blue)] border-2 border-dotted w-[75%]"></hr>
              
              <div className="mt-[2%] flex gap-4 row-start-2 col-start-1 col-span-2 items-center justify-center">
                <a href="https://www.linkedin.com/in/carson-cooper-04a0382ba" target="_blank">
                  <p>LinkedIn</p></a>
                  <p>|</p>
                <a href="https://www.instagram.com/carson_is_cooper/" target="_blanks">
                  <p>Instagram</p></a>
              </div>

              <p className="mt-[2%]">My Full Resume</p>
              <button onClick={dlPDF} className="border rounded-xl px-2 border-[var(--stripe-red)] active:bg-[var(--stripe-red)] active:text-[#efecdb]">
                <p>Download PDF</p>
              </button>
              

            {/* </section> */}

          </div>

          {/* <div className="absolute z-0 w-[100%] h-10 bg-[var(--stripe-red)]">

          </div> */}

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
