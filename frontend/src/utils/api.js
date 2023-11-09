// Archivo: src/utils/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7777/get/GetZapatos', // Cambiar la URL según la configuración del backend
});

export default instance;