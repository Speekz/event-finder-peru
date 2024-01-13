import { connectPagination } from "react-instantsearch-dom";
import classNames from "classnames";

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const Pagination = connectPagination(
  ({ padding = 2, refine, currentRefinement, nbPages }) => {
    return (
      <div className="flex flex-row gap-2">
        <button onClick={() => refine(1)}>{"<<"}</button>
        {range(
          Math.max(1, currentRefinement - padding),
          Math.min(nbPages, currentRefinement + padding)
        ).map((page) => (
          <button
            key={page}
            onClick={() => refine(page)}
            className={classNames({
              "text-red-600": currentRefinement === page,
            })}
          >
            {page}
          </button>
        ))}
        <button onClick={() => refine(nbPages)}>{">>"}</button>
      </div>
    );
  }
);
