import { message } from '@/utils/popUp';
import { BetaSchemaForm, ProFormInstance } from '@ant-design/pro-components';
import { Modal } from 'antd';
import React, { useRef, useState } from 'react';
import { formColumns } from './schemas';

type PasswordResetModalProps = {
  open: boolean;
  onOk: (formValue: Record<string, any>) => Promise<void>;
  onCancel: () => void;
};

const PasswordResetModal: React.FC<PasswordResetModalProps> = ({
  open,
  onOk,
  onCancel,
}) => {
  const formRef = useRef<ProFormInstance>();
  const [confirmLoading, setConfirmLoading] = useState(false);

  return (
    <Modal
      destroyOnClose
      title="重置密码"
      width={600}
      maskClosable={false}
      confirmLoading={confirmLoading}
      open={open}
      onCancel={() => onCancel()}
      onOk={handleFormFinish}
    >
      <BetaSchemaForm
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        submitter={false}
        formRef={formRef}
        columns={formColumns}
      />
    </Modal>
  );

  async function handleFormFinish() {
    const formValue = await formRef.current?.validateFields();
    const { password, newPassword, confirmPassword } = formValue;

    if (password === newPassword) {
      message.error('新密码与旧密码一致，请重新输入！');
      return;
    }

    if (newPassword !== confirmPassword) {
      message.error('确认密码与新密码不一致！');
      return;
    }

    try {
      setConfirmLoading(true);
      await onOk({ password, newPassword });
    } finally {
      setConfirmLoading(false);
    }
  }
};

export default PasswordResetModal;
