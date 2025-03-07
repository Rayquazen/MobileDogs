import {fetchWithAuth} from "@/constants/fetchWithAuth";
import Constants from "expo-constants";
import { setTokens } from "./authStorageTokens";

const API_HOST = Constants.expoConfig?.extra?.API_HOST;

export const registerUser = async (login: string, password: string) => {
	// console.log(API_HOST)
	const response = await fetch(`${API_HOST}/register`, {
		method: "POST",
		body: JSON.stringify({ login, password }),
	});

	if (!response.ok) throw new Error("Ошибка при регистрации")
	return response.json();
};

export const loginUser = async (login: string, password: string) => {
    const response = await fetch(`${API_HOST}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login, password }),
    });

    if (!response.ok) throw new Error("Ошибка при входе");

    const data = await response.json();
    console.log("Ответ сервера:", data.message);

    if (!data.access_token || !data.refresh_token) {
        throw new Error("Отсутствуют токены в ответе сервера");
    }

    setTokens(String(data.access_token), String(data.refresh_token)); // Преобразуем в строку
    return data;
};
