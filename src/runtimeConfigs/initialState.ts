import { PATH } from '@/constants/path';
import { ManageUserControllerLoginDetail } from '@/services/demo/user';

// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export default async function getInitialState() {
  if (location.pathname.startsWith(PATH.LOGIN)) {
    return {};
  }

  try {
    const res = await ManageUserControllerLoginDetail();
    return res?.data || {};
  } catch (error) {
    return {};
  }
}
