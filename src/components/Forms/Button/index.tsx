import React from 'react';
import {Container, Title} from './style';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps;

export function Button({} : Props){
    return(
       <Container>
           <Title>Enviar</Title>
       </Container> 
    )
}