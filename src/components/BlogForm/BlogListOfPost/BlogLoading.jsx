import { SyncOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import React from 'react';

const Loading = () => {
  return <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
    <Col>
      <SyncOutlined
        spin
        style={{
          verticalAlign: 'middle',
          alignItems: 'center',
          fontSize: '300px',
        }}
      />
    </Col>
  </Row>
}
export default Loading


