import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import card from '@/public/images/card.png'
import { Metadata } from "next";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const sessoin = await getServerSession(authOptions)
  return (
    <main>
      <h1>Hello {sessoin && <span>{sessoin.user?.name}</span>}</h1>
      <Link href="/users">UsersPage</Link>
      <ProductCard />
      <Image src={card} alt="Buisness Card" height={180} width={320} quality={100} />

    </main>
  );
}

export const metadata: Metadata = {
  title: 'HomePage',
  description: 'this is our homepage'
}