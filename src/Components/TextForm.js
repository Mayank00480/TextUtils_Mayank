import React,{useState} from 'react'
import './TextForm.css'
const TextForm = (prop) => {
    const[text, setText]= useState(" ");
    const handleUButton = () => {
        const newText = text.toUpperCase();
        setText(newText);
        prop.showAlert(": Converted to Upper Case","success")
    }
    const handleLButton = () => {
      const newText = text.toLowerCase();
      setText(newText);
    text && prop.showAlert(": Converted to Lower Case","success")
  }
  const handleClear = () => {
    const newText = '';
    setText(newText);
    prop.showAlert(": Text Cleared","success")
}
const handleCopy = () =>{
  const newText = document.getElementById('TextArea');
  newText.select();
  navigator.clipboard.writeText(newText.value);
  alert("Text Copied to clipboard");
  prop.showAlert(": Copied to clipboard","success")
}
const handleSpace = () =>{
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "))
  prop.showAlert(": Spaces Removed","success")
}
  return (
    <>
  <div  style = {{color : prop.mode === 'light' ? 'black':'white'}}>
    <h1 className="form-label " >Enter your Text Here</h1>
    <textarea className="form-control"style = {{backgroundColor : prop.mode === 'light' ? 'white':'#042743',color : prop.mode === 'light' ? 'black':'white'}} value = {text} id="TextArea" rows="8" onChange={(e) => {setText(e.target.value)}}></textarea>
    <button disabled ={text.length === 0} className = "first" onClick={handleUButton}>UpperCase</button>
    <button   disabled ={text.length === 0}  className = "first "onClick={handleLButton}>LowerCase</button>
    <button  disabled ={text.length === 0}   className = "first "onClick={handleClear}>clear</button>
    <button  disabled ={text.length === 0}   className = "first "onClick={handleCopy}>copy</button>
    <button  disabled ={text.length === 0}  className = "first "onClick={handleSpace}>RemoveExtraSpaces</button>
  </div>
  <div  style = {{marginTop: '15px',color : prop.mode === 'light' ? 'black':'white'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes to read</p>
    <h1>Preview</h1>
    <p>{text}</p> 
  </div>
  </>
  )
}

export default TextForm