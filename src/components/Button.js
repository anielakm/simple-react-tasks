import styled from 'styled-components'
import { theme } from '../assets/theme'

const Button = styled.button`
width:${props => props.round || props.small ? '30px' : null};
height:${props => props.round || props.small ? '30px' : null};
padding:${props => props.round || props.small ? '0' : '6px 12px'};
font-size:${props => props.round ? '20px' : '11px'};
font-weight:${props => props.round ? '800' : '600'};
border: 2px solid ${theme.colors.darkGray};
letter-spacing:2px;
border-radius:25px;
margin:${props => props.small ? '2% ' : '2% 0.5%'};
background-color:${props => props.round ? 'white' : `${theme.colors.darkGray}`};
color:${props => props.round ? 'gray' : 'white'};
text-transform:uppercase;
opacity:${props => props.small ? '0.7' : '1'};
transition: background-color 1s, color 1s;

:hover{

background-color: transparent;
cursor: pointer;
color:gray;

}
:focus{

    outline: none;
}
`;

export default Button;