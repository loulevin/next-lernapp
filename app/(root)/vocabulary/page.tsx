'use client'

import { IVocabel } from "@/lib/interfaces";
import { useState, useEffect } from "react"; 
import * as config from "@/lib/config"
import axios from "axios";

export default function vocabeltraining() {
  const [ vocabel, setVocabel] = useState<IVocabel[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${config.backendUrl()}/vocabels`)
      const _vocabels = response.data
      setVocabel(_vocabels)
    })()
  }, [])
  return (
    <>
      <h1>Vokabeln</h1>
      {vocabel.map((vocabel, index) => {
        return (
          <li key={index}><span className="font-semibold">{vocabel.japanese}</span> - {vocabel.reading}</li>
        )
      })}
    </>
  );
}
