"use client";

import { useEffect, useState } from "react";
import Card from "./ui/card";
import { Coffee } from "./lib/definitions";
import { fetchAllCoffees } from "./lib/data";

export default function Page() {
  const [products, setProducts] = useState<Coffee[] | null>([]);
  const [showAll, setShowAll] = useState<boolean>(true);

  const filteredProducts = showAll
    ? products
    : products?.filter((product) => product.available);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetchAllCoffees();
      setProducts(response);
    };
    try {
      fetchProducts();
    } catch (error) {
      console.error(error);
      setProducts(null);
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-stone-900 p-8">
      <h1 className="text-center text-3xl font-medium text-orange-50">
        Our Collection
      </h1>
      <h2 className="max-w-96 text-center text-sm text-zinc-500">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </h2>
      <div className="flex gap-4">
        <button
          onClick={() => setShowAll(true)}
          className={`rounded-lg px-2 py-1 text-sm font-medium text-orange-50 ${showAll && "bg-zinc-500"}`}
        >
          All Products
        </button>
        <button
          onClick={() => setShowAll(false)}
          className={`rounded-lg px-2 py-1 text-sm font-medium text-orange-50 ${!showAll && "bg-zinc-500"}`}
        >
          Available Now
        </button>
      </div>

      {filteredProducts ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts?.map((coffee) => (
            <Card key={coffee.id} data={coffee} />
          ))}
        </div>
      ) : (
        <div className="p-8 text-center">
          <p className="text-red-400">Failed to fetch all coffees data.</p>
        </div>
      )}
    </main>
  );
}
