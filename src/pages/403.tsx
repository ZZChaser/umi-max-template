import { history } from '@umijs/max';
import { Button, Result } from 'antd';

const NotFound = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉，你无权访问该页面"
      extra={
        <Button onClick={() => history.push('/')} type="primary">
          返回首页
        </Button>
      }
    />
  );
};

export default NotFound;
