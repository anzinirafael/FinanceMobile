import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled(RectButton)`   
    background-color: ${({theme}) => theme.colors.shape};
    width: 100%;
    padding: ${RFValue(18)}px ${RFValue(16)}px;
    border-radius: ${RFValue(5)}px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${RFValue(16)}px;
    align-items: center;
`


export const Category = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;    
    color: ${({theme}) => theme.colors.text};
`