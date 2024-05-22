import { products } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "./add-to-cart";

export const dynamic = "force-static";

type Params = { params: { name: string } };

export default async function ProductPage({
  params: { name: paramName },
}: Params) {
  const product = products.find(({ name }) => name === paramName.toUpperCase());

  if (!product) notFound();

  return (
    <section className="container flex flex-col items-center gap-10 md:px-20 lg:flex-row lg:px-40">
      <Image
        src={product.image}
        width={350}
        height={330}
        alt={product.name.toLocaleLowerCase()}
        className="w-48 md:w-72 lg:w-80"
      />
      <div className="space-y-4 ">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          {product.name}
        </h1>
        <h2 className="text-xl font-semibold tracking-tight md:text-3xl">
          {product.description.toLocaleUpperCase()}
        </h2>
        <p>{product.longDescription}</p>
        <h2 className="text-xl font-semibold md:text-3xl">${product.price}</h2>
        <div className="space-x-2 text-sm md:text-base">
          <AddToCart product={product} />
          <span>or</span>
          <Link
            href="/products"
            className="duration-200 hover:text-lightBlue hover:underline"
          >
            go back to products
          </Link>
        </div>
      </div>
    </section>
  );
}
