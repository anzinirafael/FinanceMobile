import styled, {css} from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';

interface TypeProps{
    type: 'up' | 'down' | 'total',
}


export const Container = styled.View<TypeProps>`
    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;
    background-color: ${({theme, type}) =>
    type === 'total' ?  theme.colors.secondary :
    theme.colors.shape};
    margin-right: ${RFValue(16)}px;
    border-radius: ${RFValue(5)}px;
    padding: ${RFValue(19)}px ${RFValue(23)}px;
    padding-bottom: ${RFValue(40)}px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.title};
`

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
    color: ${({theme}) => theme.colors.title};
    ${({type}) => type === 'up' && css`color: ${({theme}) => theme.colors.success}`}
    ${({type}) => type === 'down' && css`color: ${({theme}) => theme.colors.attention}`}
    ${({type}) => type === 'total' && css`color: ${({theme}) => theme.colors.shape}`}
`

export const Footer = styled.View`
    margin-top: ${RFValue(38)}px;
`

export const Amount = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.title};
    font-size: ${RFValue(32)}px;
    margin-bottom: ${RFValue(0)}px;
`

export const LastTransactionDate = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text}; 
    font-size: ${RFValue(12)}px;
    margin-top: ${RFValue(0)}px;
`