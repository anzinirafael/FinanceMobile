import styled, {css} from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';



interface Props{
    type: 'positive' | 'negative'
}

export const Container = styled.View`
    width: 100%;
    padding: ${RFValue(17)}px ${RFValue(24)}px;
    border-radius: ${RFValue(5)}px;
    margin-bottom: ${RFValue(16)}px;
`   

export const Header = styled.View`
 
`

export const Description = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
`

export const Amount = styled.Text<Props>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color: ${({theme, type}) => type === "positive" ? theme.colors.success : theme.colors.attention};
    margin-bottom: ${RFValue(20)}px;
    margin-top: ${RFValue(2)}px;
`

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Category = styled.View`
    flex-direction: row;

`

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
`

export const CategoryName = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    padding-left: ${RFValue(17)}px;

`

export const DateTransaction = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
`