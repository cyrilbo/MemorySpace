import styled from '@core/libs/styled-components';

interface Props {
  height?: number;
  width?: number;
}

export const Spacer = styled.View<Props>(({ height = 0, width = 0, theme }) => ({
  height: height * theme.gridUnit,
  width: width * theme.gridUnit,
}));
