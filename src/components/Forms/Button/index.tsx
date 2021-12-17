import React from 'react';
import {Container, Title} from './style';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends TouchableOpacityProps{
    title: string,
    type: 'select' | 'submit'
}

export function Button({title, ...rest} : Props){
    return(
       <Container {...rest} >
           <Title>{title}</Title>
       </Container> 
    )
}