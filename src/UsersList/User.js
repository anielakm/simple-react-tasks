import React from 'react';
import H2 from '../components/H2'
import Text from '../components/Text'

const User = (props) => {
    const { data } = props;

    return (<>
        <H2>Imię: {data.name}</H2>
        <Text>Wiek: {data.age}</Text>
    </>);
}

export default User;