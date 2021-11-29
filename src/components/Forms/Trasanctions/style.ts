import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps{
    icon: 'up' | 'down'
}

export const Container = styled(TouchableOpacity)`
    padding: ${RFValue(18)}px ${RFValue(36)}px;
    border-radius: ${RFValue(5)}px;
    background-color: ${({theme}) => theme.colors.shape};
    flex-direction: row;
    align-items: center;
`

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(24)}px;
    color: ${({theme, icon}) =>
    icon === 'up' ?  theme.colors.success :
    theme.colors.attention};
    margin-right: ${RFValue(8)}px;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`