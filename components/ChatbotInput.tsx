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
import { SearchIcon, Mic, CircleStop } from "lucide-react";
import { useEffect, useState, useRef } from "react";

import Markdown from "react-markdown";
interface IQuery {
  prompt: string;
  response: string;
}
import axios from "axios";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}
const ChatbotInput = () => {
  const [prompt, setPrompt] = useState("");
  //   const [isModalOpen, setModalOpen] = useState(false);
  const [queries, setQueries] = useState<IQuery[]>([]);

  // Declare a global interface to add the webkitSpeechRecognition property to the Window object

  // Export the MicrophoneComponent function component

  // State variables to manage recording status, completion, and transcript
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [transcript, setTranscript] = useState("");

  // Reference to store the SpeechRecognition instance
  const recognitionRef = useRef<any>(null);

  // Function to start recording
  const startRecording = () => {
    setIsRecording(true);
    // Create a new SpeechRecognition instance and configure it
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    // Event handler for speech recognition results
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];

      // Log the recognition results and update the transcript state
      //   console.log(event.results);
      setTranscript(transcript);
    };

    // Start the speech recognition
    recognitionRef.current.start();
  };

  // Cleanup effect when the component unmounts
  useEffect(() => {
    return () => {
      // Stop the speech recognition if it's active
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Function to stop recording
  const stopRecording = () => {
    if (recognitionRef.current) {
      // Stop the speech recognition and mark recording as complete
      recognitionRef.current.stop();
      setRecordingComplete(true);
    }
  };
  const sendQuery = async () => {
    const result = await axios.post("http://localhost:5000/user-query", {
      query: transcript,
    });
    console.log(result.data);
    const queryObj: IQuery = {
      prompt: transcript,
      response: result.data,
    };
    setQueries((prevQueries) => [...prevQueries, queryObj]);
  };
  // Toggle recording state and manage recording actions
  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
      console.log(transcript);
      sendQuery();
    }
  };

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
    <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
      {/* Form */}
      {/* <form> */}
      <div className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg shadow-lg">
        <div className="flex-[1_0_0%]">
          <Label htmlFor="article" className="sr-only">
            Have any questions? Ask away!
          </Label>
          <Input
            name="article"
            className="h-full"
            id="article"
            placeholder="Have any questions? Ask away!"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        {/* <div className="flex-[0_0_auto]">
                  <Button size={"icon"} onClick={handleSubmit}>
                    <SearchIcon />
                  </Button>
                </div> */}
        {/* {isModalOpen ? ( */}
        <Dialog>
          <DialogTrigger className="flex gap-2">
            <Button size={"icon"} onClick={handleSubmit}>
              <SearchIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[100vw] h-[90vh] overflow-scroll text-lg">
            {queries.length > 0 ? (
              queries.map((query) => (
                <DialogHeader className="my-5">
                  <div className="bg-gray-300 rounded-md p-5">
                    <DialogTitle>{query.prompt}</DialogTitle>
                    <DialogDescription>
                      <Markdown>{query.response}</Markdown>
                    </DialogDescription>
                  </div>
                </DialogHeader>
              ))
            ) : (
              <></>
            )}
          </DialogContent>
        </Dialog>
                  {isRecording ? (
                    <Button size={"icon"} onClick={handleToggleRecording}>
                      <CircleStop />
                    </Button>
                  ) : (
                    <Button size={"icon"} onClick={handleToggleRecording}>
                      <Mic />
                    </Button>
                  )}
        {/* ) : (
                  <></> */}
        {/* )} */}
      </div>
      {/* <DialogTrigger /> */}
      {/* </form> */}
      {/* End Form */}
      {/* SVG Element */}
      {/* <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div> */}
      {/* End SVG Element */}
      {/* SVG Element */}
      {/* <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width={347}
                  height={188}
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </div> */}
      {/* End SVG Element */}
    </div>
  );
};

export default ChatbotInput;
