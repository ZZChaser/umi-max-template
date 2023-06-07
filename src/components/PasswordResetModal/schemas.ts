import { ProFormColumnsType } from '@ant-design/pro-components';

export const formColumns: ProFormColumnsType[] = [
  {
    title: '原始密码',
    key: 'password',
    valueType: 'password',
    fieldProps: {
      autoComplete: 'off',
      // 防止密码填充
      id: 'oriPassword',
    },
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
  {
    title: '新密码',
    key: 'newPassword',
    valueType: 'password',
    fieldProps: {
      autoComplete: 'new-password',
    },
    formItemProps: {
      rules: [
        {
          required: true,
          min: 6,
          max: 20,
        },
      ],
    },
  },
  {
    title: '确认密码',
    key: 'confirmPassword',
    valueType: 'password',
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
];
