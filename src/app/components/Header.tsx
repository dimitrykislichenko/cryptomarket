import React from 'react';
import styled from 'styled-components';
import { Header } from 'react-native-elements';

const Title = styled.Text`
    color: #ffffff;
`;

const AppHeader = () => <Header centerComponent={<Title>MARKETS</Title>} />;

export default AppHeader;
