// only for practice


// function hello(){
//     return []
// }

 import { useEffect, useState } from "react";

 function useCurrencyImfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/884aff1e814b964fb441a189/latest/USD`)
        .then((res) => res.json())
        .then ((res) => setData(res[currency]))
        console.log(data);

    }, [currency])
    console.log(data);
    return data

 }

 export default useCurrencyImfo;


