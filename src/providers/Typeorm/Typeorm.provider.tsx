import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Connection, createConnection } from 'typeorm/browser';
import { Topic } from '../../modules/topic/repository/Topic.entity';

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
        entities: [Topic],
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

  return <Container>{children}</Container>;
};

const Container = styled.View({ flex: 1 });
