import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    flex: 1;
    width: 100%;
`

export const Header = styled.View`
    height: ${RFValue(113)}px;
    background-color: ${({theme}) => theme.colors.primary};
    align-items: center;
    width: 100%;
`

export const Title = styled.Text`
    margin-top: ${getStatusBarHeight() + RFValue(32)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shape};
`

export const Form = styled.View`
    flex: 1;
    margin: ${RFValue(24)}px;
    justify-content: space-between;
`

export const Fields = styled.View`

`

export const TransactionsButtons = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`