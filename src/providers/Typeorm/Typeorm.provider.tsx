import { CardEntity } from '@card/data/repository/Card.entity';
import { useTheme } from '@root/src/providers/Theme/Theme.provider';
import styled from '@core/libs/styled-components';
import { TopicEntity } from '@topic/data/repository/Topic.entity';
import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Connection, createConnection } from 'typeorm/browser';

export const TypeormProvider: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const [defaultConnection, setconnection] = useState<Connection | null>(null);
  const setupConnection = useCallback(async () => {
    try {
      const connection = await createConnection({
        type: 'react-native',
        database: 'memory-space',
        location: 'default',
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: [TopicEntity, CardEntity],
      });
      setconnection(connection);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (!defaultConnection) {
      setupConnection();
    }
  }, [defaultConnection, setupConnection]);

  return (
    <Container>
      {defaultConnection ? (
        children
      ) : (
        <ActivityIndicatorContainer>
          <ActivityIndicator color={theme.colors.primary} />
        </ActivityIndicatorContainer>
      )}
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});

const ActivityIndicatorContainer = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.secondary,
}));
