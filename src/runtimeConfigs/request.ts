import { message } from '@/utils/popUp';
import { getToken, removeToken } from '@/utils/token';
import { RequestConfig, RequestOptions, ResponseInterceptor } from '@umijs/max';

const AUTH_FAILURE_CODES = [401];

const addAuthRequestInterceptor = (url: string, options: RequestOptions) => {
  const token = getToken();
  if (token) {
    options.headers!.Authorization = `Bearer ${token}`;
  }

  return { url, options };
};

const dealResponseInterceptor: ResponseInterceptor = (res: any) => {
  // const { data } = res as AxiosResponse<Response>;

  // 自定义错误，默认是 data.success 为 false
  // if (data.code !== 0) {
  // }

  return res;
};

const request: RequestConfig = {
  baseURL: process.env.API_BASE,
  timeout: 5000,
  errorConfig: {
    errorHandler(err, options) {
      if (options.skipErrorHandler) {
        throw err;
      }

      const showMessage = err?.message || '请求失败！';
      message.error(showMessage);

      if (AUTH_FAILURE_CODES.includes(Number((err as any).code))) {
        removeToken();
        window.location.href = `/login?redirect=${encodeURIComponent(
          location.href.replace(location.origin, ''),
        )}`;
      }
    },
    errorThrower(err) {
      throw err;
    },
  },
  requestInterceptors: [addAuthRequestInterceptor],
  responseInterceptors: [dealResponseInterceptor],
};

export default request;
