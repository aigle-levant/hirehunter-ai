import { useState } from "react";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { mockResumes } from "@/data/mockResumes";

export default function Feedback() {
  // Only rejected candidates initially
  const [candidates, setCandidates] = useState(
    mockResumes.filter((r) => r.status === "rejected")
  );

  const [open, setOpen] = useState(false);
  const [bulkMode, setBulkMode] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [messages, setMessages] = useState({});

  const handleMessageChange = (id, value) => {
    setMessages((prev) => ({ ...prev, [id]: value }));
  };

  const handleSend = () => {
    if (bulkMode) {
      alert(
        `Sent bulk message: "${
          messages["bulk"] || "Sorry candidate, you got rejected."
        }" to all rejected candidates`
      );
      setCandidates([]); // remove all rows
    } else if (selectedCandidate) {
      const msg = messages[selectedCandidate.id] || "Default AI Message";
      alert(
        `Sent message to ${selectedCandidate.name} (${selectedCandidate.email}): "${msg}"`
      );

      // Remove only the selected candidate
      setCandidates((prev) =>
        prev.filter((c) => (c.id === selectedCandidate.id ? false : true))
      );
    }

    setOpen(false);
    setSelectedCandidate(null);
    setBulkMode(false);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
        Feedback
      </h1>

      {/* Top buttons */}
      <div className="flex justify-end gap-3">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white"
          onClick={() => {
            setBulkMode(true);
            setSelectedCandidate(null);
            setOpen(true);
          }}
        >
          Bulk Reject
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full table-auto text-left">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-gray-700 dark:text-gray-200">
                Name
              </th>
              <th className="px-4 py-2 text-gray-700 dark:text-gray-200">
                Email
              </th>

              <th className="px-4 py-2 text-gray-700 dark:text-gray-200">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {candidates.map((candidate) => (
              <tr
                key={candidate.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-2 text-gray-900 dark:text-gray-100">
                  {candidate.name}
                </td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                  {candidate.email}
                </td>

                <td className="px-4 py-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setBulkMode(false);
                      setSelectedCandidate(candidate);
                      setOpen(true);
                    }}
                  >
                    Reply
                  </Button>
                </td>
              </tr>
            ))}
            {candidates.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-4 text-gray-500 dark:text-gray-400"
                >
                  No rejected candidates
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white">
              {bulkMode
                ? "Bulk Message to Rejected Candidates"
                : selectedCandidate
                ? `Message for ${selectedCandidate.name} (${selectedCandidate.email})`
                : "Set AI Message"}
            </DialogTitle>
          </DialogHeader>

          <input
            type="text"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => {
              const key = bulkMode
                ? "bulk"
                : selectedCandidate?.id
                ? selectedCandidate.id
                : "temp";
              handleMessageChange(key, e.target.value);
            }}
          />

          <DialogFooter>
            <Button onClick={handleSend}>
              <Send className="mr-2 h-4 w-4" /> Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
