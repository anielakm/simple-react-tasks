import React from 'react';

const Form = (props) => {

    const { ammountState, handleButton } = props;

    return (<>

        <button disabled={ammountState.ammount === 0 ? true : false} id="minus" onClick={handleButton}>-</button>
        {ammountState.ammount}/{ammountState.maxAmmount}
        <button disabled={ammountState.ammount === ammountState.maxAmmount ? true : false} id="plus" onClick={handleButton}>+</button><br />
        <button id="buy" disabled={ammountState.maxAmmount === 0 ? true : false} onClick={handleButton}>Kup</button><br />
        Zakupiono: {ammountState.totalSoldAmmount} <br />
        Ilość dostępnych sztuk: {ammountState.maxAmmount}

    </>);
}

export default Form;