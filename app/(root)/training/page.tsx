"use client";

import { IVocabel } from "@/lib/interfaces";
import { useState, useEffect } from "react";
import * as config from "@/lib/config";
import axios from "axios";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function training() {
  const [vocabel, setVocabel] = useState<IVocabel[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${config.backendUrl()}/vocabels`);
      const _vocabels = response.data;
      setVocabel(_vocabels);
    })();
  }, []);

  return (
    <>
      <h1>Training</h1>
      {vocabel.map((vocabel, index) => {
        return (
          <Card key={index} className="w-[35rem] bg-slate-400 mx-auto">
            <CardHeader>
              <CardTitle className="text-center bg-teal-500 p-4 gap-2">{vocabel.japanese}</CardTitle>
            </CardHeader>
          </Card>
        );
      })}
    </>
  );
}