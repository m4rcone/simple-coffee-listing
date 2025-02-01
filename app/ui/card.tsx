import Image from "next/image";
import { Coffee } from "../lib/definitions";

interface CardProps {
  data: Coffee;
}

export default function Card({ data }: CardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        {data.popular && (
          <span className="absolute left-2 top-2 rounded-full bg-orange-300 px-2 py-1 text-xs font-medium text-stone-900">
            Popular
          </span>
        )}
        <Image
          width={260}
          height={160}
          src={data.image}
          alt={data.name}
          className="rounded-2xl"
          priority
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-orange-50">{data.name}</span>
        <span className="rounded-md bg-green-200 p-1 text-xs font-medium text-stone-900">
          {data.price}
        </span>
      </div>
      <div className="flex items-center justify-between">
        {data.rating ? (
          <div className="flex items-center gap-1">
            <Image
              width={24}
              height={24}
              src="/resources/star_fill.svg"
              alt="Estrela"
            />
            <span className="text-sm font-medium text-orange-50">
              {data.rating}
            </span>
            <span className="text-sm font-medium text-zinc-500">
              ({data.votes} votes)
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <Image
              width={24}
              height={24}
              src="/resources/star.svg"
              alt="Estrela"
            />
            <span className="text-sm font-medium text-zinc-500">
              No ratings
            </span>
          </div>
        )}
        <div>
          {!data.available && (
            <span className="text-end text-sm font-medium text-red-400">
              Sold out
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
