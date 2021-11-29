import React from 'react';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import {
    Container,
    Header,
    Title,
    Form
} from './style';

export function Register(){
    return(
        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>
            <Form>
                <Input placeholder="Nome" style={{marginBottom: 8}}/>
                <Input placeholder="Preço"/>  
                <Button />
            </Form>                    
        </Container>
    )
}