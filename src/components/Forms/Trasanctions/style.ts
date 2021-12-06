import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps{
    type: 'up' | 'down',
    isActive: boolean
}

export const Container = styled(TouchableOpacity)<TypeProps>`
    padding: ${RFValue(16)}px;
    border-radius: ${RFValue(5)}px;
    background-color: ${({theme}) => theme.colors.shape};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-width: ${({isActive}) => isActive ? 0 : 1.5}px;
    border-style: solid;
    border-color: ${({theme}) => theme.colors.text};
    width: 48%;
    ${({isActive, type}) => isActive && type ==='down' && css`
        background-color: ${({theme}) => theme.colors.attention_light};
    `};
    ${({isActive, type}) => isActive && type ==='up' && css`
        background-color: ${({theme}) => theme.colors.success_light};
    `};
 `

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(24)}px;
    color: ${({theme, type}) => type === 'up' ? theme.colors.success : theme.colors.attention};
    margin-right: ${RFValue(8)}px;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`