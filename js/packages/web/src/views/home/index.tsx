import { Col, Layout, Row, Image } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';

const { Content } = Layout;

export const HomeView = () => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  const showAuctions = (store && isConfigured) || isLoading;

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      <h1> ESTO ES LA FUCKING HOME </h1>
      <Content>
        <Row>
          <Col>
            <video playsInline autoPlay muted loop>
                <source src="https://github.com/JoaquinIbar/solmoments/raw/4d273cce40448ecf59e7ebd1b9ebab6d39365fcf/js/packages/web/public/videos/remember-solmoments.mp4" 
                  type='video/mp4;'/>
              </video>
          </Col>
          <Col>

          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

