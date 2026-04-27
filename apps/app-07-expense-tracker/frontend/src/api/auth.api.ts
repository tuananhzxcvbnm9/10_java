import { client } from "./client";
export const authApi = {
  login: async () => (await client.post("/auth/login")).data,
  me: async () => (await client.get("/auth/me")).data
};
