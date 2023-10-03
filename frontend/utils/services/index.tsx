import axios from "axios";
import api from "./api";
import "cors";

export const signup = async (data: any) => {
  return await api.post(`/users`, data);
};

export const getCryptoCurrencyData = async (userId: number): Promise<any> => {
  const cryptoData = await api.get("/crypto/data");
  const userWatchListDataResponse = await getWatchlistData(userId);
  if (userWatchListDataResponse.data.length !== 0) {
    userWatchListDataResponse.data.map((watchListItem: any) => {
      cryptoData.data.map((cryptoCoin: any) => {
        if (cryptoCoin.cryptoName === watchListItem.cryptoName)
          cryptoCoin.cryptoWatchlisted = true;
      });
    });
  }
  return cryptoData;
};

export const updateCryptoCurrencyData = async (
  data: any,
  id: number
): Promise<any> => {
  return await api.put("/cryptocurrency/" + id, data);
};

export const getWatchlistData = async (userId: number): Promise<any> => {
  return await api.get("/watchlist/" + userId);
};

export const updateWatchlistedData = async (data: any): Promise<any> => {
  return await api.post("/watchlist/add", data);
};

export const removeWatchlistedData = async (id: number, data: any) => {
  try {
    const res = await api.delete("/watchlist/remove/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getPortfolioData = async (id?: number) => {
  return await api.get("portfolio/" + id);
};

export const getWalletDetails = async () => {
  return await api.get("/wallet");
};
export const getTransactionDetails = async () => {
  return await api.get("/transaction");
};

export const getAllUsers = async () => {
  return await api.get("/users");
};

export const patchPassword = async ({
  id,
  password,
}: {
  id: number;
  password: string;
}) => {
  return await api.patch(`/users/${id}`, { password });
};

export const getCryptoCurrencyAPIData = async () => {
  try {
    return await api.get("/crypto/data");
  } catch (error) {
    console.log(error);
  }
};

export const updateWalletDetails = async (data: any) => {
  return await api.post(`/wallet`, data);
};
export const getAllportfolioData = async () => {
  return await api.get("/portfolio");
};

export const logIn = async (data: any) => {
  try {
    return await api.post(`/auth/signin`, data);
  } catch {
    return { status: "Invalid" };
  }
};

export const getUserDetails = async (email: string) => {
  try {
    return await api.get("/users/" + email);
  } catch {
    return { data: { id: 0 }, status: "Invalid" };
  }
};
