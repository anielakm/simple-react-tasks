import React from 'react';
import Text from '../components/Text'

const Currency = (props) => {

    const { currency, handleCurrency } = props;

    return (<Text>{currency.text}: {handleCurrency} {currency.symbol} <br /></Text>);
}

export default Currency;