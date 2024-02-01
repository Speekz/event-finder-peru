import { Input } from "@material-tailwind/react";
import { createConnector } from "react-instantsearch-dom";

const connectWithQuery = createConnector({
  displayName: "WidgetWithQuery",
  getProvidedProps(props, searchState) {
    const currentRefinement = searchState.attributeForMyQuery || "";

    return { currentRefinement };
  },
  refine(props, searchState, nextRefinement) {
    return {
      ...searchState,
      attributeForMyQuery: nextRefinement,
    };
  },
  getSearchParameters(searchParameters, props, searchState) {
    return searchParameters.setQuery(searchState.attributeForMyQuery || "");
  },
  cleanUp(props, searchState) {
    const { attributeForMyQuery, ...nextSearchState } = searchState;

    return nextSearchState;
  },
});

export const SearchBox = connectWithQuery(({ currentRefinement, refine }) => {
  return (
    <Input
      crossOrigin="false"
      value={currentRefinement}
      onChange={(e) => refine(e.currentTarget.value)}
      label="Busca tu evento..."
      size="md"
      icon={
        <div className="hover:cursor-pointer" onClick={() => refine("")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      }
    />
  );
});
