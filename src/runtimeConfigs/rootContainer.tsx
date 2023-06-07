import popUp from '@/utils/popUp';
import { getPrimaryThemeToken } from '@/utils/theme';
import { App, ConfigProvider } from 'antd';
import { PRIMARY_COLOR } from './theme';

const ContainerWrapper = (props: any) => {
  popUp();

  return props.children;
};

export default function rootContainer(container: any) {
  return (
    <ConfigProvider
      pagination={{
        showSizeChanger: true,
      }}
      theme={{
        token: getPrimaryThemeToken(PRIMARY_COLOR),
      }}
    >
      <App style={{ height: '100%' }}>
        <ContainerWrapper>{container}</ContainerWrapper>
      </App>
    </ConfigProvider>
  );
}
