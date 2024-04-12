// hooks/useCustomAxios.js
import useUserStore from '@zustand/store';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const API_SERVER = 'https://market-lion.koyeb.app/api';
const REFRESH_URL = '/auth/refresh';

function useCustomAxios() {
  const navigate = useNavigate();
  const location = useLocation();

  // Zustand 스토어에서 사용자 정보 가져오기 및 설정하기
  const { user, setUser } = useUserStore();

  // ajax 통신에 사용할 공통 설정 지정
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 1000 * 10,
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      'client-id': '03-OGC',
    },
  });

  // 요청 인터셉터
  instance.interceptors.request.use((config) => {
    if (user) {
      let token = user.token.accessToken;
      if (config.url === REFRESH_URL) {
        token = user.token.refreshToken;
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // 응답 인터셉터
  instance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const { config, response } = err;
      if (response?.status === 401) {
        if (config.url === REFRESH_URL) {
          const gotoLogin = confirm('로그인 후 이용 가능합니다.\n로그인 페이지로 이동하시겠습니까?');
          gotoLogin && navigate('/users/login', { state: { from: location.pathname } });
        } else {
          const accessToken = await getAccessToken(instance);
          if (accessToken) {
            setUser({ ...user, token: { accessToken } });
            config.headers.Authorization = `Bearer ${accessToken}`;
            return axios(config);
          }
        }
      } else {
        return Promise.reject(err);
      }
    },
  );

  // accessToken 갱신 요청
  async function getAccessToken(instance) {
    try {
      const {
        data: { accessToken },
      } = await instance.get(REFRESH_URL);
      return accessToken;
    } catch (err) {
      console.error(err);
    }
  }

  return instance;
}

export default useCustomAxios;
