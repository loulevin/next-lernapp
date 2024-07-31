"use client";

import { IVocabel } from "@/lib/interfaces";
import { useState, useEffect } from "react";
import * as config from "@/lib/config";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function vocabeltraining() {
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
      <h1>Vokabeln</h1>
    

      <Table>
        <TableHeader>
          <TableHead>Japanisch</TableHead>
          <TableHead>Lesung</TableHead>
          <TableHead>Kanji</TableHead>
          <TableHead>Deutsche Übersetzung</TableHead>
        </TableHeader>
        <TableBody>
          {vocabel.map((vocabel, index) => (
            <TableRow key={index}>
              <TableCell>{vocabel.japanese}</TableCell>
              <TableCell>{vocabel.reading}</TableCell>
              <TableCell>{vocabel.kanji}</TableCell>
              <TableCell>{vocabel.translate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
