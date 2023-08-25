import { axiosWithoutAuth } from "./config.service";

// async: luôn luôn trả về một promise
export const getAllProduct = async () => {
  const resp = await axiosWithoutAuth("/product");

  return resp.data;
};
