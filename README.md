# Next CMS Fullstack

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses MySQL with Prisma ORM for full-stack CMS development.

## Getting Started

First, run the development server:

```bash
yarn install
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Full-stack CMS built with Next.js App Router
- Server actions with API routes under `/api/`
- MySQL database connected via Prisma ORM
- Geist font from [Vercel Fonts](https://vercel.com/font)
- Project structure ready for scalability

## Environment Variables

Create a `.env` file in the root of the project:

```env
DATABASE_URL="mysql://your_username:your_password@localhost:3306/your_database"
```

You can update your Prisma schema and push it using:

```bash
npx prisma migrate dev --name init
```

## Learn More

To learn more about Next.js and Prisma:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Prisma Documentation](https://www.prisma.io/docs)

## Deploy

You can deploy this project to [Vercel](https://vercel.com) or any platform that supports Node.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more information.