import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const {
    // @ts-ignore
    initialState: { name },
  } = useModel('@@initialState');

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name ?? '')} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
