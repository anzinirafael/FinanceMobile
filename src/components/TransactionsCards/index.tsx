import React from 'react';
import {
    Container,
     Description,
      Header,
       Amount,
        Footer,
        Category,
         Icon,
          CategoryName,
           DateTransaction
        } from './style';

interface Category{
    icon: string,
    name: string,
}

export interface DataProps{title: string,
    amount: string,
    category: Category,
    date: string,
    type: "positive" | "negative"
}

interface Props{
data: DataProps
}

export function TransactionsCards( {
    data
} : Props ){
    return(
        <Container>
            <Header>
                <Description>{data.title}</Description>
                <Amount type={data.type}>{
                data.type === 'negative' ? '- ' + data.amount : data.amount}</Amount>
            </Header>
            <Footer>
                <Category>
                    <Icon name={data.category.icon}/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <DateTransaction>{data.date}</DateTransaction>
            </Footer>
        </Container>
    )
}