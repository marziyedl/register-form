import axios from "axios";

const qs = require("qs");

export const Adapter = axios.create({
  timeout: 30000,
  paramsSerializer: function (params: any) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});
