// 全局共享数据示例
import { PATH } from '@/constants/path';
import {
  ManageUserControllerLogin,
  ManageUserControllerLogout,
  ManageUserControllerUpdatePwd,
} from '@/services/demo/user';
import { message } from '@/utils/popUp';
import { removeToken, setToken } from '@/utils/token';
import CryptoJS from 'crypto-js';
import { useState } from 'react';

interface User {
  name?: string;
  avatar?: string;
}

const useUser = () => {
  const [user, setUser] = useState<User>({});

  const login = async (account: string, password: string) => {
    const { data } = await ManageUserControllerLogin({
      account,
      password: getEncrypted(password),
    });

    setToken(data as string);
  };

  function getEncrypted(password: string) {
    const key = '123456'; // 密钥
    const iv = CryptoJS.enc.Utf8.parse('PKCS7Paddingqubh');

    const encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(password),
      CryptoJS.enc.Utf8.parse(key.padEnd(16, '\0')),
      {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      },
    );

    return encrypted.toString();
  }

  const loginOut = async () => {
    await ManageUserControllerLogout();
    removeUserAndGoLogin();
  };

  function removeUserAndGoLogin() {
    setUser({});
    removeToken();
    window.location.href = PATH.LOGIN;
  }

  const modifyPassword = async (password: string, newPassword: string) => {
    await ManageUserControllerUpdatePwd({
      oldPassword: getEncrypted(password),
      newPassword: getEncrypted(newPassword),
    });

    message.success('修改成功，请重新登录！');

    setTimeout(() => {
      removeUserAndGoLogin();
    }, 500);
  };

  return {
    user,
    login,
    loginOut,
    modifyPassword,
  };
};

export default useUser;
