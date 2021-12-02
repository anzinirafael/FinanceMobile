import { RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import { TouchableOpacity } from 'react-native';

interface Props{
    isActive: boolean
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    align-items: center;
    
`

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    background-color: ${({theme}) => theme.colors.primary};
    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${RFValue(19)}px;
`

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shape};
`

export const Category = styled(TouchableOpacity)<Props>`
    width: 100%;
    flex-direction: row;
    padding: ${RFValue(15)}px;
    align-items: center;
    background-color: ${({theme, isActive}) => isActive ? theme.colors.secondary_light : theme.colors.background};
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: ${RFValue(10)}px;
`

export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(14)}px;
`

export const DivisorListItens = styled.View`
    height: ${RFValue(1)}px;
    width: 100%;
    background-color: ${({theme}) => theme.colors.text};

`

export const Footer = styled.View`
    width: 100%;
    padding: ${RFValue(24)}px;
`

