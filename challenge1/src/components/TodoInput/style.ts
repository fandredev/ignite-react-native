import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.inputbg};
    border-radius: 5px;
    margin-top: -25px;
    margin-left: 40px;
    margin-right: 40px;
    height: 50px;
    flex-direction: row;
    align-items: center;

`

export const Input = styled.TextInput`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.inputbg};
    padding-left: 12;
    border-top-left-radius: 5;
    border-bottom-left-radius: 5;
`

export const ButtonAddNewTask = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.button};
    height: 50;
    padding-right: 16;
    padding-left: 16;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 5;
    border-bottom-right-radius: 5;
`