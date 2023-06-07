// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加 POST /manage/user/add */
export async function ManageUserControllerCreate(
  body: API.UserCreateDTO,
  options?: { [key: string]: any },
) {
  return request<API.Rboolean>('/manage/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /manage/user/delete/${param0} */
export async function ManageUserControllerDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ManageUserControllerDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Rboolean>(`/manage/user/delete/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 详情 GET /manage/user/detail/${param0} */
export async function ManageUserControllerDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ManageUserControllerDetailParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RUserDetailVO>(`/manage/user/detail/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 当前登录用户详情 GET /manage/user/detail/user */
export async function ManageUserControllerLoginDetail(options?: {
  [key: string]: any;
}) {
  return request<API.RUserLoginDetailVO>('/manage/user/detail/user', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 分页 POST /manage/user/list */
export async function ManageUserControllerPage(
  body: API.yonghufenyesousuoParam,
  options?: { [key: string]: any },
) {
  return request<API.RPageResultUserListVO>('/manage/user/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登录 POST /manage/user/login */
export async function ManageUserControllerLogin(
  body: API.UserLoginDTO,
  options?: { [key: string]: any },
) {
  return request<API.Rstring>('/manage/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登出 POST /manage/user/logout */
export async function ManageUserControllerLogout(options?: {
  [key: string]: any;
}) {
  return request<API.Rboolean>('/manage/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 重置密码 GET /manage/user/reset/${param0} */
export async function ManageUserControllerResetPwd(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ManageUserControllerResetPwdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Rboolean>(`/manage/user/reset/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新 PUT /manage/user/update */
export async function ManageUserControllerUpdate(
  body: API.UserUpdateDTO,
  options?: { [key: string]: any },
) {
  return request<API.Rboolean>('/manage/user/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改密码 PUT /manage/user/update/pwd */
export async function ManageUserControllerUpdatePwd(
  body: API.UserUpdatePwdDTO,
  options?: { [key: string]: any },
) {
  return request<API.Rboolean>('/manage/user/update/pwd', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
