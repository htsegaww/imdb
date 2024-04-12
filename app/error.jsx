"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
export default function Error({ error, reset }) {
  useEffect(() => {
    // eslint-disable-next-line
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong... Please try again</h1>
      <Button onClick={() => reset()} className="px-7">
        Try Again
      </Button>
    </div>
  );
}
