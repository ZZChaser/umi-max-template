import logo from '@/assets/logo.png';
import { Spin } from 'antd';

const PageLoading = () => {
  return (
    <div style={{ textAlign: 'center', padding: '180px 0', fontSize: '36px' }}>
      <div>
        <h1>CdCloud</h1>
        <img style={{ width: '80px', marginBottom: '120px' }} src={logo} />
      </div>
      <Spin></Spin>
    </div>
  );
};

export default PageLoading;
