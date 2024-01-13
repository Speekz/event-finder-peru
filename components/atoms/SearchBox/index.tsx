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
      crossOrigin={false}
      value={currentRefinement}
      onChange={(e) => refine(e.currentTarget.value)}
      label="Busca tu evento..."
      size="md"
    />
  );
});
