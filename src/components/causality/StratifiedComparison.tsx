import type { CausalitySummary } from "@/lib/causality-store";

function fmt(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

/**
 * Lane 4: the overall comparison (top row) next to the same comparison
 * inside each level of Z. The page copy says which row to trust.
 */
export function StratifiedComparison({
  summary,
  x0,
  x1,
  yLabel,
}: {
  summary: CausalitySummary;
  x0: string;
  x1: string;
  yLabel: string;
}) {
  const cell = "border border-line px-3 py-2 text-right tabular-nums";
  const head = "border border-line px-3 py-2 text-left text-sm font-semibold";

  return (
    <div className="mt-4 overflow-x-auto">
      <p className="mb-2 text-sm text-muted">
        Average {yLabel} for {x0} vs {x1}. The gap is {x1} minus {x0}.
      </p>
      <table className="w-full max-w-xl border-collapse bg-surface text-sm">
        <thead>
          <tr>
            <th className={head}>Slice</th>
            <th className={`${head} text-right`}>{x0}</th>
            <th className={`${head} text-right`}>{x1}</th>
            <th className={`${head} text-right`}>Gap</th>
          </tr>
        </thead>
        <tbody>
          {summary.groups.map((g, i) => (
            <tr key={g.label} className={i === 0 ? "font-medium" : undefined}>
              <th className={head}>
                {g.label}
                <span className="block font-normal text-muted">
                  n={g.n0} / {g.n1}
                </span>
              </th>
              <td className={cell}>{fmt(g.mean0)}</td>
              <td className={cell}>{fmt(g.mean1)}</td>
              <td className={cell}>{fmt(g.mean1 - g.mean0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
