import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.SafeAreaView` 
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
`

export const Header = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;
    height: ${RFPercentage(42)}px;
`

export const UserWarapper = styled.View`
    width: 100%;
    padding: 0 ${RFValue(28)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${getStatusBarHeight() + RFValue(24)}px;
`

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`

export const User = styled.View`
    margin-left: ${RFValue(17)}px;
`

export const UserGreetings = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    

`

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    margin-top: ${RFValue(-5)}px;;
`

export const IconPower = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.secondary};
` 

export const HighLightCards = styled.ScrollView`    
    margin-top: ${RFValue(24)}px;
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(19)}px;
`

export const Transactions = styled.View`
    flex: 1%;
    padding-left: ${RFValue(24)}px;
    padding-right: ${RFValue(24)}px;
    margin-top: ${RFPercentage(12)}px;
`

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    margin-bottom: ${RFValue(16)}px;
`

export const ListTransactions = styled.FlatList`
    
`