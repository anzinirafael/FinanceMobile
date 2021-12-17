import { DoWhileStatement } from '@babel/types';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import {Container, Icon, Title} from './style';

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface TransactionsProps extends TouchableOpacityProps{
    type: 'up' | 'down',
    title: string,
    isActive: boolean
}

export function Transactions({type, title, isActive, ...rest} : TransactionsProps){
    return(
        <Container {...rest} isActive={isActive} type={type}>
            <Icon name={icons[type]} type={type}/>
            <Title>{title}</Title>
        </Container>
    )
}