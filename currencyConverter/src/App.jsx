import { useState,useEffect } from 'react'
import {InputBox} from './components/comps.js'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {

  const [from,setFrom] = useState("USD");
  const currencyInfo = useCurrencyInfo(from);
  const [ammount,setAmmount] = useState(0);
  const [convertedAmmount,setConvertedAmmount] = useState(0);
  const [to,setTo] = useState("INR");


  const options = Object.keys(currencyInfo);

  const swap = () =>{
    setFrom(to);
    setTo(from);
    setConvertedAmmount(ammount);
    setAmmount(convertedAmmount);
  }

  const convert = () =>{
    setConvertedAmmount(ammount*currencyInfo[to]);
  }

  const bgImage = "https://openexchangerates.org/assets/img/showcase/ddw-currency-converter.png"

  useEffect(()=>{
    convert()
  },[currencyInfo,from,to,ammount])

  return (

    <div 
      className='w-full h-screen flex flex-wrap justify-center
      items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url("https://openexchangerates.org/assets/img/showcase/ddw-currency-converter.png")`
      }}
    >
      <div className='items- text-center'>
        <InputBox
          label={"From"}
          ammount={ammount}
          onAmmountChange={setAmmount}
          selectCurrency={from}
          currencyOptions={options}
          onCurrencyChange={setFrom}
          ammountDisabled={false}
          currencyDisable = {false}
        />
        <button className='px-4 py-2 rounded-md bg-orange-500 text-sky-500'
         onClick={swap}>
          Swap
        </button>
        <InputBox
          label={"To"}
          ammount={convertedAmmount}
          onAmmountChange={setConvertedAmmount}
          selectCurrency={to}
          currencyOptions={options}
          onCurrencyChange={setTo}
          ammountDisabled = {true}
          currencyDisable = {false}
        />
      </div>
    </div>
  )
}

export default App
