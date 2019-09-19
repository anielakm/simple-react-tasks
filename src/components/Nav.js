import styled from 'styled-components'

const Nav = styled.nav`
ul{

    display:flex;
    align-items:center;
    justify-content:center;
    background-color:rgba(255,255,255, 0.8);
    margin-bottom:2%;
    
    li{

    list-style:none;
    padding: 1%;
       
        a{
            color:grey;
            text-decoration:none;
            letter-spacing:1px;
            font-weight:400;
        } 
    }
}
`

export default Nav;