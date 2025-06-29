import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLenght] = useState(6);
  const[numberAllowed, setNumAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] =useState("");
  const passRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="1234567890"
    if(charAllowed) str+="!@#$%^&*()_+=?<>?;:"
    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass+= str.charAt(char)
    }

    setPassword(pass)
  }, [length,numberAllowed, charAllowed , setPassword])

  useEffect(()=>{
    passwordGenerator();
  }, [length,numberAllowed, charAllowed, passwordGenerator])

  const copyPasteToClipboard = useCallback(()=>{
    passRef.current?.select() // set the select effect on password
    passRef.current?.setSelectionRange(0,5) 
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700'>
        <h1 className='text-center text-white font-bold my-3 pt-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 pb-2'>
          <input type="text" className='outline-none w-full py-1 px-3' placeholder='Password' value={password} readOnly ref={passRef} /> 
          <button onClick ={ copyPasteToClipboard} className='outline-none text-white px-4 py-0.5 shrink-0 bg-blue-700'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-3 pb-3'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={20} className='cursor-pointer' onChange={(e) => {setLenght(e.target.value)}}/>
            <label > Lenght: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" onChange={() =>{setCharAllowed((prev) => !prev);}} id="characterInput" defaultChecked = {charAllowed} />
            <label className='text-center'>Character</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" onChange={() =>{setNumAllowed((prev) => !prev);}} id="integerInput" defaultChecked = {numberAllowed} />
            <label>Numbers</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
