// src/app/_contexts/ChatbotProvider.tsx
import { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

const ChatbotContext = createContext<any>(undefined);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [threadId, setThreadId] = useLocalStorage("threadId", undefined);
  const [runId, setRunId] = useLocalStorage<string | undefined>(
    "runId",
    undefined
  );

  const value = {
    setRunId,
    runId,
    setThreadId,
    threadId
  };
  return (
    <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>
  );
}

export const useChatbotContext = () => {
  return useContext(ChatbotContext);
};