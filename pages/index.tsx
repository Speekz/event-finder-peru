import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import {
  Hits,
  InstantSearch,
  // Pagination,
  RefinementList,
  Stats,
} from "react-instantsearch-dom";

import type { Event } from "@/utils/types";
import { SearchBox } from "@/components/atom/SearchBox";
import { Pagination } from "@/components/atom/Pagination";
import { useState } from "react";

const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: process.env.NEXT_PUBLIC_TYPESENSE_API_KEY as string,
    nodes: [
      {
        host: process.env.NEXT_PUBLIC_TYPESENSE_HOST as string,
        port: 443,
        protocol: "https",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title,provider",
    query_by_weights: "4,1",
  },
});

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  const Hit = ({ hit }: { hit: Event }) => <p>{hit.title}</p>;
  const se = (value: any) => {
    if (searchValue !== value.attributeForMyQuery) value.page = 1;

    setSearchValue(value.attributeForMyQuery);
  };
  return (
    <div className="w-screen h-screen flex">
      <InstantSearch
        indexName="events"
        searchClient={typesenseInstantsearchAdapter.searchClient}
        onSearchStateChange={se}
      >
        {/* <RefinementList attribute="provider" /> */}
        <main className="flex w-full h-full ">
          <div className="flex flex-1 flex-col items-center justify-center border-4 border-red-400">
            <SearchBox />
            <div className="flex flex-col w-1/2 items-center border-4 border-blue-400">
              <div className="flex h-72 w-full items-left">
                <Hits hitComponent={Hit} />
              </div>
              <div className="flex flex-row w-full justify-center">
                <Pagination />
              </div>
            </div>
          </div>
          {/* <Stats /> */}
        </main>
      </InstantSearch>
    </div>
  );
}
