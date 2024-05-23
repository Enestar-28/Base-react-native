import axios from "axios";

const BASE_URL = "http://kiemtra.stecom.vn:8888/api/benh-nhan/PTN217766";

export const getAll = async () => {
  try {
    const url = `${BASE_URL}/get-all`;
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.items;
  } catch (error) {
    console.error(
      "Lỗi tìm kiếm:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const addPatient = async (patient) => {
  try {
    const response = await axios.post(`${BASE_URL}/create`, patient);
    return response.data;
  } catch (error) {
    console.error(
      "Lỗi thêm bênh nhân:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const dele = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi xóa bệnh nhân:", error);
    throw error;
  }
};

