import React, { useState } from 'react'


export default function TextForm(props) {

    let mystyle={
        color: props.mode==='dark'?'white':'black'
    }

    let handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into UpperCase",'success')
    }
    
    let handleDoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into LowerCase",'success')
    }
    
    let handleClearText = () => {
        let newText = " ";
        setText(newText);
        props.showAlert("Converted into Clear text",'success')
    }
    
    const handleExtraSpaces = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("It's removed the ExtraSpace text",'success')
    }
    const handleCopyText = ()=>{
        let text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    let handleOnchange = (event) => {
        setText(event.target.value);

    }

    const [text, setText] = useState("");
    return (
        <>
            <div >
                <h3  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h3>
                <div className="mb-3">
                    {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? '#f0e5dc' : 'white', border : props.mode==='light'?'2px solid black':''}} onChange={handleOnchange} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-2" onClick={handleUpClick} >Convert to Uppercase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleDoClick} >Convert to Lowercase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces} >Remove Extra Space</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleClearText} >Clear the text</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleCopyText} >Copy Text</button>
                </div>
            </div>
            <div className="container" style={mystyle} >
            <h3 >Your Text Summary</h3>
            <p>Words are {text.split(" ").filter((element)=>{ return element.length!==0;}).length} and Character are {text.length}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:<strong style={{fontFamily: 'Abril Fatface'}}>Enter the Text</strong>}</p>
            </div>
        </>
    )
}
