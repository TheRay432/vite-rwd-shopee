import axios from "axios";

import { useLoadingStore } from "@/stores/Loading/Loading";
import { useModalStore } from "@/stores/Modal/modal";
import KnowModal from "@/components/Modal/KnowModal/KnowModal.vue";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
});

apiInstance.interceptors.request.use(
  (config) => {
    useLoadingStore().showLoading();
    return config;
  },
  (error) => {
    useLoadingStore().hideLoading();
    useModalStore().openModal(KnowModal);
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    console.log("api資料", response);
    useLoadingStore().hideLoading();
    return response;
  },
  (error) => {
    console.log("api失敗", error);
    useLoadingStore().hideLoading();
    useModalStore().openModal(KnowModal);
    return Promise.reject(error);
  }
);

export default apiInstance;
