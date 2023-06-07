import { PATH } from '@/constants/path';
import { Navigate } from '@umijs/max';

const RedirectWrapper = () => {
  // 可判断动态菜单，重定向到第一个菜单
  const path = PATH.HOME;

  return <Navigate to={path} />;
};

export default RedirectWrapper;
