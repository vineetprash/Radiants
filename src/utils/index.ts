export const DB_URL = "";

export function decodeUser(jwt: string) {
   const name = "user";
   const role = "admin";
   return { name, role };
}
