import axios from 'axios';

const BASE_URL = "http://localhost:3333/api/v0";

export const getAll = async () => {
    try {
        console.log('getAll')
       
        const response = await axios.get(`${BASE_URL}/getproducts`);
        return response.data.result;
    } catch (error) {
        console.error('Lỗi tìm kiếm:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const getById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};

export const add = async (candidate) => {
    try {
        const response = await axios.post(`${BASE_URL}/create`, candidate);
        return response.data;
    } catch (error) {
        console.error('Lỗi thêm ứng viên:', error.response ? error.response.data : error.message);
        throw error;
    }
};


export const dele = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Lỗi xóa ứng viên:', error);
        throw error;
    }
};

export const update = async (id, candidate) => {
    try {
        const response = await axios.put(`${BASE_URL}/update/${id}`, candidate, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Lỗi cập nhật ứng viên:', error);
        throw error;
    }
};