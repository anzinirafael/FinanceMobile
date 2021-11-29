import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps{
    type: 'up' | 'down'
}

export const Container = styled(TouchableOpacity)`
    width: 100%;
    padding: ${RFValue(18)}px ${RFValue(36)}px;
    border-radius: ${RFValue(5)}px;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({theme, type}) =>
    type === 'up' ?  theme.colors.success :
    theme.colors.attention};
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`