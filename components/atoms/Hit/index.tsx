import type { Event } from "@/utils/types";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export const Hit = ({ hit }: { hit: Event }) => {
  return (
    <div className="flex flex-col items-center justify-center pl-2 pr-4 py-4">
      <div className="shadow-lg rounded-b-xl">
        <Link href={hit.url} target="_blank">
          <img
            src={hit.imageURL}
            alt={hit.title}
            className="block rounded-t-xl w-[280px] h-[180px] md:w-[340px] md:h-[220px] xl:w-[340px] xl:h-[200px]"
          />
        </Link>
        <div className="h-44 w-[280px] md:w-[340px] xl:w-[340px] bg-white grid grid-cols-7 grid-rows-5 opacity-90 rounded-b-xl">
          <div className="col-span-7 row-span-3 flex items-center justify-left mx-2">
            <h3 className="font-bold">{hit.title}</h3>
          </div>
          <div className="col-span-7 row-span-2 flex items-center justify-center mx-2">
            <Link href={hit.url} passHref target="_blank" className="w-full">
              <Button
                color="black"
                variant="filled"
                fullWidth
                placeholder="Comprar Entradas"
              >
                Comprar en {hit.provider}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
