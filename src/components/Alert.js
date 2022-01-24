import React from 'react'
import '../App.css'

function Alert(props) {
    const up=(typeword)=>{
        let newword=typeword.charAt(0).toUpperCase()+typeword.slice(1);
        return newword;

    }
    return (

        props.alert &&
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{up(props.alert.type)}</strong> :)  
           {props.alert.msg}   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
       
    )

}

export default Alert
