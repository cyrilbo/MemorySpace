import { CardEntity } from '@card/data/repository/Card.entity';
import { colors } from '@root/src/core/theme/colors';
import styled from '@root/src/core/theme/styled-components';
import { TopicEntity } from '@topic/data/repository/Topic.entity';
import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Connection, createConnection } from 'typeorm/browser';

export const TypeormProvider: FunctionComponent = ({ children }) => {
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
          <ActivityIndicator color={colors.ivory} />
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
  backgroundColor: theme.colors.darkGrey,
}));
