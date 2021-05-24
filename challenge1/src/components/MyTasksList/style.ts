import styled from 'styled-components/native'


export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 24;
  font-family: ${({ theme }) => theme.fonts.bold};
`