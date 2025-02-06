
interface buttonStyles{
    changeStyle(color:string): void;
    homeLight: string;
    redLight: string;
    orangeLight: string;
    yellowLight: string;
    blueLight: string;
}

const ButtonPanel = ({changeStyle, homeLight, yellowLight, orangeLight, redLight, blueLight}:buttonStyles) => {

    return (

        <div className="ml-[5vw] flex flex-col gap-4 items-center my-auto row-start-1 col-start-4 mx-auto aspecct-[2/9] w-[16vw] ">
            <div onClick={() => changeStyle("Home")} className={homeLight} ><button className="tv-button">HOME</button></div>
            <div onClick={() => changeStyle("Red")} className={redLight} ><button className="tv-button">ABOUT</button></div>
            <div onClick={() => changeStyle("Orange")} className={orangeLight} ><button className="tv-button">CLUBS</button></div>
            <div onClick={() => changeStyle("Yellow")} className={yellowLight} ><button className="tv-button text-[.65em]">PROJECTS</button></div>
            <div onClick={() => changeStyle("Blue")} className={blueLight} ><button className="tv-button text-[.75em] ">CONTACT</button></div>
        </div>


        


    );
}

export default ButtonPanel;