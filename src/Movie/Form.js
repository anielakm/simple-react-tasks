import React from 'react';
import Button from '../components/Button'
import H1 from '../components/H1'
import FormStyle from '../components/Form'

const Form = (props) => {

    const { handleForm, handleCheckbox, isChecked } = props;

    return (<FormStyle onSubmit={handleForm}>
        <H1>Kup bilet na horror roku!</H1>
        <label htmlFor="age" ><input id="age" type="checkbox" checked={isChecked} onChange={handleCheckbox} /> Mam ukończone 16 lat</label>
        <Button>kup bilet</Button>
    </FormStyle>);
}

export default Form;