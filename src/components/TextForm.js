import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercse was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick = ()=>{
        //console.log("Uppercse was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearText = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!","success");
    }
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value)
    }
    const handleCopyText = ()=>{
        console.log("I am copy");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
    const [text,setText] = useState('');
    //text = "new text"; //Wrong way to change the state
    // setText("new text"); // Correct way to change the state
  return (
    <>
    <div className= "container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#1e2d43':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summmary</h1>
        <p>{text.trim().split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}

