import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';
import styles from './index.less';

const AccessPage: React.FC = () => {
  const access = useAccess();

  return (
    <PageContainer ghost>
      <Access accessible={access.admin}>
        <Button className={styles.btn}>只有 Admin 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
};

export default AccessPage;
