import styled from '@core/theme/styled-components';
import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
}

const SPACE = 20;

export const Box: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <>
      <Row>
        <TopLeftCorner />
        <Title>{title}</Title>
        <TopRightCorner />
      </Row>
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
};

const ChildrenContainer = styled.View(({ theme }) => ({
  borderBottomWidth: theme.borders.width.l,
  borderLeftWidth: theme.borders.width.l,
  borderRightWidth: theme.borders.width.l,
  borderBottomLeftRadius: SPACE / 2,
  borderBottomRightRadius: SPACE / 2,
  paddingBottom: theme.gridUnit * 4,
  paddingHorizontal: theme.gridUnit * 2,
}));

const Title = styled.Text(({ theme }) => ({
  paddingHorizontal: theme.gridUnit,
  fontFamily: theme.fontFamilies.semiBold,
  fontSize: theme.fontSizes.xl,
}));

const Row = styled.View({ flexDirection: 'row' });

const TopLeftCorner = styled.View(({ theme }) => ({
  borderTopWidth: theme.borders.width.l,
  borderLeftWidth: theme.borders.width.l,
  borderTopLeftRadius: SPACE / 2,
  width: SPACE,
  height: SPACE,
  marginTop: theme.gridUnit * 2,
}));

const TopRightCorner = styled.View(({ theme }) => ({
  borderTopWidth: theme.borders.width.l,
  borderRightWidth: theme.borders.width.l,
  borderTopRightRadius: SPACE / 2,
  height: SPACE,
  flex: 1,
  marginTop: theme.gridUnit * 2,
}));
