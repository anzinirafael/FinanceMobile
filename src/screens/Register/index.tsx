import React, {useState} from 'react';
import {Modal} from 'react-native';

import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { SelectCategory } from '../../components/Forms/SelectCategory';
import { Transactions } from '../../components/Forms/Trasanctions';
import { CategorySelect } from '../CategorySelect';
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsButtons} from './style';

export function Register(){
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categria',
    });
    const [selectionButton, setSelectionButton] = useState('');
    const [openModal, setOpenModal] = useState(false);

    function handleSelectionButton(type: 'up' | 'down'){
        setSelectionButton(type)
    }

    function handleCategoryOpenModal(){
        setOpenModal(true)
    }

    function handleCategoryCloseModal(){
        setOpenModal(false)
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
                    <SelectCategory title="Categorias" onPress={handleCategoryOpenModal} />
                </Fields>
                <Button title="Enviar"/>
            </Form>
            <Modal visible={openModal}>
                <CategorySelect         
                category={category}
                setCategory={setCategory}
                closeSelectCategory={handleCategoryCloseModal}
                   />
            </Modal>
        </Container>
    )
}