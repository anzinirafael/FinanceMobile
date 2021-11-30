import React, {useState} from 'react';
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
    const [selectionButton, setSelectionButton] = useState('');

    function handleSelectionButton(type: 'up' | 'down'){
        setSelectionButton(type)
    }
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
                        <Transactions title="Income" type="up" isActive={selectionButton  === 'up'} onPress={() => handleSelectionButton('up')}/>
                        <Transactions title="Income" type="down" isActive={selectionButton  === 'down'} onPress={() => handleSelectionButton('down')}/>
                        
                    </TransactionsButtons>
                </Fields>
                <Button title="Enviar"/>
            </Form>                    
        </Container>
    )
}