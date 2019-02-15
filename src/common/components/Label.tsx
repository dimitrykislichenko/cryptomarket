import React from 'react';
import styled from 'styled-components';

interface LabelProps {
    children: any;
}

const Wrapper = styled.View`
    padding: 3px;
    margin: 3px;
    border-radius: 3px;
    flex: 0 0 auto;
    background: #5841e6;
`;

const StyledText = styled.Text`
    font-size: 8px;
    color: #ffffff;
    text-align: center;
`;

const Label = ({ children }: LabelProps) => (
    <Wrapper>
        <StyledText>{children}</StyledText>
    </Wrapper>
);

export default Label;
