import React from "react";

type TopPick = {
  title: string;
  description: string;
  pros: string[];
  cons: string[];
};

type TopPicksGridProps = {
  picks: TopPick[];
};

export const TopPicksGrid: React.FC<TopPicksGridProps> = ({ picks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {picks.map((pick, index) => (
        <div key={index} className="shadow-lg">
          <div>
            <div className="text-xl font-bold">{pick.title}</div>
            <p className="text-sm text-muted-foreground">{pick.description}</p>
          </div>
          <div>
            <div className="mb-4">
              <h4 className="font-semibold">Pros</h4>
              <ul className="list-disc ml-4">
                {pick.pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Cons</h4>
              <ul className="list-disc ml-4">
                {pick.cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
