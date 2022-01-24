import React, { useState } from 'react'
import '../App.css'

export default function TextUtil(props) {

    const ToUpper = () => {
        let uptext = text.toUpperCase();
        setText(uptext);
        props.showalert("Coverted To Uppercase","success")
    }
    const ToLower = () => {
        let uptext = text.toLowerCase();
        setText(uptext);
        props.showalert("Coverted To Lowercase","success")
    }
    const CopyText = () => {
        let box = document.getElementById('TextBox')
        box.select();
        navigator.clipboard.writeText(box.value)
        props.showalert("Copied To Clipboard","success")
    }
    const ClearText = () => {
        let NewText = ""
        setText(NewText)
        props.showalert("Text Cleard","success")
    }
    const RemoveExtraSpace = () => {
        let NewText = text.split(/[ ]+/)
        setText(NewText.join(" "))
        props.showalert("Extra Space Removed","success")

    }


    const Change = (e) => {
        setpre(e.target.value)
        setText(e.target.value)

    }

    const [text, setText] = useState("")
    const [pre, setpre] = useState("Enter Text On Above TextBox To Preview Here")
    return (
        <div className='textutil'>
            <div className="container my-5">
                <form className='p-3'>
                    <h1 className={`text-${props.mode === "light" ? "dark" : "white"}`}>{props.head}</h1>
                    <div className={`form-group p-5`} >

                        <textarea className={`form-control`} style={{ backgroundColor: props.mode === "light" ? "white" : "gray", color: props.mode === "light" ? "black" : "white" }} id="TextBox" rows="10" value={text} onChange={Change}></textarea>
                    </div>
                    <div className="container p-5" >

                        <button className="btn btn-primary" type='button' onClick={ToUpper}>ToUpperCase</button>
                        <button className="btn btn-warning mx-2" type='button' onClick={ToLower}>ToLowerCase</button>
                        <button className="btn btn-dark mx-2" type='button' onClick={CopyText}>CopyText</button>
                        <button className="btn btn-danger mx-2" type='button' onClick={ClearText}>ClearText</button>
                        <button className="btn btn-info mx-2" type='button' onClick={RemoveExtraSpace}>RemoveExtraSpace</button>


                    </div>
                    <div className={`container my-3 text-${props.mode === "light" ? "dark" : "white"}`} >
                        <hr />
                        <h2> <strong> words={text.split(" ").length}</strong> <strong> charachter={text.length}</strong></h2>
                        <h2>Approx reading <strong>time={text.split(" ").length * 0.008}</strong> minutes</h2>
                        <hr />
                        <h1>preview:-</h1>
                        <p style={{color:props.mode==="light"?"black":"white" }}>{pre}</p>
                    </div>
                </form>
            </div>
        </div>
    )

}