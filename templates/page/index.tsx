import { mergeColumns } from '@/utils';
import { message, modal } from '@/utils/popUp';
import {
  ActionType,
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Divider } from 'antd';
import React, { useReducer, useRef, useState } from 'react';
import FormModal from './components/FormModal';
import { FORM_TYPE } from './constants';
import { tableColumns } from './schemas';
import { FormType } from './types';

const formInitialState = {
  open: false,
  formValues: {} as Record<string, any>,
  formType: FORM_TYPE.Create as FormType,
};

type FormInitialState = typeof formInitialState;

const queryList = async (params: any) => {
  // TODO: 发起请求
  console.log({ params });
  const list = [
    {
      id: '1664516652166397953',
      createDate: 1685686670000,
      account: '344',
      name: '123',
      mobile: '18381888888',
      email: '',
    },
  ];
  return {
    success: true,
    data: list,
    total: 1,
  };
};

const create = async (data: any) => {
  // TODO: 发起请求
  console.log({ data });
  message.success('新建成功');
};

const edit = async (data: any) => {
  // TODO: 发起请求
  console.log({ data });
  message.success('修改成功');
};

const getRecordDetail = async (id: string) => {
  // TODO: 发起请求
  return {
    id,
    createDate: 1685686670000,
    account: '344',
    name: '123',
    mobile: '18381888888',
    email: '',
  };
};

const deleteRecord = async (id: string) => {
  // TODO: 发起请求
  console.log({ id });
  message.success('删除成功');
};

const Page: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [{ open: formModalOpen, formValues, formType }, setFormState] =
    useReducer(
      (state: FormInitialState, newState: Partial<FormInitialState>) => ({
        ...state,
        ...newState,
      }),
      formInitialState,
    );

  const nextColumns = [
    {
      title: '操作',
      dataIndex: 'action',
      render: (_: any, record: any) => (
        <>
          <a onClick={() => handleView(record.id)}>详情</a>
          <Divider type="vertical" />
          <a onClick={() => handleDelete(record.id)}>删除</a>
          <Divider type="vertical" />
          <a onClick={() => handleEdit(record.id)}>修改</a>
        </>
      ),
    },
  ];

  const handleView = async (id: string) => {
    setFormState({
      open: true,
      formType: FORM_TYPE.View,
    });
    const data = await getRecordDetail(id);
    setFormState({
      formValues: data || {},
    });
  };

  const handleDelete = async (id: string) => {
    modal.confirm({
      title: '确定删除该用户？',
      onOk: async () => {
        await deleteRecord(id);
        actionRef.current?.reload();
      },
    });
  };

  const handleEdit = async (id: string) => {
    setFormState({
      open: true,
      formType: FORM_TYPE.Edit,
    });
    const data = await getRecordDetail(id);
    setFormState({
      formValues: data || {},
    });
  };

  const columns = mergeColumns(tableColumns, nextColumns);

  const handleCreate = async () => {
    setFormState({
      open: true,
      formType: FORM_TYPE.Create,
    });
  };

  const handleModalCancel = () => setFormState({ open: false, formValues: {} });

  const handleModalSubmit = async (values: any) => {
    if (formType === FORM_TYPE.View) {
      handleModalCancel();
      return;
    }

    try {
      setLoading(true);
      if (formType === FORM_TYPE.Create) {
        await create(values);
      } else if (formType === FORM_TYPE.Edit) {
        await edit({
          id: formValues.id,
          ...values,
        });
      }
      setFormState({
        open: false,
        formValues: {},
      });
      actionRef.current?.reload();
    } catch (error) {
      console.error({ error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer
      header={{
        title: '列表模版',
        breadcrumb: {},
      }}
    >
      <ProTable<any>
        rowKey="id"
        headerTitle="人员账号"
        search={{
          defaultCollapsed: false,
        }}
        actionRef={actionRef}
        request={queryList}
        columns={columns}
        toolBarRender={() => [
          <Button key="create" type="primary" onClick={handleCreate}>
            新建
          </Button>,
        ]}
        pagination={{
          defaultPageSize: 10,
          pageSizeOptions: [10, 20, 30],
        }}
      />
      <FormModal
        open={formModalOpen}
        type={formType}
        values={formValues}
        confirmLoading={loading}
        onCancel={handleModalCancel}
        onOk={handleModalSubmit}
      />
    </PageContainer>
  );
};

export default Page;
