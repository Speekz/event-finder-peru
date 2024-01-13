import { connectHits } from "react-instantsearch-dom";
import { Hit } from "@/components/atoms/Hit";

export const Hits = connectHits(({ hits }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {hits.length !== 0 ? (
        hits.map((hit: any) => <Hit hit={hit} key={hit.id} />)
      ) : (
        <div>
          <span>No se encontró ningún evento con ese nombre</span>
        </div>
      )}
    </div>
  );
});
