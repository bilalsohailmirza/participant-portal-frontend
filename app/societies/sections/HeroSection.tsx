import ChatbotInput from "@/components/ChatbotInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";
interface IQuery {
  prompt: string;
  response: string;
}

export function SocietyHeroSection() {
  const [prompt, setPrompt] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [queries, setQueries] = useState<IQuery[]>([]);

  const handleSubmit = async () => {
    // setModalOpen(true);
    const result = await axios.post("http://localhost:5000/user-query", {
      query: prompt,
    });
    const queryObj: IQuery = {
      prompt: prompt,
      response: result.data,
    };
    setQueries((prevQueries) => [...prevQueries, queryObj]);
  };
  return (
    <>
      {/* Hero */}
      <div className="overflow-hidden">
        <div className="container py-24 lg:pt-32">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Student Societies at NUCES Karachi
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Explore Student societies at our campus that keep the campus
              lively and energetic!
            </p>
            <ChatbotInput />
          </div>
        </div>
      </div>

      {/* End Hero */}
    </>
  );
}
