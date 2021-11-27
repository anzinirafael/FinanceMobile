import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.shape};
`

export const Header = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    height: ${RFPercentage(14)};
    align-items: center;
`
export const Title = styled.Text`
    margin-top: ${getStatusBarHeight() + RFValue(37)}px;
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.shape};
`
export const InputName = styled.TextInput`
    margin-top: ${RFValue(24)}px;
    margin-left: ${RFValue(24)}px;
    margin-right: ${RFValue(24)}px;
    width: ${RFValue(327)}px;
    height: ${RFValue(56)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
`
export const InputValue = styled.TextInput`
    margin-top: ${RFValue(8)}px;
    margin-left: ${RFValue(24)}px;
    margin-right: ${RFValue(24)}px;
    margin-bottom: ${RFValue(16)}px;
    width: ${RFValue(327)}px;
    height: ${RFValue(56)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
`
export const Buttons = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: ${RFValue(16)}px;
`
export const Income = styled.View`
    height: ${RFValue(56)}px;
    width: ${RFValue(159)}px;
    border-radius: ${RFValue(5)}px;
    margin-right: ${RFValue(8)}px;  
`
export const IconUp = styled(Feather)`
    margin-left: ${RFValue(12)}px;
    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.success};
`
export const ButtonUpName = styled.Button`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
`
export const Outcome = styled.View`
    height: ${RFValue(56)}px;
    width: ${RFValue(159)}px;
    border-radius: ${RFValue(5)}px;
`
export const IconDown = styled(Feather)`
    font-size: ${RFValue(24)}px;
    margin-left: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.attention};
`
export const ButtonDownName = styled.Button`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
`
export const Category = styled.View`
    justify-content: space-between;
    align-items: center;
`

export const CategoryList = styled.ListView`
    height: ${RFValue(56)}px;
    width: ${RFValue(327)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
`
export const IconBelow = styled(Feather)`
    font-size: ${RFValue(20)}px;

`

export const ButtonCommit = styled.Button`
    height: ${RFValue(56)}px;
    width: ${RFValue(327)}px;
    border-radius: ${RFValue(5)}px;
    background-color: ${({theme}) => theme.colors.secondary};
    margin-top: ${RFValue(259)}px;
`