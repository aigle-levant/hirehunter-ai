import Table from "../components/ranker/Table.jsx";

export default function Leaderboard() {
  return (
    <section>
      <h1 className="font-sans">Leaderboard</h1>
      <p className="inter">May the best candidate win.</p>
      <Table />
    </section>
  );
}
