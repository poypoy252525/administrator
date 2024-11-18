import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, req) {
        // console.log("username: ", credentials?.username);
        // console.log("password: ", credentials?.password);
        if (credentials?.username !== process.env.ADMIN_USERNAME) return null;
        if (credentials?.password !== process.env.ADMIN_USERNAME) return null;
        return { id: "1", name: "Admin" };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
