import React,{useState} from 'react'

export default function About(props) {
 let myStyle = {
  color: props.mode == 'light'? 'black':'white',
  backgroundColor:props.mode == 'light' ?'white':'rgb(36,74,104)',
  border : '2px solid',
  borderColor : props.mode === 'light' ? 'black':'white'
 }

  return (
    <div className = "my-3 container" ><div className="accordion" id="accordionExample" >
      <h1 style = {{ color: props.mode == 'light'? 'black':'white'}}>About Us</h1>
    <div className="accordion-item" >
      <h2 className="accordion-header">
        <button  style = {myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        
          Analyze your text
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style = {myStyle}>
     TextUtils allows you a way to analyze your text quickly and efficiently . Be it word count, character count etc.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button style = {myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Free to Use
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style = {myStyle}>
          TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word character limit. 
        </div>
      </div>
    </div>
    <div className="accordion-item" >
      <h2 className="accordion-header" >
        <button style = {myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Browser Compatible
        </button>
      </h2>
      <div id="collapseThree"  className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style = {myStyle}>
          This word counter software works in any web browser such as firefox,chrome,internet explorer,safari,opera. It suits to count characters in facebook,blog,books,excel document,pdf document,essays,etc.
        </div>
      </div>
    </div>
  </div>
 
  </div>
  )
}
