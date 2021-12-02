import React from 'react';
import { FlatList, TouchableOpacityProps } from 'react-native';
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

interface CategorySelectProps extends TouchableOpacityProps{
    category: Category,
    setCategory: (category: Category) => void,
    closeSelectCategory: () => void,

}

export function CategorySelect({
    category, 
    setCategory, 
    closeSelectCategory,}
    : CategorySelectProps){

    function handleSelectCategoryName(item: Category){
        setCategory(item)
    }    

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
                    <Category onPress={() => handleSelectCategoryName(item)} 
                    isActive={category.key === item.key}>
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
                <Button title="Selecionar" onPress={closeSelectCategory}/>
            </Footer>
        </Container>
    )
}