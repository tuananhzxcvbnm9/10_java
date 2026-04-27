import { client } from "./client";
import { RESOURCE_PATH } from "../lib/constants";
export type DomainItem = { id: number; name: string; status: string };
export const domainApi = {
  list: async (): Promise<DomainItem[]> => (await client.get(`/${RESOURCE_PATH}`)).data,
  create: async (payload: { name: string; status: string }) => (await client.post(`/${RESOURCE_PATH}`, payload)).data,
  remove: async (id: number) => client.delete(`/${RESOURCE_PATH}/${id}`)
};
