import { sanityClient } from "@/sanity/lib/client";
import { GetServerSideProps } from "next";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: { asset: { url: string } };
}

export default function ProductPage({ product }: { product: Product }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <img src={product.image.asset.url} alt={product.title} className="w-full h-80 object-cover rounded-md" />
        <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-green-700 font-bold mt-4 text-2xl">${product.price}</p>
        <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded">Add to Cart</button>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const product = await sanityClient.fetch('*[_type == "product" && _id == $id][0]', { id });
  return { props: { product } };
};
