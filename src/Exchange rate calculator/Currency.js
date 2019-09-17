import React from 'react';

const Currency = (props) => {

    const { currency, handleCurrency } = props;

    return (<>{currency.text}: {handleCurrency} {currency.symbol} <br /></>);
}

export default Currency;