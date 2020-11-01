import styled from 'styled-components/native';

interface Props {
  height?: number;
  width?: number;
}

export const Spacer = styled.View<Props>(({ height = 0, width = 0 }) => ({
  height: height * 4,
  width: width * 4,
}));
