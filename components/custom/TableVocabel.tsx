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
  import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export default function TableVocabel() {
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
      <Table className="bg-teal-200 w-[40rem]">
        <TableHeader>
          <TableHead>Japanisch</TableHead>
          <TableHead>Lesung</TableHead>
          <TableHead>Kanji</TableHead>
          <TableHead>Deutsche Übersetzung</TableHead>
          <TableHead>Level</TableHead>
          <TableHead className="">Bearbeitung</TableHead>
        </TableHeader>
        <TableBody>
          {vocabel.map((vocabel, index) => (
            <TableRow key={index}>
              <TableCell className="font-semibold">
                {vocabel.japanese}
              </TableCell>
              <TableCell>{vocabel.reading}</TableCell>
              <TableCell>{vocabel.kanji}</TableCell>
              <TableCell>{vocabel.translate}</TableCell>
              <TableCell>{vocabel.level}</TableCell>
              <TableCell className="flex justify-center items-center gap-2">
                <FaPencilAlt className="icons-layout-green" />{" "}
                <FaTrashAlt className="icons-layout-red" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}