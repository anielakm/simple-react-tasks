import styled from 'styled-components'
import { theme } from '../assets/theme'

const Ul = styled.ul`

list-style:none;

li{
padding:2%;
margin: 2px 0;
background-color: rgba(0,0,0,0.05);

a{
    text-decoration:none;
    color: gray;
}
}
`

export default Ul;