import { Progress } from "@/components/ui/progress";
import { NewsCard } from "./NewsCard";
import { Bar } from "./Bar";

export type News = {
  _id: string;
  page_content: string;
  metadata: {
    title: string;
    source: string;
    publication_date: string;
    importance: string;
    sentiment: string;
    key_observations: string;
    url: string;
    ticket: string;
    description: string;
    event: string;
  };
};

export function RecentInfluential({ news }: { news: News[] }) {
  const sentimentBreakdown = [
    {
      percentage: 35,
      color: "bg-sidebar-accent-foreground",
      sentiment: "Positive",
    }, // Dark blue
    { percentage: 25, color: "bg-muted-foreground", sentiment: "Bearish" }, // Medium blue
    { percentage: 25, color: "bg-ring", sentiment: "Cautious" }, // Light blue
    { percentage: 15, color: "bg-muted", sentiment: "Negative" }, // Very light blue
  ];

  return (
    <div className="w-full rounded-lg p-6 shadow-md">
      <div className="pb-8">
        <h2 className="text-xl font-bold mb-6">Sentiment Score Gauge</h2>
        <div className="flex justify-center items-center gap-4 pb-3">
          <div className="flex pr-3">
            <div className="text-sm">Positive</div>
            <img src="/upArrow.svg" alt="Positive" className="w-4 h-4 mt-0.5" />
          </div>

          <Progress value={60} className="" />
          <div className="text-sm">65%</div>
        </div>
        <div className="flex justify-center items-center gap-4 pt-3">
          <div className="flex pr-3">
            <div className="text-sm">Positive</div>
            <img
              src="/downArrow.svg"
              alt="Positive"
              className="w-4 h-4 mt-0.5"
            />
          </div>
          <Progress value={40} className="" />
          <div className="text-sm">35%</div>
        </div>
      </div>

      <div className="pb-8">
        <h2 className="text-xl font-bold mb-4">Sentiments Breakdown</h2>
        <Bar segments={sentimentBreakdown} height="h-8" />
      </div>

      <h2 className="text-xl font-bold mb-6">Recent Influential</h2>
      <div className="overflow-y-scroll max-h-[340px]">
        <div className="flex relative">
          <div className="flex-1 flex flex-col gap-8 pt-2">
            {news.map((news) => (
              <NewsCard
                key={news._id}
                id={news._id}
                username={news.metadata.source}
                content={news.metadata.title}
                date={news.metadata.publication_date}
                significance={news.metadata.importance.toUpperCase()}
                avatarUrl=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
