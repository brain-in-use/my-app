import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Upper Case was clicked");
        setText(text.toUpperCase());
    }
    const handleLoClick= ()=>{
        // console.log("Lower Case was clicked");
        setText(text.toLowerCase());
    }
    const handleClearClick= ()=>{
       
        setText('');
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
  return (
    <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="MyBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.length!==0 ? text.trim().split(' ').length:0} {text.trim().split(' ').length>1?"words":"words"} and {text.trim().length} characters</p>
        <p>{0.008*text.trim().split(' ').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.substring(0,500)}</p>
    </div>
    </>

  );
}

TextForm.propTypes={heading: PropTypes.string.isRequired}