import React, { useEffect, useState, useRef} from 'react';

const STATE = {
  LOADING: 'Loading',
  ERROR: 'Error',
  SUCCESS: 'Success'
};

export default function Fetchapi() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState('');
  const cache = useRef({});

  console.log(cache)
  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchData = async () => {
      setStatus(STATE.LOADING);
      try {
        setStatus(STATE.LOADING)
        if(cache.current[query]){
            console.log("Retrieved from cache")
            setResult(cache.current[query])
            setStatus(STATE.SUCCESS);
            return;
        }
        console.log("API CALL")
        const res = await fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`,
            {signal}
        );
        const data = await res.json();
        setResult(data);
        setStatus(STATE.SUCCESS);
        cache.current[query]=data;
      } catch (error) {
        console.log(error.name)
        if(error.name!=="AbortError"){
            setStatus(STATE.ERROR)
        }
      }
    };
    const timerId=setTimeout(fetchData, 1000)
    return ()=>{
        clearTimeout(timerId)
        abortController.abort()
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search keyword"
      />
      {status === STATE.LOADING && <div>Loading...</div>}
      {status === STATE.ERROR && <div>Error...</div>}
      {status === STATE.SUCCESS && (
        <ul>
          {result.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
