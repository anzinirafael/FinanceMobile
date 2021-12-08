import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
`

export const Error = styled.Text`
    color: ${({theme}) => theme.colors.attention};
    font: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    margin: ${RFValue(7)}px ${RFValue(0)}px;
`