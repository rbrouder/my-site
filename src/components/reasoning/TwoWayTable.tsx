/**
 * Station 2.3: a natural-frequency 2×2 table for the latest plausibility
 * problem. Counts use the same 10,000 imagined cases as the decide route.
 */
export function TwoWayTable({
  baseRate,
  hitRate,
  falseAlarmRate,
}: {
  baseRate: number;
  hitRate: number;
  falseAlarmRate: number;
}) {
  const N = 10000;
  const hasCondition = N * baseRate;
  const clean = N * (1 - baseRate);
  const trueFlags = hasCondition * hitRate;
  const misses = hasCondition * (1 - hitRate);
  const falseFlags = clean * falseAlarmRate;
  const trueNegatives = clean * (1 - falseAlarmRate);

  const cell = "border border-line px-3 py-2 text-right tabular-nums";
  const head = "border border-line px-3 py-2 text-left text-sm font-semibold";

  return (
    <div className="mt-4 overflow-x-auto">
      <p className="mb-2 text-sm text-muted">
        Imagining {N.toLocaleString()} cases, the way the API does the arithmetic.
      </p>
      <table className="w-full max-w-lg border-collapse bg-surface text-sm">
        <thead>
          <tr>
            <th className={head}></th>
            <th className={head}>Flagged</th>
            <th className={head}>Not flagged</th>
            <th className={head}>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={head}>Has the condition</th>
            <td className={cell}>{Math.round(trueFlags)}</td>
            <td className={cell}>{Math.round(misses)}</td>
            <td className={cell}>{Math.round(hasCondition)}</td>
          </tr>
          <tr>
            <th className={head}>Does not</th>
            <td className={cell}>{Math.round(falseFlags)}</td>
            <td className={cell}>{Math.round(trueNegatives)}</td>
            <td className={cell}>{Math.round(clean)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
