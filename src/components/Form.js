import styled from 'styled-components'
import { theme } from '../assets/theme'

const Form = styled.form`
margin:5px 0;
color:gray;

label{
    line-height:20px;
    font-size:16px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:400;
    letter-spacing:1px;

    input{
    margin: 0 1%;
    vertical-align:middle;
   
}
}

`;

export default Form;