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
    <input
      type="input"
      value={currentRefinement}
      onChange={(e) => refine(e.currentTarget.value)}
      className="w-96 md:w-42 border-black border-2 shadow-sm"
    />
  );
});
