
import React,{useId} from 'react';

const InputBox = ({
    label,
    ammount=0,
    onAmmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency = "USD",
    ammountDisabled = false,
    currencyDisable = false,
    className = "",
}) => {

    const ammountInputId = useId()


    return(
        <>
        <div className={`bg-white gap-2 p-3 rounded-lg textsm flex ${className}`}>
            <div className="w-3/4">
                <label htmlFor={ammountInputId} className="text-black/40 mb-2 inline-block" >
                    {label}
                </label>
                <input 
                id={ammountInputId}
                className="outline-none w-full px-4 bg-gray-200 py-1.5"
                type="number" 
                value={ammount}
                disabled = {ammountDisabled}
                onChange={(e)=>onAmmountChange && onAmmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/4 flex flex-wrap justify-center text-center">
                <p className="text-black/40 mb-2 inline-block ">
                    Currency Type
                </p>
                <select 
                    className="rounded-lg px-1 py-1.5 w-30 bg-gray-200 cursor-pointer"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}               
                >
                    {
                        currencyOptions.map((curr)=>(
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
        </>
    )
}

export default InputBox;