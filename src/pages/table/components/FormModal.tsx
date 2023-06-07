import { mergeColumns } from '@/utils';
import {
  BetaSchemaForm,
  ProColumns,
  ProDescriptions,
  ProFormInstance,
} from '@ant-design/pro-components';
import { Button, Modal } from 'antd';
import { cloneDeep } from 'lodash';
import { useEffect, useRef } from 'react';
import { FORM_TYPE } from '../constants';
import { tableColumns } from '../schemas';
import { FormType } from '../types';

type FormModalProps<T> = {
  open: boolean;
  type: FormType;
  values: T;
  confirmLoading: boolean;
  onCancel: () => void;
  onOk: (v: T) => Promise<void>;
};

const TITLE_MAP: Record<FormType, string> = {
  create: '新建',
  edit: '修改',
  view: '详情',
};

const getAllRoles = async () => {
  // TODO: 发起请求
  return [
    {
      label: '管理员',
      value: 'admin',
    },
    {
      label: '员工',
      value: 'staff',
    },
  ];
};

function FormModal<T = Record<string, any>>({
  open = false,
  type,
  values,
  confirmLoading = false,
  onCancel,
  onOk,
}: FormModalProps<T>) {
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    formRef.current?.setFieldsValue(values);
  }, [values]);

  const isView = type === FORM_TYPE.View;

  const getFooterButtons = () => {
    return (
      <>
        {!isView && <Button onClick={onCancel}>取消</Button>}
        <Button
          type="primary"
          loading={confirmLoading}
          onClick={handleFormSubmit}
        >
          确定
        </Button>
      </>
    );
  };

  const handleFormSubmit = async () => {
    const values = await formRef.current?.validateFields();
    onOk?.(values);
  };

  const nextColumns: ProColumns<any>[] = [
    {
      title: '角色',
      dataIndex: 'roleIdList',
      request: getAllRoles,
    },
  ];
  const editColumns: any[] = [
    {
      title: '用户名',
      dataIndex: 'account',
      fieldProps: {
        disabled: true,
      },
    },
  ];

  const getColumns = () => {
    const cloneColumns = cloneDeep(tableColumns);
    let allColumns = mergeColumns(cloneColumns, nextColumns);

    if (type === FORM_TYPE.Edit) {
      allColumns = mergeColumns(allColumns, editColumns);
    }

    return allColumns;
  };

  return (
    <Modal
      destroyOnClose
      title={TITLE_MAP[type]}
      width={600}
      open={open}
      footer={getFooterButtons()}
      onCancel={onCancel}
    >
      {isView ? (
        <ProDescriptions
          column={1}
          labelStyle={{
            display: 'inline-block',
            width: 100,
            textAlign: 'right',
          }}
          columns={getColumns()}
          dataSource={values}
        />
      ) : (
        <BetaSchemaForm
          layout="horizontal"
          labelCol={{ span: 4 }}
          colon={false}
          formRef={formRef}
          columns={getColumns()}
          preserve={false}
          submitter={false}
        />
      )}
    </Modal>
  );
}

export default FormModal;
