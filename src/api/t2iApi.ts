import axios from "../utils/axios";
/**
 * @name 用户管理模块
 */
// 获取用户列表
const PORT1 = "/api";

// T2I
export const T2I = (parms: any) => {
  const form = new FormData();
  form.append("inputContent", parms.inputContent);
  form.append("width", parms.width);
  form.append("length", parms.length);
  return axios.post(PORT1 + `/predictor`, form);
};
