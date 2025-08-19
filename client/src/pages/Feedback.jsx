import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
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
  // Only rejected candidates
  const rejectedCandidates = mockResumes.filter((r) => r.status === "rejected");

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
    } else if (selectedCandidate) {
      alert(
        `Sent message to ${selectedCandidate.name} (${
          selectedCandidate.email
        }): "${messages[selectedCandidate.id] || "Default AI Message"}"`
      );
    }
    setOpen(false);
  };

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-900 rounded-2xl">
      <h1 className="ml-5 mt-5 font-helv-bold text-4xl">Feedback</h1>
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

      {/* Feedback cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rejectedCandidates.map((candidate) => (
          <motion.div
            key={candidate.id}
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-white shadow-md rounded-xl flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">
                {candidate.name}{" "}
                <span className="text-gray-500 text-sm">
                  ({candidate.email})
                </span>
              </p>
              <p className="text-sm text-gray-500">Rejected</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setBulkMode(false);
                setSelectedCandidate(candidate);
                setOpen(true);
              }}
            >
              Reply
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {bulkMode
                ? "Bulk Message to Rejected Candidates"
                : selectedCandidate
                ? `Message for ${selectedCandidate.name} (${selectedCandidate.email})`
                : "Set AI Message"}
            </DialogTitle>
          </DialogHeader>

          <input
            type="text"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => {
              const key = bulkMode
                ? "bulk"
                : selectedCandidate?.id
                ? selectedCandidate.id
                : "temp"; // fallback key
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
