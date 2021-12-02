import React from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../Utils/categories';
import {
    Container,
    Header,
    Title,
    Category, 
    Icon,
    Name,
    DivisorListItens,
    Footer,
} from './style';
import {Button} from './../../components/Forms/Button';

interface Category{
    key: string,
    name: string
}

interface CategorySelectProps{
    category: Category,
    setCategory: (category: Category) => void,
    closeSelectCategory: () => void,
}

export function CategorySelect({
    category, 
    setCategory, 
    closeSelectCategory}
    : CategorySelectProps){
    return(
        <Container> 
            <Header>
                <Title>
                    Categoria
                </Title>
            </Header>
            <FlatList 
                data={categories}
                style={{flex: 1, width: '100%'}}
                keyExtractor={(item) => item.key}
                renderItem={({item }) => (
                    <Category>
                        <Icon name={item.icon} />
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={ 
                    () =>
                    <DivisorListItens />
                }
            />
            <Footer>
                <Button title="Selecionar"/>
            </Footer>
        </Container>
    )
}