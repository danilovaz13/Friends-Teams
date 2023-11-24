import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_400};
  padding: 24px;
`;

export const Title = styled.Text`
  color: #a1c;
  font-size: 30px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;
