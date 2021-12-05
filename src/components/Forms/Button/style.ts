import { TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    background-color: ${({theme}) => theme.colors.secondary};
    width: 100%;
    padding: ${RFValue(18)}px;
    border-radius: ${RFValue(5)}px;
    justify-content: center;
    align-items: center;
    margin-bottom: ${RFValue(2)}px;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.medium};
`