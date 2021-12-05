//Importação da biblioteca responsável pela responsividade de acordo com a densidade de pixels
import { RFValue } from 'react-native-responsive-fontsize';
//Importando a estilização styled e a estilização css de dentro da biblioteca styled-components/native
import styled, {css} from 'styled-components/native';
//Importando o tipo de icones Feather de dentro da bilbioteca @expo/vector-icons
import {Feather} from '@expo/vector-icons';
//Importando de dentro do tema global da aplicação o thema
import theme from '../../global/styles/theme';
//Importando o botão com opacidade por toque para corrigir um erro de tipagem
import { TouchableOpacity } from 'react-native';
//Criando a typagem para realizar operações condicionais dentro do styled
interface Props{
    //Criando um tipo booleano ' verdadeiro ' ou ' falso '
    isActive: boolean
}
//Exportando a constante pai que será igual a uma View com a estilização do tipo styled
export const Container = styled.View`
    //O flex de um irá utilizar todo o frame da tela
    flex: 1;
    //Definação da cor de fundo da interface, a cor previamente definida no escopo de variavéis em ton de cinza claro
    background-color: ${({theme}) => theme.colors.background};
    //Alinhamento dos itens dentro do container no eixo vertical
    align-items: center;
`

//Exportando a constante cabeçalho que será igual a uma View com uma estilização do tipo styled
export const Header = styled.View`
    //O cabeçalho ocupará uma largura de 100% do frame disponível
    width: 100%;
    //O cabeçalho terá uma altura de 113px considerando a variação de densidade de pixel de cada smartphone
    height: ${RFValue(113)}px;
    //A cor de fundo do cabeçalho será do tipo primaria, uma cor azulada
    background-color: ${({theme}) => theme.colors.primary};
    //Os elementos de dentro do cabeçalho serão alinhados ao centro no eixo vertical
    align-items: center;
    //Os elementos dentro do cabeçalho serão alinhados ao final do eixo horizontal
    justify-content: flex-end;
    //Haverá um espaçamento interno de 19px considerando a densidade de pixels para todos os lados
    padding-bottom: ${RFValue(19)}px;
`
//Exportando a constante do titulo da interface que será igual há um componente de Texto com estilização do tipo styled
export const Title = styled.Text`
    //A familia da fonte será uma fonte da familia Poppins com um peso de 500
    font-family: ${({theme}) => theme.fonts.medium};
    //A fonte terá um tamanho de 18px considerando a densidade de pixel da acordo com o smartphone
    font-size: ${RFValue(18)}px;
    //A cor do texto será uma cor branca que irá se destacar dentro do titulo com tons azulados
    color: ${({theme}) => theme.colors.shape};
`
//Exportando a constante de categoria que será do tipo botão com opacidade por toque e recebrá um estilo do tipo styled e tipagem da interface Props
export const Category = styled(TouchableOpacity)<Props>`
    //O componente de categoria ocupará todo o tamanho do frama disponível no eixo horizontal
    width: 100%;
    //Os componentes de dentro do elemento pai categoria serão direcionados em forma de colunas um ao lado do outro
    flex-direction: row;
    //O espaçamento interno dos elementos filhos do componente categoria terão um preencimento interno para todos os lados de 15px de acordo com a Densidade de pixel
    padding: ${RFValue(15)}px;
    //Os elementos filhos do componente categoria terão uma alinhamento no eixo vertical ao centro do componente
    align-items: center;
    //A cor de fundo do componente categoria será aplicada um tom de azul claro se a condição for verdadeira senão será aplicada a cor de fundo cinza claro
    background-color: ${({theme, isActive}) => isActive ? theme.colors.secondary_light : theme.colors.background};
`
//Exportanto a constante do tipo icone que será igual a icones Feather com estilização do tipo styled
export const Icon = styled(Feather)`
    //O icone terá uma tamnho de 20px considerando a densidade de pixel de cada smartphone
    font-size: ${RFValue(20)}px;
    //O iconte terá uma margem a direita de 10px de acordo com a densidade de pixel
    margin-right: ${RFValue(10)}px;
`
//Exportando a constante do tipo nome que será um componente do tipo texto com estilização do tipo styled
export const Name = styled.Text`
    //A fonte será da familia Poppins com um peso de 400
    font-family: ${({theme}) => theme.fonts.regular};
    //A cor do texto será um ton escuro
    color: ${({theme}) => theme.colors.title};
    //O tamanho da fonte do texto será de 14px considerando a densidade de pixel do smartphone
    font-size: ${RFValue(14)}px;
`
//Exportando a constante de divisor de itens da lista que será uma View com uma estilização do tipo styled
export const DivisorListItens = styled.View`
    //Possuirá uma altura de 1px considerando a densidade de pixel de cada smartphone
    height: ${RFValue(1)}px;
    //Ocupará um tamanho de 100% do eixo horizontal do frame
    width: 100%;
    //A cor de fundo será um ton de ecuro
    background-color: ${({theme}) => theme.colors.title};

`
//Exportando a constante do rodapé que será igual há um componente View e terá um estilo do tipo styled
export const Footer = styled.View`
    //O rodapé ocupará uma largura de 100% do eixo vertical do frama
    width: 100%;
    //O rodapé terá um preenchimento interno de 24px considerando a densidade de pixels
    padding: ${RFValue(24)}px;
`

