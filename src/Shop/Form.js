import React from 'react';
import Button from '../components/Button'

const Form = (props) => {

    const { ammountState, handleButton } = props;

    return (<>

        <Button round disabled={ammountState.ammount === 0 ? true : false} id="minus" onClick={handleButton}>-</Button>
        {ammountState.ammount}/{ammountState.maxAmmount}
        <Button round disabled={ammountState.ammount === ammountState.maxAmmount ? true : false} id="plus" onClick={handleButton}>+</Button><br />
        <Button id="buy" disabled={ammountState.maxAmmount === 0 ? true : false} onClick={handleButton}>Kup</Button><br />
        Zakupiono: {ammountState.totalSoldAmmount} <br />
        Ilość dostępnych sztuk: {ammountState.maxAmmount}

    </>);
}

export default Form;