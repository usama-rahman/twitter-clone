import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import { CredentialsProvider } from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/libs/prismadb';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { lable: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('invalid Email or password');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPsaaword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPsaaword) {
          throw new Error('Invalid Credentials');
        }

        return user;
      },
    }),
  ],

  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },

  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
