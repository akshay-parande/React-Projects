import { useState, useCallback, useEffect } from 'react'

function App() {

  const[password,setPassword] = useState("");
  const[numAllow,setNumAllow] = useState(false);
  const[speChar,setSpeChar] = useState(false);
  const[len,setLen] = useState(8);


  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(speChar) str+="~`!@#$%^&*()_+-={}[]:;<>,/|₹";
    if(numAllow) str+="1234567890";

    for(let i =0;i<len;i++){
      let char = Math.floor(Math.random()*str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[len,speChar,numAllow,setPassword]);

  const copyPass = () =>{

    window.navigator.clipboard.writeText(password);
  }


  useEffect(()=>{
    generatePassword();
  },[generatePassword,numAllow,speChar,len])

  return (
    <>
      <div className='w-full max-w-2xl mx-auto shadow-md 
      rounded-lg px-4 py-3 my-8 text-amber-200 bg-gray-600'>

        <h1 className='text-center text-white my-2'>Password Generator</h1>

        <div className='flex shadow rounded-lg
        overflow-hidden mb-4'>

          <input type="text" 
          value={password}
          className='w-full outline-none text-amber-950 bg-gray-300 py-1 px-3'
          placeholder='password'
          readOnly/>

          <button className='w-20 bg-red-400 py-px text-cyan-400  hover:bg-red-300 '
          onClick={copyPass}>Copy</button>

        </div>

        <div className='flex items-center text-sm mx-10 gap-x-5'>

          <div className='flex items-center gap-x-1'>

            <input type="range"
            min={8}
            max={32}
            value={len}
            className='cursor-pointer'
            onChange={(n)=>setLen(n.target.value)}
            />
            <label htmlFor="len">Length : {len}</label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input type="checkbox" name="intAllow"
            defaultChecked={numAllow}
            onChange={()=>{
              setNumAllow((prev)=>!prev)
            }}/>
            <label htmlFor="intAllow">Allow Integer</label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input type="checkbox" name='specialCharAllow'
            defaultChecked={speChar}
            onChange={()=>{
              setSpeChar((prev)=>!prev)
            }}/>
            <label htmlFor="specialCharAllow">Allow Special Character</label>
          </div>
          
        </div>
      </div> 
    </>
  )
}

export default App



// 0.001 * 50 podcast books speaks
