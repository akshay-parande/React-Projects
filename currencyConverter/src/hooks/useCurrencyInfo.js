import { useEffect,useState } from "react";


function useCurrencyInfo(currency){

    const [data,setData] = useState({});

    useEffect( () => {

        const fetchData = async()=>{

            try{
                const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
                const result = await res.json();
                setData(result.rates);
            }  catch(err){
                console.log(err.toString());
            }
        }

        fetchData();
    },[currency])



    return data;

}


export default useCurrencyInfo;