import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { Connection, createConnection } from 'typeorm/browser';
import { TopicEntity } from '../../modules/topic/repository/Topic.entity';

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
        entities: [TopicEntity],
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
          <ActivityIndicator />
        </ActivityIndicatorContainer>
      )}
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});

const ActivityIndicatorContainer = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
