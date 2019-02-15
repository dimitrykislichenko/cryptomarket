import React from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
    message: string;
}

const Wrapper = styled.View`
    background-color: #fff6f6;
    border: 1px solid #e0b4b4;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
`;

const Message = styled.Text`
    color: #9f3a38;
`;

const ErrorMessage = ({ message }: ErrorMessageProps) => (
    <Wrapper>
        <Message>{message}</Message>
    </Wrapper>
);

export default ErrorMessage;
