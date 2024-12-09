import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/884aff1e814b964fb441a189/latest/${currency}.json`
)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data); 
    }, [currency])
    console.log(data);
    return data 
}

export default useCurrencyInfo;