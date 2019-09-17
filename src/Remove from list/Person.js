import React from 'react';

const Person = (props) => {

    const { data, handleActive } = props;
    return (<>
        <span>{data.name} {data.lastName}</span>
        <button onClick={handleActive.bind(this, `${data.id}`)} >Usuń</button>
    </>);
}

export default Person;