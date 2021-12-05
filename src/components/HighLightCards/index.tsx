import React from 'react';
import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransactionDate
} from './style';

interface PropsCard {
    //Tipo dos icones presentes nas HighlightCards
    type: 'up' | 'down' | 'total',
    title: string,
    amount: string,
    lastTransaction: string,
}

//Nome dos icones  de acordo com o tipo
const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
    total: "dollar-sign"
}

export function HighLightCard({ 
    type,
    title,
     amount,
      lastTransaction}
       : PropsCard){
    return(
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                <Icon name={icon[type]} type={type}></Icon>
            </Header>
            <Footer>    
                <Amount type={type}>{amount}</Amount>
                <LastTransactionDate type={type}>{lastTransaction}</LastTransactionDate>
            </Footer>
        </Container>
    )
}