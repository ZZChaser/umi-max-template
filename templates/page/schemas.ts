import { ProColumns } from '@ant-design/pro-components';

export const tableColumns: ProColumns<any>[] = [
  {
    title: '用户名',
    dataIndex: 'account',
    formItemProps: {
      rules: [
        {
          required: true,
          max: 30,
        },
      ],
    },
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    formItemProps: {
      rules: [
        {
          type: 'email',
          message: '邮箱格式不正确',
        },
      ],
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createDate',
    valueType: 'dateTime',
    hideInSearch: true,
    hideInForm: true,
  },
  {
    title: '操作',
    dataIndex: 'action',
    hideInSearch: true,
    hideInForm: true,
    hideInDescriptions: true,
  },
];
