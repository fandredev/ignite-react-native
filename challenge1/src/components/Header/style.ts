import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const status = StatusBar.currentHeight

export const Container = styled.View`
   padding-top: ${status};
   padding-bottom: 44;
   background-color: ${({ theme }) => theme.colors.primary};
   justify-content: center;
   align-items: center;
   flex-direction: row;
`

export const ContainerIos = styled(Container)`padding-top: inherit;`

export const SafeAreaViewIos = styled.SafeAreaView`
   background-color: ${({ theme }) => theme.colors.auxMain};
`

export const HeaderText = styled.Text`
    font-size: 24;
    color: ${({ theme }) => theme.colors.auxMain};
    font-family: ${({ theme }) => theme.fonts.regular};
`
export const HeaderTextAux = styled(HeaderText)`
   font-family: ${({ theme }) => theme.fonts.bold}
`