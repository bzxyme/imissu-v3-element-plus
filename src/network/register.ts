import { request } from "./request";

export function register(registerUser: Object) {
  return request({
    url: "/register",
    method: "post",
    data: { registerUser },
  });
}
