import { products } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

type Params = { params: { name: string } };

export default async function ProductPage({ params: { name } }: Params) {
  return await Product(name.toUpperCase());
}

// using server action for faster page load
async function Product(paramName: string) {
  "use server";

  const product = products.find(({ name }) => name === paramName);

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
        <h1 className="text-3xl font-bold md:text-5xl">{product.name}</h1>
        <h2 className="text-xl font-semibold md:text-3xl">
          {product.description.toLocaleUpperCase()}
        </h2>
        <p>{product.longDescription}</p>
        <h2 className="text-xl font-semibold md:text-3xl">${product.price}</h2>
        <div className="space-x-2 text-sm md:text-base">
          <button className="rounded-full bg-lightBlue px-7 py-3 font-semibold duration-300 hover:scale-110">
            Add to cart
          </button>
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
