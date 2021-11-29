import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
    background-color: ${({theme}) => theme.colors.shape};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(14)}px;
    width: 100%;
    padding: ${RFValue(18)}px;
    border-radius: ${RFValue(5)}px;
`
