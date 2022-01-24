import '../App.css'

function Foot(props) {
    return(
        <>
            <footer className={`bg-${props.mode}`} >
                <h2  style={{
                    color :props.mode==="light"?"black":"white" }}>{props.foot}</h2>
                <h2  style={{color:props.mode==="light"?"black":"white" }}>date={props.date}</h2>
            </footer>
        </>
    );
    
}

export  default Foot;