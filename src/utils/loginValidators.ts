import { ref } from "vue";

interface loginRef {
  email: string;
  passWord: string;
}
interface rulesRef {
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: (
    | {
        message: string;
        required: boolean;
        trigger: string;
        min?: undefined;
        max?: undefined;
      }
    | {
        min: number;
        max: number;
        trigger: string;
        message: string;
        required?: undefined;
      }
  )[];
}
export const loginUser = ref<loginRef>({
  email: "",
  passWord: "",
});
// 校验规则
export const rules = ref<rulesRef>({
  email: [
    {
      type: "email",
      message: "请使用常用的邮箱格式",
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    {
      message: "请输入密码",
      required: true,
      trigger: "blur",
    },
    {
      min: 8,
      max: 15,
      trigger: "blur",
      message: "密码长度不符合要求",
    },
  ],
});
