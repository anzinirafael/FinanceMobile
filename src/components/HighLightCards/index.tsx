import React from 'react';
import {
    Container,
    Header,
    Title,
    Icon,
    Amount,
    LastTransactionDate,
    Footer
} from './style';
interface PropsCard {
    type: 'up' | 'down' | 'total',
    title: string,
    amount: string,
    lastTransaction: string,
}

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