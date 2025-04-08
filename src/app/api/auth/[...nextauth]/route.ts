import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === "admin" &&
          credentials?.password === "12345"
        ) {
          return { id: "1", name: "Abdelrahman", email: "AbdelrahmanHabib@gmail.com" };
        }
        return null;
      },
    }),
  ],
  
});

export { handler as GET, handler as POST };
