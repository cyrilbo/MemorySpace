import styled from '@core/theme/styled-components';
import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
  color: string;
}

const SPACE = 20;

export const Box: FunctionComponent<Props> = ({ title, color, children }) => {
  return (
    <>
      <Row>
        <TopLeftCorner color={color} />
        <Title color={color}>{title}</Title>
        <TopRightCorner color={color} />
      </Row>
      <ChildrenContainer color={color}>{children}</ChildrenContainer>
    </>
  );
};

const ChildrenContainer = styled.View<{ color: string }>(({ theme, color }) => ({
  borderBottomWidth: theme.borders.width.l,
  borderLeftWidth: theme.borders.width.l,
  borderRightWidth: theme.borders.width.l,
  borderBottomLeftRadius: SPACE / 2,
  borderBottomRightRadius: SPACE / 2,
  paddingBottom: theme.gridUnit * 4,
  paddingHorizontal: theme.gridUnit * 2,
  borderColor: color,
}));

const Title = styled.Text<{ color: string }>(({ theme, color }) => ({
  paddingHorizontal: theme.gridUnit,
  fontFamily: theme.fontFamilies.semiBold,
  fontSize: theme.fontSizes.xl,
  color: color,
}));

const Row = styled.View({ flexDirection: 'row' });

const TopLeftCorner = styled.View<{ color: string }>(({ theme, color }) => ({
  borderTopWidth: theme.borders.width.l,
  borderLeftWidth: theme.borders.width.l,
  borderTopLeftRadius: SPACE / 2,
  width: SPACE,
  height: SPACE,
  marginTop: theme.gridUnit * 2,
  borderColor: color,
}));

const TopRightCorner = styled.View<{ color: string }>(({ theme, color }) => ({
  borderTopWidth: theme.borders.width.l,
  borderRightWidth: theme.borders.width.l,
  borderTopRightRadius: SPACE / 2,
  height: SPACE,
  flex: 1,
  marginTop: theme.gridUnit * 2,
  borderColor: color,
}));
