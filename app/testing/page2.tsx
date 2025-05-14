"use client";
import React from "react";
import useSpeechRecognition from "@/hooks/useSpeechRecognition";

const Main = () => {
  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();
  return (
    <div className="">
      {hasRecognitionSupport ? (
        <>
          <div className="">
            <button
              className="p-5 bg-blue-300 rounded-lg m-5"
              onClick={startListening}
            >
              Start Listening
            </button>
            <button
              className="p-5 bg-red-500 rounded-lg m-5"
              onClick={stopListening}
            >
              Stop Listening
            </button>
            {isListening ? (
              <div className="">Your browser is currently listening & {text}</div>
            ) : <div className="">Your browser is currently not listening & {text}</div>}
          </div>
        </>
      ) : (
        <h1>Your browser does ont support speech recognition</h1>
      )}
    </div>
  );
};

export default Main;
