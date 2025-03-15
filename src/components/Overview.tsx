import { useRouter } from "next/navigation";
interface OverviewProps {
  title: string;
  children?: React.ReactNode;
}

export const topShifts = [
  { ticker: "AAPL", name: "Apple Inc.", change: "+3.2%", sentiment: "🟢 Bullish (67%)" },
  { ticker: "TSLA", name: "Tesla Inc.", change: "-1.5%", sentiment: "🔴 Bearish (54%)" },
  { ticker: "NVDA", name: "NVIDIA Corporation", change: "+5.1%", sentiment: "🟢 Very Bullish (78%)" },
  { ticker: "AMZN", name: "Amazon.com Inc.", change: "-2.3%", sentiment: "🔴 Bearish (45%)" },
  { ticker: "MSFT", name: "Microsoft Corp.", change: "+4.6%", sentiment: "🟢 Bullish (72%)" },
];

export function Overview({ title, children }: OverviewProps) {
  const router = useRouter();
  const toDetails = () => {
    router.push("/details");
  };
  return (
    <div className="rounded-lg p-6 h-full bg-card shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {topShifts.map((shift, index) => (
          <div key={shift.ticker} className="flex cursor-pointer flex-col space-y-1 p-2 hover:bg-muted/50 rounded-lg transition-colors " onClick={toDetails}>
            <div className="flex items-center w-full">
              <span className="text-sm text-muted-foreground w-6">{index + 1}.</span>
              <div className="flex items-center justify-between flex-1">
                <h3 className="font-medium">{shift.ticker}</h3>
                <span className={shift.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                  {shift.change}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground pl-6">{shift.name}</p>
            <p className="text-sm pl-6">{shift.sentiment}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 