declare namespace API {
  type ManageUserControllerDeleteParams = {
    /** id */
    id: number;
  };

  type ManageUserControllerDetailParams = {
    /** id */
    id: string;
  };

  type ManageUserControllerResetPwdParams = {
    /** id */
    id: number;
  };

  type MenuVO = {
    /** 图标 */
    icon?: string;
    /** 菜单名称 */
    name?: string;
    /** 路径 */
    path?: string;
  };

  type PageResultUserListVO = {
    list?: UserListVO[];
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    total?: number;
  };

  type Rboolean = {
    code?: number;
    data?: boolean;
    exception?: string;
    message?: string;
    requestId?: number;
    success?: boolean;
    timestamp?: number;
  };

  type RoleVO = {
    /** 主键 */
    id?: number;
    /** 角色名称 */
    roleName?: string;
  };

  type RPageResultUserListVO = {
    code?: number;
    data?: PageResultUserListVO;
    exception?: string;
    message?: string;
    requestId?: number;
    success?: boolean;
    timestamp?: number;
  };

  type Rstring = {
    code?: number;
    data?: string;
    exception?: string;
    message?: string;
    requestId?: number;
    success?: boolean;
    timestamp?: number;
  };

  type RUserDetailVO = {
    code?: number;
    data?: UserDetailVO;
    exception?: string;
    message?: string;
    requestId?: number;
    success?: boolean;
    timestamp?: number;
  };

  type RUserLoginDetailVO = {
    code?: number;
    data?: UserLoginDetailVO;
    exception?: string;
    message?: string;
    requestId?: number;
    success?: boolean;
    timestamp?: number;
  };

  type UserCreateDTO = {
    /** 账号 */
    account: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    mobile?: string;
    /** 名称 */
    name: string;
    /** 角色 */
    roleIdList: number[];
  };

  type UserDetailVO = {
    /** 账号 */
    account?: string;
    /** 创建时间 */
    createDate?: string;
    /** 邮箱 */
    email?: string;
    /** 主键 */
    id?: string;
    /** 手机号 */
    mobile?: string;
    /** 名称 */
    name?: string;
    /** 角色 */
    roleIdList?: number[];
  };

  type UserListVO = {
    /** 账号 */
    account?: string;
    /** 创建时间 */
    createDate?: string;
    /** 邮箱 */
    email?: string;
    /** 主键 */
    id?: string;
    /** 手机号 */
    mobile?: string;
    /** 名称 */
    name?: string;
  };

  type UserLoginDetailVO = {
    /** 账号 */
    account?: string;
    /** 邮箱 */
    email?: string;
    /** 主键 */
    id?: string;
    /** 功能卡片列表 */
    menuList?: MenuVO[];
    /** 手机号 */
    mobile?: string;
    /** 名称 */
    name?: string;
  };

  type UserLoginDTO = {
    /** 账号 */
    account: string;
    /** 密码 */
    password: string;
  };

  type UserUpdateDTO = {
    /** 邮箱 */
    email?: string;
    /** 主键 */
    id: string;
    /** 手机号 */
    mobile?: string;
    /** 名称 */
    name: string;
    /** 角色 */
    roleIdList: number[];
  };

  type UserUpdatePwdDTO = {
    /** 新密码 */
    newPassword: string;
    /** 旧密码 */
    oldPassword: string;
  };

  type yonghufenyesousuoParam = {
    /** 用户名：account */
    account?: string;
    /** 邮箱 */
    email?: string;
    /** 手机号 */
    mobile?: string;
    /** 名称 */
    name?: string;
    /** 页码 */
    pageNum?: number;
    /** 每页显示数量 */
    pageSize?: number;
  };
}
