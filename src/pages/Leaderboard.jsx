import Table from "../components/ranker/Table.jsx";

export default function Leaderboard() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold font-sans text-blue-900">
          Leaderboard
        </h1>
        <p className="mt-2 text-gray-600 font-body">
          May the best candidate win.
        </p>
      </header>
      <main>
        <Table />
      </main>
    </section>
  );
}
