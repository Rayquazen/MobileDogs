import * as SecureStore from "expo-secure-store";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

// Получение токенов
export const getAccessToken = async () => await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
export const getRefreshToken = async () => await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);

// Сохранение токенов
export const setTokens = async (accessToken: string, refreshToken: string) => {
  if (!accessToken || !refreshToken) {
    console.error("Ошибка: токены отсутствуют!", { accessToken, refreshToken });
    throw new Error("Попытка сохранить пустые токены");
  }

  // console.log("Сохранение токенов:", { accessToken, refreshToken });

  try {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, String(accessToken));
    await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, String(refreshToken));
  } catch (error) {
    console.error("Ошибка при сохранении токенов:", error);
  }
};


// Очистка токенов (выход из аккаунта)
export const clearTokens = async () => {
  await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
  await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
};
