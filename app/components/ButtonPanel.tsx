


const ButtonPanel = (props) => {

    return (

        <div className="ml-[5vw] flex flex-col gap-4 items-center my-auto row-start-1 col-start-4 mx-auto aspecct-[2/9] w-[16vw] ">
            <div onClick={() => props.changeStyle("Home")} className={props.homeLight} ><button className="tv-button">HOME</button></div>
            <div onClick={() => props.changeStyle("Red")} className={props.redLight} ><button className="tv-button">ABOUT</button></div>
            <div onClick={() => props.changeStyle("Orange")} className={props.orangeLight} ><button className="tv-button">CLUBS</button></div>
            <div onClick={() => props.changeStyle("Yellow")} className={props.yellowLight} ><button className="tv-button text-[.7em]">PROJECTS</button></div>
            <div onClick={() => props.changeStyle("Blue")} className={props.blueLight} ><button className="tv-button text-[.75em] ">CONTACT</button></div>
        </div>


        


    );
}

export default ButtonPanel;