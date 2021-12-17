import React, {useState} from 'react';
import {Alert, Keyboard, Modal, TouchableWithoutFeedback} from 'react-native';
import { Control, useForm} from "react-hook-form";
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { SelectCategory } from '../../components/Forms/SelectCategory';
import { Transactions } from '../../components/Forms/Trasanctions';
import { CategorySelect } from '../CategorySelect';
import { InputForm } from '../../components/Forms/InputForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsButtons} from './style';

interface FormData{
    name: string;
    amount: string;
}

const schema = yup.object().shape({
    name: 
    yup.string()
    .required('O nome é obrigatório').min(2, 'O nome deve conter no mínimo duas letras'),
    amount: 
    yup.number()
    .positive('O valor não pode ser negativo')
    .typeError('O valor deve ser do tipo numérico')
    .required('O valor é obrigatório')
  }).required();

export function Register({name, amount} : FormData){
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });
    const [selectionButton, setSelectionButton] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver: yupResolver(schema)});


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
        if (!selectionButton)
        return Alert.alert('Selecione o tipo da transação')
    
        if (category.key === 'category')
            return Alert.alert('Selecione a categoria')

        const data ={
            name: form.name,
            amount: form.amount,
            selectionButton,
            category: category.key
        }
        console.log(data);
    }


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container> 
                <Header>
                    <Title>
                        Cadastro
                    </Title>
                </Header>
                <Form>
                    <Fields>
                        <InputForm error={errors.name && errors.name.message} name="name" control={control} placeholder="Nome" style={{marginBottom: 8}}
                        autoCapitalize="sentences" autoCorrect={false} />
                        <InputForm error={errors.amount && errors.amount.message} name="amount" control={control} placeholder="Preço" keyboardType="numeric" />
                        <TransactionsButtons>
                            <Transactions title="Income" type="up" isActive={selectionButton  === 'up'} onPress={() => handleSelectionButton('up')}/>
                            <Transactions title="Income" type="down" isActive={selectionButton  === 'down'} onPress={() => handleSelectionButton('down')}/>
                        </TransactionsButtons>
                        <SelectCategory title={category.name} onPress={handleCategoryOpenModal} />
                    </Fields>
                    <Button type="submit" title="Enviar" onPress={handleSubmit(handleRegister)}/>
                </Form>
                <Modal visible={openModal}>
                    <CategorySelect         
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCategoryCloseModal}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    )
}