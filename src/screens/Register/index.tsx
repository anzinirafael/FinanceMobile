import React, {useState} from 'react';
import {Modal} from 'react-native';
import { useForm} from "react-hook-form";
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { SelectCategory } from '../../components/Forms/SelectCategory';
import { Transactions } from '../../components/Forms/Trasanctions';
import { CategorySelect } from '../CategorySelect';
import { InputForm } from '../../components/Forms/InputForm';
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsButtons} from './style';

interface FormData{
    name: string,
    amount: string
}

export function Register({name, amount} : FormData){
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });
    const [selectionButton, setSelectionButton] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const {
        control,
        handleSubmit
    } = useForm();

    function handleSelectionButton(type: 'up' | 'down'){
        setSelectionButton(type)
    }

    function handleCategoryOpenModal(){
        setOpenModal(true)
    }

    function handleCategoryCloseModal(){
        setOpenModal(false)
    }

    function handleRegister(form : FormData){
        const data ={
            name: form.name,
            amount: form.amount,
            selectionButton,
            category: category.key
        }
        console.log(data);
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
                    <InputForm name="name" control={control} placeholder="Nome" style={{marginBottom: 8}}/>
                    <InputForm name="amount" control={control} placeholder="Preço"/>  
                    <TransactionsButtons>
                        <Transactions title="Income" type="up" isActive={selectionButton  === 'up'} onPress={() => handleSelectionButton('up')}/>
                        <Transactions title="Income" type="down" isActive={selectionButton  === 'down'} onPress={() => handleSelectionButton('down')}/>
                    </TransactionsButtons>
                    <SelectCategory title={category.name} onPress={handleCategoryOpenModal} />
                </Fields>
                <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
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