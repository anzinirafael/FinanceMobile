import React from 'react';
import {
    Container,
    Header,
    Title,
    InputName,
    InputValue,
    Buttons,
    Income,
    IconUp,
    ButtonUpName,
    Outcome,
    IconDown,
    ButtonDownName,
    CategoryList,
    IconBelow,
    Category
} from './style';

export function Register(){
    return(
        <Container>
            <Header>
                <Title></Title>
            </Header>
            <InputName placeholder="Nome"/>
            <InputValue placeholder="Preço"/>
            <Buttons>
                <Income>
                    <IconUp></IconUp>
                    <ButtonUpName />
                </Income>
                <Outcome>
                    <IconDown></IconDown>
                    <ButtonDownName />
                </Outcome>
            </Buttons>
            <Category>
                <CategoryList >
                    <IconBelow />  
                </CategoryList>
            </Category>
            <ButtonCommit />
        </Container>
    )
}