import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ElLoading } from "element-plus";

let loading: any;
const startLoading = () => {
  interface Options {
    lock: boolean;
    text: string;
    background: string;
  }

  const options: Options = {
    lock: true,
    text: "加载中...",
    background: "rgba(0,0,0,0.7)",
  };
  loading = ElLoading.service(options);
};

const endLoading = () => {
  loading.close();
};

export function request(config: AxiosRequestConfig) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://imissu.herokuapp.com/api/v1/auth",
    // timeout: 5000
  });

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(
    (config) => {
      startLoading();
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  // 2.2.响应拦截
  instance.interceptors.response.use(
    (res: AxiosResponse<any>) => {
      endLoading();
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  // 3.发送真正的网络请求
  return instance(config);
}
