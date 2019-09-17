import React from 'react';

const Form = (props) => {

    const { handleForm, handleCheckbox, isChecked } = props;

    return (<form onSubmit={handleForm}>
        <h1>Kup bilet na horror roku!</h1>
        <input id="age" type="checkbox" checked={isChecked} onChange={handleCheckbox} />
        <label htmlFor="age" > Mam ukończone 16 lat</label><br />
        <button>kup bilet</button>
    </form>);
}

export default Form;