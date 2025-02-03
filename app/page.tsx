'use client'

import Image from "next/image";
import {useRef} from 'react';

export default function Home() {

  const aboutRef = useRef<HTMLElement | null>(null);
  const involvementRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const otherRef = useRef<HTMLElement | null>(null);

  return (
    <div>

      {/* Splash Page */}
      <div className=" m-1 grid grid-rows-12 grid-cols-[12] gap-x-1 h-[100vh]">

          <div dir="rtl" className="stripe-red rounded-s-lg rounded-t-lg mb-1  col-start-1 row-start-1 col-span-11"></div>
          <div className="top-nav-button text-(foreground) ml-1 col-start-12">
            <button onClick={() => aboutRef.current?.scrollIntoView({behavior: 'smooth'})}
              className="inner">
              About
            </button>
          </div>

          <div dir="rtl" className="stripe-orange rounded-s-lg rounded-t-lg mb-1 ml-1 col-start-2 row-start-2 col-span-9"></div>
          <div className="top-nav-button ml-1 col-start-11">
            <button onClick={() => involvementRef.current?.scrollIntoView({behavior: 'smooth'})}
              className="inner">
              Involvement
            </button>
          </div>

          <div dir="rtl" className="stripe-yellow rounded-s-lg rounded-t-lg mb-1 col-start-3 row-start-3 col-span-7"> </div>
          <div className="top-nav-button ml-1 col-start-10">
            <button onClick={() => contactRef.current?.scrollIntoView({behavior: 'smooth'})}
              className="inner">
              Contact
            </button>
          </div>

          <div dir="rtl" className="stripe-green rounded-s-lg rounded-t-lg mb-1 col-start-4 row-start-4 col-span-5">   </div>
          <div className="top-nav-button ml-1 col-start-9">
            <button onClick={() => projectsRef.current?.scrollIntoView({behavior: 'smooth'})}
              className="inner">
              Projects
            </button>
          </div>

          <div dir="rtl" className="stripe-blue rounded-s-lg rounded-t-lg mb-1 col-start-5 row-start-5 col-span-3"></div>
          <div className="top-nav-button col-start-8">
            
            <button onClick={() => otherRef.current?.scrollIntoView({behavior: 'smooth'})}
              className="inner">
              Other
            </button>
          </div>



          <div className="stripe-red col-start-1 row-start-1 row-span-full w-[2em] rounded-t-xl min-w-3">
          </div>

          <div className="stripe-orange col-start-2 row-start-2 row-span-full w-[2em] rounded-t-xl min-w-3">
          </div>

          <div className="stripe-yellow col-start-3 row-start-3 row-span-full w-[2em] rounded-t-xl min-w-3">
          </div>

          <div className="stripe-green col-start-4 row-start-4 row-span-full w-full max-w-[2em] rounded-t-xl min-w-3">
          </div>

          <div className="stripe-blue col-start-5 row-start-5 row-span-full w-full max-w-[2em] rounded-t-xl min-w-3">
          </div>

          <div className="col-start-6 col-span-6 row-span-4 row-start-7 text-center">
          
            <h1 >
              Carson Cooper
            </h1>
            <h2>
              Hi how are ya
            </h2>
            

          </div>
      </div>

      <section ref={aboutRef} className=" m-1 h-[98vh] border-[1em] border-[var(--stripe-red)] rounded-[2em]">
        About Me
        <img src="images/trial.svg" className=""></img>

        <svg xmlns="http://www.w3.org/2000/svg" height="500" width="500">
          <circle r="120" cx="125" cy="125"/>

          <rect x="25" y="25" height="200" width="2 00" fill="green"/>
        </svg>
      </section>

      <section ref={involvementRef} className=" m-1 h-[98vh] border-[1em] border-[var(--stripe-yellow)] rounded-[2em]">
        About me
      </section>

      <section ref={contactRef} className=" m-1 h-[98vh] border-[1em] border-[var(--stripe-orange)] rounded-[2em]">
        About me
      </section>

      <section ref={projectsRef} className=" m-1 h-[98vh] border-[1em] border-[var(--stripe-green)] rounded-[2em]">
        About me
      </section>

      <section ref={otherRef} className=" m-1 h-[98vh] border-[1em] border-[var(--stripe-blue)] rounded-[2em]">
        About me
      </section>

      
    </div>
  );
}
