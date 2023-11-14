"use client";
import Aftersubmit from "@/components/Aftersubmit";
import Beforsumbit from "@/components/Beforsumbit";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [item, setItem] = useState(0);
  return (
    <>
      {!submitted && (
        <Beforsumbit
          setSubmitted={setSubmitted}
          item={item}
          setItem={setItem}
        />
      )}
      {submitted && (
        <Aftersubmit
          setSubmitted={setSubmitted}
          item={item}
          setItem={setItem}
        />
      )}
    </>
  );
}
