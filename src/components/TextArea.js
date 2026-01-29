import React, {useState} from 'react'
// import PropTypes from 'prop-types';


export default function TextArea( props ) {

    //#region  Util Functions
    const [text, setTextValue] = useState("");
    const [copyTextValue , setCopyTextValue] = useState("Copy Text");

    const showAlert = props.showAlert;
  
    // Util Features
    const onChnageHandler = ( event )=> {
        setTextValue(event.target.value);
    }

    const toUpperCase = ()=>{
        setTextValue(text.toUpperCase());
        showAlert("Text has been converted to uppercase.", "success", 2);


    }

    const toLowerrCase = ()=>{
        setTextValue(text.toLowerCase());
        showAlert("Text has been converted to lowercaase.", "success", 2);

    }

    const toSentenceCase = () => {
        let sentences = text.split(/([.!?]\s*)/);
        let newText = sentences.map(sentence =>{
                        return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLocaleLowerCase()
                        }).join("");
        setTextValue(newText);
        showAlert("Text has been converted to sentence case.", "success", 2);

    };

    const copyyText = () => {
        window.navigator.clipboard.writeText(text);
        setCopyTextValue("Copied!")
        showAlert("Text has been copied to the clipboard.", "success", 2);

        // alert("Text Copied");
        setTimeout(() => {
            setCopyTextValue("Copy Text")
        },700);
    };

    const rmvExtraSpace = () => {
        setTextValue(text.replace(/\s+/g, ' ').trim());
        showAlert("Extra spaces have been removed.", "success", 2);
    };
    
    // Util Summary Values 
    const getSentenceCount = () => {
        if (text.trim().length === 0) return 0;

        let textVal = text.replace(/([.!?])\1+/g, "$1");
        let sentences = textVal.match(/[^.!?]+[.!?]/g);

        return sentences ? sentences.length : 0;
    };

    //#endregion Util


    return (
        <>
            <div className="" style={{color:props.invertMode}}>
                {/* <h2>{props.header}</h2> */}
                <h2 style={{border:"#007bff  solid 1px",background: props.mode === 'dark'? 'black' : ''}}  className="badge-primary px-3 py-1 mt-3">{ text==="" ? 0 :text.split(" ").length } words | {text.length} Characters</h2>
                
                <textarea style={{border:"#007bff  solid 1px", background: props.mode === 'dark'? 'black' : 'white', color: props.mode === 'dark'? 'white' : 'black'}} placeholder='Please Add your text here...' className="form-control" onChange={onChnageHandler} value={text} id="header" rows="8"></textarea>

                <button style={{background: props.mode === 'dark'? 'black' : ''}} type="button"  disabled={text.trim().length === 0} onClick={copyyText} className="btn btn-primary mt-3">{copyTextValue}</button>
                <button style={{background: props.mode === 'dark'? 'black' : ''}} type="button"disabled={text.trim().length === 0}  onClick={toUpperCase} className="mx-2 btn btn-primary mt-3">Upper Case</button>
                <button style={{background: props.mode === 'dark'? 'black' : ''}} type="button"disabled={text.trim().length === 0}  onClick={toLowerrCase} className="mx-2 btn btn-primary mt-3">Lower Case</button>
                <button style={{background: props.mode === 'dark'? 'black' : ''}} type="button"disabled={text.trim().length === 0}  onClick={toSentenceCase} className="mx-2 btn btn-primary mt-3">Sentence Case</button>
                <button style={{background: props.mode === 'dark'? 'black' : ''}} type="button"disabled={text.trim().length === 0}  onClick={rmvExtraSpace} className="mx-2 btn btn-primary mt-3">Remove Extra Spaces</button>
                {/* <button type="button" onClick={toUpperCase} className="btn btn-primary mt-3">Upper Case</button> */}
            </div>

            <div style={{color: props.mode === 'dark'? 'white' : '#002041'}}>
                <h3>Text Summary</h3>
                <p>Word Count : { text==="" ? 0 :text.trim().split(" ").length}</p>
                <p>Character Count : {text.length}</p>
                <p>Sentence Count :{ text==="" ? 0 :getSentenceCount() }</p>
                <p>Paragraphs Count : { text==="" ? 0 : text.trim().split(/\n\s*\n+/).length}</p>
            </div>
        </>
       
    )
}
