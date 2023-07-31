import React , {useState} from 'react'

export default function Textform(props) {
    
    const [text,setText]=useState('');
    const [word,newword]=useState(0);
    const [chars,spe]=useState(0);
    const upper=()=>{
        setText(text.toUpperCase());   
    }
    const lower=()=>{
        setText(text.toLowerCase());   
    }
    const copied=()=>{
        navigator.clipboard.writeText(text);   
    }
    const clear=()=>{
        setText('')   
        newword(0)
        spe(0)
    }
    const remove=()=>{
        setText(text.replace(/ {2,}/g,' ')) ;
        counts({ target: { value: text.replace(/ {2,}/g, ' ') } }); // Invoke counts with the updated text
    }
    const change=(event)=>{
        setText(event.target.value);
        counts(event)
    }
    const counts = (event) =>{
        let a =event.target.value;  
        let b = a.trim();
        let c = b.split(/\s+/);
        const d = c.filter(word => word !== '');
        if(d===''){
            newword(0);
        }
        else newword(d.length);
        spe(b.length)
    }
    return (
        <div className="container">
            <br />
            <div className="mb-3">
                <h3 className={`${props.modes==='Light'?'text-black':'text-white'}`}>Your Text Here</h3>
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" value={text} onChange={change}></textarea>
            </div>
            <button className="btn btn-primary me-3 mb-2" onClick={upper}>Convert to Uppercase</button>
            <button className="btn btn-primary me-3 mb-2" onClick={lower}>Convert to Lowecase</button>
            <button className="btn btn-primary me-3 mb-2" onClick={copied}>Copy to Clipboard</button>
            <button className="btn btn-primary me-3 mb-2" onClick={clear}>Clear Text</button>
            <button className="btn btn-primary me-3 mb-2" onClick={remove}>Remove whitespaces</button>
            <div id="root" className={`${(props.modes==='Light')?'text-black':'text-white'}`}>
                <br />
                <h3>Your text Summary : </h3><br />
                <p>No. of Words : {word}</p>
                <p>No. of AlphaNumeric Characters : {chars}</p>
            </div>
        </div>
    )
}
