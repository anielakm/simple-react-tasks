import React from 'react';

const User = (props) => {
    const { data } = props;

    return (<>
        <h2>Imię: {data.name}</h2>
        <p>Wiek: {data.age}</p>
    </>);
}

export default User;