import React from 'react';
import Button from '../components/Button'
const Person = (props) => {

    const { data, handleActive } = props;
    return (<>
        <span>{data.name} {data.lastName}</span>
        <Button small onClick={handleActive.bind(this, `${data.id}`)} >x</Button>
    </>);
}

export default Person;