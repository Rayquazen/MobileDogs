import { getAccessToken, getRefreshToken, setTokens, clearTokens } from "@/constants/authStorageTokens";

import Constants from "expo-constants";

const API_HOST = Constants.expoConfig?.extra?.API_HOST;

// Функция обновления токенов
const refreshTokens = async () => {
    const refreshToken = await getRefreshToken();
    if (!refreshToken) {
      await clearTokens();
      throw new Error("No refresh token available");
    }
  
    try {
      const res = await fetch(`${API_HOST}/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });
  
      if (!res.ok) {
        await clearTokens();
        throw new Error("Failed to refresh token");
      }
  
      const data = await res.json();
      await setTokens(data.access_token, data.refresh_token);
      return data.access_token;
    } catch (err) {
      await clearTokens();
      throw err;
    }
  };
  
  // Функция запросов с автообновлением токена
  export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    let accessToken = await getAccessToken();
    console.log(accessToken);
    if (!accessToken) {
      await clearTokens();
      throw new Error("No access token available");
    }
  
    const authHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...options.headers,
    };
  
    try {
      const response = await fetch(url, { ...options, headers: authHeaders });
  
      // Если access_token истёк — пробуем обновить
      if (response.status === 401) {
        accessToken = await refreshTokens(); // Обновляем токен
  
        const retryHeaders = {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          ...options.headers,
        };
  
        return await fetch(url, { ...options, headers: retryHeaders });
      }
  
      return response;
    } catch (err) {
      await clearTokens();
      throw err;
    }
  };