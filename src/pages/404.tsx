import { history } from '@umijs/max';
import { Button, Result } from 'antd';

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，你访问的页面找不到"
      extra={
        <Button onClick={() => history.push('/')} type="primary">
          返回首页
        </Button>
      }
    />
  );
};

export default NotFound;
