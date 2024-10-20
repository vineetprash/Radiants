export const DB_URL = "https://inventory-mtia.onrender.com/";

export function decodeUser(jwt: string) {
   const name = "user";
   const role = "admin";
   return { name, role };
}
