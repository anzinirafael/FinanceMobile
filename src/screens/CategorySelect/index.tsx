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
    //Função para selecionar de dentro da tela do modal o item da categoria
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
                //Para cada item dentro de categories renderize de acordo com a função
                renderItem={({item }) => (
                    //Componente category, a cada vez que pressionado seleciona o item da categoria
                    <Category onPress={() => handleSelectCategoryName(item)} 
                    //Realiza a comparação da chave de categoria com a chave do item se for a mesma prossegue
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