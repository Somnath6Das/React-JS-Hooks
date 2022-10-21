import React from 'react';
import useFetch from '../hooks/useFetch';

const User = () => {

const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users', {});

if(loading) {
    return <h1>Loading...</h1>
}

if(error) {
    return <h1>error</h1>
}

  return (
    <div>
        <h1>Fetch Hook Example</h1>
        {data.map( getData => (
            <h3 key={ getData.id}>{getData.name}<br></br>{getData.email}</h3>
        ))}
    </div>
  )
}

export default User