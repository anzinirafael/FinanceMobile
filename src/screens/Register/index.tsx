import React from 'react';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { Transactions } from '../../components/Forms/Trasanctions';
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsButtons} from './style';

export function Register(){
    return(
        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>
            <Form>
                <Fields>
                    <Input placeholder="Nome" style={{marginBottom: 8}}/>
                    <Input placeholder="Preço"/>  
                    <TransactionsButtons>
                        <Transactions title="Income" icon="up"/>
                        <Transactions title="Outcome" icon="down"/>
                    </TransactionsButtons>
                </Fields>
                <Button title="Enviar"/>
            </Form>                    
        </Container>
    )
}