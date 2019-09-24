import React from 'react';
import Container from './components/Container'
import Ul from './components/Ul'
import Span from './components/Span'
import { Link } from "react-router-dom";

const Hello = () => {
    return (<> <Container>Witaj na stronie, wybierz z menu jedną z 6-ciu prostych aplikacji napisanych w React.
<br /><br />
        <Ul>
            <li>
                <Link to="/movie"><Span>Movie</Span> - proste ćwiczenie, w którym treść komunikatu jest uzależniona od wartości pola checkbox.</Link>
            </li>
            <li>
                <Link to="/shop"><Span>Shop</Span> - minimalistyczny koszyk aktualizujący stan produktu w sklepie i koszyku.</Link>
            </li>
            <li>
                <Link to="/users"><Span>Users</Span> - filtrowanie listy użytkowników.</Link>
            </li>
            <li>
                <Link to="/exrate"><Span>Exchange&nbsp;Rate&nbsp;Calculator</Span> - kalkulator walutowy (możliwość wyboru róznych dóbr mierzonych różną jednostką).</Link>
            </li>
            <li>
                <Link to="/divination"><Span>Divination&nbsp;Draw</Span> - losowanie / dodawanie wróżby.</Link>
            </li>
            <li>
                <Link to="/list"><Span>List</Span> - lista posiadająca możliwość usuwania elementów.</Link>
            </li>
        </Ul>
    </Container>
    </>);
}

export default Hello;