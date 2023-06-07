import logo from '@/assets/logo.png';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { useModel, useSearchParams } from '@umijs/max';
import styles from './index.less';

const Login = () => {
  const { login } = useModel('user');
  const [searchParams] = useSearchParams();

  return (
    <div className={styles.login}>
      <LoginForm
        logo={<img style={{ width: '110px' }} src={logo} />}
        title="CdCloud"
        subTitle={<></>}
        onFinish={handleLoginFormFinish}
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={'prefixIcon'} />,
          }}
          placeholder={'用户名'}
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={'prefixIcon'} />,
          }}
          placeholder={'密码'}
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        />
      </LoginForm>
    </div>
  );

  async function handleLoginFormFinish(form: Record<string, any>) {
    await login(form.username, form.password);
    window.location.href = (searchParams.get('redirect') as string) || '/';
  }
};

export default Login;
