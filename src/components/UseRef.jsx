import React, {useEffect, useState, useRef} from 'react'

function UseRef() {
    let [name, setName] = useState("");
    let count = useRef(0);
    let ref1 = useRef();
    let ref2 = useRef();
    let ref3 = useRef();
    let ref4 = useRef();
    useEffect(()=>{
        ref1.current.focus();
    }, [])
    useEffect(()=>{ 
        count.current++;
    })
    const handleSubmit = ()=>{
        let otp = ref1.current.value + ref2.current.value + ref3.current.value + ref4.current.value;
        if(otp.length === 4){
            alert(`Entered OTP is ${otp}`);
            ref1.current.value = "";
            ref2.current.value = "";
            ref3.current.value = "";
            ref4.current.value = "";

            ref1.current.focus();
        }
        else{
            alert('Invalid OTP');
            ref1.current.value = "";
            ref2.current.value = "";
            ref3.current.value = "";
            ref4.current.value = "";

            ref1.current.focus();
        }
    }
  return <>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Use Ref</h1>
                </div>
                <div className="row">
                    <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div>
                    <h2>The enetered Name is {name}</h2>
                </div>
                <div>
                    <h2>The count is {count.current}</h2>
                </div>
                <div>
                    <input type="number" ref={ref1} onKeyUp={(e)=>{
                        if(e.key>="0" && e.key<=9){
                            ref2.current.focus();
                        }
                    }}/>
                    <input type="number" ref={ref2} onKeyUp={(e)=>{
                        if(e.key>="0" && e.key<=9){
                            ref3.current.focus();
                        }
                    }}/>
                    <input type="number" ref={ref3} onKeyUp={(e)=>{
                        if(e.key>="0" && e.key<=9){
                            ref4.current.focus();
                        }
                    }}/>
                    <input type="number" ref={ref4} onKeyUp={(e)=>{
                        if(e.key>="0" && e.key<=9){
                            handleSubmit();
                        }
                    }}/>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default UseRef