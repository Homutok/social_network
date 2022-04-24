import { LoadingOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';


const Loading = () => {
  return <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
    <Col>
      <LoadingOutlined
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


