import { useState } from "react";
import ArmNote from "./ArmNote";
import { COLORS, guitarNotes, OCTAVE_MAP, scaleCategories } from "../modules/shared/shared.data";
import { BsSend } from "react-icons/bs";
import type { NoteScaleType } from "../modules/scales/scales.types";
import ScalesService from "../modules/scales/scales.service";

export default function Fretboard() {
    const [_, setScale] = useState<NoteScaleType[]>([]);
    const [notesView, setNotesView] = useState<NoteScaleType[]>([]);
    const [pattern, setPattern] = useState("");
    const [key, setKey] = useState("");
    const scalesService = new ScalesService();

    const getIntervalValue = (note: { value: string, variations: string[] }) => {
        const foundNote = notesView.find(e => {
            return e.note == note.value || note.variations.includes(e.note);
        });

        if (foundNote) return foundNote.interval.value;

        return -1;
    }

    const getNoteName = (armNote: { value: string, variations: string[] }) => {
        let name = "";
        for (const s of notesView) {
            const idx = armNote.variations.indexOf(s.note);
            if (idx !== -1) {
                name = armNote.variations[idx];
                break;
            }
        }

        return name || armNote.value;
    }

    return (
        <main className="min-h-screen select-none pb-24">
            <div className="w-full">
                <div className="flex pb-4">
                    {
                        notesView.map((n, i) => {
                            return (
                                <div
                                    key={i}
                                    className="w-full p-2 text-center text-white first:rounded-l last:rounded-r"
                                    style={{ backgroundColor: COLORS[n.interval.value - 1] }}
                                >{n.interval.value}{n.interval.type} - {n.note}</div>
                            )
                        })
                    }
                </div>
                {
                    guitarNotes.map((string, i) => {
                        return (
                            <div key={i} className="flex bg-gray-950">
                                {
                                    string.map((note, j) => {
                                        return (
                                            <ArmNote
                                                key={j}
                                                note={getNoteName(note)}
                                                intervalValue={getIntervalValue(note)}
                                                isReference={
                                                    (i === 5 && j === 5) ||
                                                    (i === 5 && j === 7) ||
                                                    (i === 5 && j === 9)
                                                }
                                                isFirstHouse={j == 0}
                                                octave={OCTAVE_MAP[i][j]}
                                                showNoteValue={true}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

            <form onSubmit={(e) => {
                e.preventDefault();
                if (key !== "" && pattern !== "") {
                    const generatedScale = scalesService.getScaleByKeyAndPattern(key, pattern);
                    setScale(generatedScale);
                    setNotesView(generatedScale);
                }
            }} className="fixed bottom-0 left-0 w-full flex h-[50px]">
                <select onChange={(e) => setKey(e.target.value)} className="bg-gray-950 text-white p-2 text-lg w-full h-full border-4 border-blue-600 outline-blue-700">
                    <option value="">Choose the key</option>
                    <option value="C">C</option>
                    <option value="C#">C#</option>
                    <option value="D">D</option>
                    <option value="D#">D#</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="F#">F#</option>
                    <option value="G">G</option>
                    <option value="G#">G#</option>
                    <option value="A">A</option>
                    <option value="A#">A#</option>
                    <option value="B">B</option>
                </select>
                <select
                    onChange={(e) => {
                        setPattern(e.target.value);
                    }}
                    className="bg-gray-950 text-white p-2 text-lg w-full h-full border-4 border-blue-600 outline-blue-700"
                >
                    <option value="">Choose the scale</option>

                    {scaleCategories.map(category => (
                        <optgroup key={category.category} label={category.category}>
                            {category.scales.map(scale => (
                                <option key={scale.label} value={scale.value.join(" ")}>{scale.label}</option>
                            ))}
                        </optgroup>
                    ))}
                </select>
                <button className="bg-blue-600 hover:bg-blue-700 w-full text-white uppercase ring-blue-500 basis-1/2 flex items-center justify-center cursor-pointer text-2xl">
                    <BsSend />
                </button>
            </form>
        </main>
    );
}