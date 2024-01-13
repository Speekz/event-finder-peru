import { connectPagination } from "react-instantsearch-dom";
import classNames from "classnames";
import { Button } from "@material-tailwind/react";

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const Pagination = connectPagination(
  ({ padding = 2, refine, currentRefinement, nbPages }) => {
    const pagesCount = range(
      Math.max(1, currentRefinement - padding),
      Math.min(nbPages, currentRefinement + padding)
    ).length;

    return (
      <div className="flex flex-row gap-2">
        {pagesCount > 1 ? (
          <Button size="sm" placeholder={false} onClick={() => refine(1)}>
            {"<<"}
          </Button>
        ) : null}
        {range(
          Math.max(1, currentRefinement - padding),
          Math.min(nbPages, currentRefinement + padding)
        ).map((page) => (
          <Button
            size="sm"
            placeholder={false}
            key={page}
            onClick={() => refine(page)}
            color={currentRefinement === page ? "light-green" : "black"}
            // className={classNames({
            //   "text-red-600": currentRefinement === page,
            // })}
          >
            {page}
          </Button>
        ))}
        {pagesCount > 1 ? (
          <Button size="sm" placeholder={false} onClick={() => refine(nbPages)}>
            {">>"}
          </Button>
        ) : null}
      </div>
    );
  }
);
