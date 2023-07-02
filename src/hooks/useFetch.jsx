import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(()=>{
          fetch(url)
        .then(res=>{
          if(!res.ok)
          {
            throw Error('Couldn not fetch the data for that resource!');
          }
          return res.json();
        })
        .then(data=>{
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(error =>{
          if(error.name == 'AbortError')
          {
            console.log("fetch Aborted!");
          }
          else
          {
            setIsPending(false);
            setError(error.message);
          }
          
          // console.log(error.message);
        })
        }, 1000);
        return ()=> abortCont.abort();
      }, [url]) 
    return{data, error, isPending};
}
export default useFetch;