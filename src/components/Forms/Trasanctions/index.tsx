import { DoWhileStatement } from '@babel/types';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {Container, Icon, Title} from './style';

interface TransactionsProps extends TouchableOpacityProps{
    icon: 'up' | 'down',
    title: string
}

export function Transactions({icon, title} : TransactionsProps){
    return(
        <Container>
            <Icon type={icon}/>
            <Title>{title}</Title>
        </Container>
    )
}