import { products } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Product({ params }: { params: { slug: string } }) {
  const product = products.find(
    ({ name }) => name === params.slug.toLocaleUpperCase(),
  );

  if (!product) {
    notFound();
  }

  return (
    <section className="container flex flex-col items-center gap-10 md:flex-row md:px-40">
      <Image
        src={product.image}
        width={350}
        height={330}
        alt={product.name.toLocaleLowerCase()}
        className="w-48 md:w-72"
      />
      <div className="space-y-4 ">
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <h2 className="text-2xl font-semibold">
          {product.description.toLocaleUpperCase()}
        </h2>
        <p>{product.longDescription}</p>
        <h2 className="text-2xl font-semibold">${product.price}</h2>
        <div className="space-x-4">
          <button className="rounded-full bg-lightBlue px-7 py-3 text-sm font-semibold duration-300 hover:scale-110">
            Add to cart
          </button>
          <span>or</span>
          <Link
            href="/products"
            className="duration-200 hover:text-lightBlue hover:underline"
          >
            Go back to products
          </Link>
        </div>
      </div>
    </section>
  );
}
