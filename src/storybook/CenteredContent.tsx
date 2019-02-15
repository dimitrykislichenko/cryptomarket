import React from 'react';
import styled from 'styled-components';

const CenteredContent = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
`;

export default ({ story }) => <CenteredContent>{story}</CenteredContent>;
