export function SystemsMotif() {
  const nodes = [
    { x: 60, y: 60 },
    { x: 200, y: 30 },
    { x: 320, y: 110 },
    { x: 90, y: 190 },
    { x: 230, y: 170 },
    { x: 160, y: 280 },
    { x: 320, y: 250 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 4],
    [1, 4],
    [3, 4],
    [0, 3],
    [4, 6],
    [3, 5],
    [5, 6],
    [2, 6],
  ];

  return (
    <svg
      viewBox="0 0 380 320"
      role="img"
      aria-label="Abstract diagram of connected system nodes"
      className="h-auto w-full text-accent-strong"
    >
      <g stroke="currentColor" strokeOpacity="0.28" strokeWidth="1">
        {edges.map(([a, b], i) => {
          const p = nodes[a]!;
          const q = nodes[b]!;
          return <line key={i} x1={p.x} y1={p.y} x2={q.x} y2={q.y} />;
        })}
      </g>

      <g>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={i % 3 === 0 ? 5 : 3.5} fill="currentColor" />
            <circle
              cx={n.x}
              cy={n.y}
              r={14}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.16"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
