import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8 pt-5">
      <div className="grid grid-cols-4 gap-4 text-sm text-black/60">
        {/* Header row */}
        <p className="font-semibold ">#</p>
        <p className="font-semibold ">Screen Views</p>
        <p className="font-semibold ">Exist</p>
        <p className="font-semibold ">Drop Off Rate</p>
      </div>
      <div className="space-y-4">
        {salesViews.map((item) => (
          <div
            key={item.hash}
            className="grid text-sm  text-black/80 grid-cols-4 gap-4 items-center"
          >
            {/* # */}
            <p>{item.hash}</p>
            {/* Screen Views */}
            <p>{item.screensViews}</p>
            {/* Exist */}
            <p>{item.exist}</p>
            {/* Drop Off Rate */}
            <p>{item.dropOffRate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

type salesViewsType = {
  hash: number;
  screensViews: number;
  exist: number;
  dropOffRate: number;
};

const salesViews: salesViewsType[] = [
  {
    hash: 1,
    screensViews: 13,
    exist: 9,
    dropOffRate: 69,
  },
  {
    hash: 2,
    screensViews: 6,
    exist: 3,
    dropOffRate: 50,
  },
  {
    hash: 1,
    screensViews: 13,
    exist: 9,
    dropOffRate: 69,
  },
  {
    hash: 2,
    screensViews: 6,
    exist: 3,
    dropOffRate: 50,
  },
  {
    hash: 1,
    screensViews: 13,
    exist: 9,
    dropOffRate: 69,
  },
  {
    hash: 2,
    screensViews: 6,
    exist: 3,
    dropOffRate: 50,
  },
  {
    hash: 1,
    screensViews: 13,
    exist: 9,
    dropOffRate: 69,
  },
  {
    hash: 2,
    screensViews: 6,
    exist: 3,
    dropOffRate: 50,
  },
  {
    hash: 1,
    screensViews: 13,
    exist: 9,
    dropOffRate: 69,
  },
  {
    hash: 2,
    screensViews: 6,
    exist: 3,
    dropOffRate: 50,
  },
  {
    hash: 1,
    screensViews: 13,
    exist: 9,
    dropOffRate: 69,
  },
  {
    hash: 2,
    screensViews: 6,
    exist: 3,
    dropOffRate: 50,
  },
];
