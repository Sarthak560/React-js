import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setdata] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/280b51f507d398ab0a5c175f/latest/${currency.toUpperCase()}`)
        .then((res) => res.json())
        .then((res) => setdata(res.conversion_rates) )
    }, [currency]);
    return data;
}

export default useCurrencyInfo;