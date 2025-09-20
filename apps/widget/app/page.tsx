"use client";
import { Button } from "@workspace/ui/components/button";
import { add } from "@workspace/math/add";
import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { useVapi } from "@/modules/widget/hooks/use-vapi";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const {
    isSpeaking,
    isConnected,
    isConnecting,
    transcript,
    startCall,
    endCall,
  } = useVapi();
  return (
    <div className="flex items-center justify-center min-h-svh max-w-md mx-auto w-full">
      <Button size="sm" onClick={() => startCall()}>
        Start Call
      </Button>
      <Button size="sm" onClick={() => endCall()} variant="destructive">
        End Call
      </Button>
      <p>IsConnecting: {`${isConnecting}`}</p>
      <p>IsConnected: {`${isConnected}`}</p>
      <p>IsSpeaking: {`${isSpeaking}`}</p>
      <p>{JSON.stringify(transcript, null, 2)}</p>
    </div>
  );
}
