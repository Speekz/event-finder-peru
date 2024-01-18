import { useState } from "react";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import { InstantSearch, RefinementList, Stats } from "react-instantsearch-dom";

import { SearchBox } from "@/components/atoms/SearchBox";
import { Pagination } from "@/components/atoms/Pagination";
import { Hits } from "@/components/molecules/Hits";
import Link from "next/link";

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
  const [searchStarted, setSearchStarted] = useState<boolean>(false);

  const handleSearchStateHits = (value: any) => {
    setSearchStarted(value.attributeForMyQuery !== "");

    if (searchValue !== value.attributeForMyQuery) value.page = 1;

    setSearchValue(value.attributeForMyQuery);
  };
  return (
    <div className="w-screen h-screen flex">
      <InstantSearch
        indexName="events"
        searchClient={typesenseInstantsearchAdapter.searchClient}
        onSearchStateChange={handleSearchStateHits}
      >
        {/* <RefinementList attribute="provider" /> */}
        <main className="w-full h-full">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="fixed top-0 bg-white w-full z-10 py-4">
              <div className="flex justify-between items-center w-full">
                <div className="ml-8"></div>
                <div className="flex w-64 md:w-96">
                  <SearchBox />
                </div>
                <div className="mr-4">
                  <Link
                    href="https://github.com/Speekz/event-finder-peru"
                    target="_blank"
                  >
                    <img src="/assets/github-mark.png" className="w-8 h-8" />
                  </Link>
                </div>
              </div>
            </div>
            {searchStarted ? (
              <div className="mt-20 flex flex-col w-full items-center">
                <div className="flex flex-row w-full justify-center">
                  <Pagination />
                </div>
                <div className="h-full w-full inline-flex justify-center">
                  <Hits />
                </div>
              </div>
            ) : (
              <div className="mt-20 flex flex-col w-full items-center">
                <span>¡Empieza a buscar el evento al cual deseas ir!</span>
              </div>
            )}
          </div>
          {/* <Stats /> */}
        </main>
      </InstantSearch>
    </div>
  );
}
