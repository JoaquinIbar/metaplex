import { Col, Layout, Row } from 'antd';
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
      <Content>
        <Row>
          <Col>
            <video className="desktop-video" playsInline autoPlay muted loop>
              <source src="https://github.com/JoaquinIbar/solmoments/raw/master/js/packages/web/public/videos/remember-solmoments.mp4" type='video/mp4;' />
            </video>
            <video className="mobile-video" playsInline autoPlay muted loop>
              <source src="https://github.com/JoaquinIbar/solmoments/raw/master/js/packages/web/public/videos/remember-solmoments-mobile.mp4" type='video/mp4;' />
            </video>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};