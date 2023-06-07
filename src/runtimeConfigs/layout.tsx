import logo from '@/assets/logo.png';
import PasswordResetModal from '@/components/PasswordResetModal';
import { PATH } from '@/constants/path';
import { modal } from '@/utils/popUp';
import {
  RunTimeLayoutConfig,
  getAllLocales,
  getLocale,
  history,
  setLocale,
  useModel,
} from '@umijs/max';
import { Dropdown } from 'antd';
import { useState } from 'react';

const IntlDropdown = () => {
  const locales = getAllLocales();
  const items = locales.map((locale) => ({
    key: locale,
    label: locale,
    onClick: () => setLocale(locale, false),
  }));
  const currentLocale = getLocale();

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <span>{currentLocale}</span>
    </Dropdown>
  );
};

const AvatarDropdown = (props: { children: React.ReactNode }) => {
  const { loginOut, modifyPassword } = useModel('user');
  const { initialState } = useModel('@@initialState');
  const [passwordResetModalOpen, setPasswordResetModalOpen] = useState(false);

  const items = initialState?.account
    ? [
        {
          key: 'modify',
          label: '修改密码',
          onClick: () => setPasswordResetModalOpen(true),
        },
        {
          key: 'logout',
          label: '退出登录',
          onClick: handleLoginOut,
        },
      ]
    : [
        {
          key: 'login',
          label: '登录',
          onClick: () => history.push(PATH.LOGIN),
        },
      ];

  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
      >
        {props.children}
      </Dropdown>

      <PasswordResetModal
        open={passwordResetModalOpen}
        onCancel={() => setPasswordResetModalOpen(false)}
        onOk={handleModifyPassword}
      />
    </>
  );

  function handleLoginOut() {
    modal.confirm({
      title: '确定要退出登录吗？',
      onOk: loginOut,
    });
  }

  async function handleModifyPassword(formValue: Record<string, string>) {
    return modifyPassword(formValue.password, formValue.newPassword);
  }
};

const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo: <img style={{ height: '56px' }} src={logo} />,
    title: 'CdCloud',
    layout: 'mix',
    // menu: {
    //   params: initialState,
    //   request: async (params) => {
    //     const { menuList } = params;

    //     // 定义动态菜单 https://beta-pro.ant.design/docs/advanced-menu-cn
    //     return menuList;
    //   },
    // },
    actionsRender: () => [<IntlDropdown key="intl" />],
    locale: getLocale(),
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      title: initialState?.name,
      size: 'small',
      render: (props, dom) => {
        return <AvatarDropdown>{dom}</AvatarDropdown>;
      },
    },
  };
};

export default layout;
