/**
 * Station 2.4: four views of the same Bernoulli business — story, support,
 * probability, and expected payoff.
 */
export function BernoulliFourViews({
  theta,
  onSuccess,
  onFailure,
}: {
  theta: number;
  onSuccess: number;
  onFailure: number;
}) {
  const expected = theta * onSuccess + (1 - theta) * onFailure;
  const money = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const views = [
    {
      label: "Story",
      body: `X = 1 when the try works (payoff ${money(onSuccess)}); X = 0 when it does not (payoff ${money(onFailure)}).`,
    },
    {
      label: "Support",
      body: "X can only be 0 or 1. Nothing in between.",
    },
    {
      label: "Probability",
      body: `P(X = 1) = ${theta.toFixed(2)}, so P(X = 0) = ${(1 - theta).toFixed(2)}.`,
    },
    {
      label: "Expected payoff",
      body: `${theta.toFixed(2)} × ${money(onSuccess)} + ${(1 - theta).toFixed(2)} × ${money(onFailure)} = ${money(expected)}.`,
    },
  ];

  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {views.map((view) => (
        <li key={view.label} className="rounded-xl border border-line bg-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            {view.label}
          </p>
          <p className="mt-2 text-sm">{view.body}</p>
        </li>
      ))}
    </ul>
  );
}
