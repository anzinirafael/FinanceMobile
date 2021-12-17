import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
    Container,
    Category,
    Icon
} from './style';

interface Props extends RectButtonProps{
    title: string
}

export function SelectCategory({title, ...rest} : Props){
    return(
        <Container {...rest}>
            <Category>
                {title}
            </Category>
            <Icon name="chevron-down" />
        </Container>
    )
}

