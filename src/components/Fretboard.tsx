import { useState } from "react";
import { COLORS, getInterval, getScaleByKeyAndPattern, guitarNotes, OCTAVE_MAP, type ScaleType } from "../utils/functions";
import ArmNote from "./ArmNote";
import { CHORDS } from "../utils/data";

export default function Fretboard() {
    const [scale, setScale] = useState<ScaleType[]>([]);
    const [pattern, setPattern] = useState("");
    const [key, setKey] = useState("");

    const getIntervalValue = (note: { value: string, variations: string[] }) => {
        if (note.value == key || note.variations.includes(key)) return 1;

        const foundNote = scale.find(e => {
            return e.note == note.value || note.variations.includes(e.note);
        });

        if (foundNote) return foundNote.interval.value;

        return -1;
    }

    const getNoteByScalePosition = (scalePosition: number) => {
        for (const s of scale) {
            if (s.interval.value == scalePosition) {
                return s;
            }
        }
    }

    const getChordNotes = (scalePositions: number[]) => {
        let notes = [];
        for (let i = 0; i < scalePositions.length; i++) {
            const note = getNoteByScalePosition(scalePositions[i]);
            if (!note) continue;
            notes.push(note.note);
        }

        return notes;
    }

    const getNotesRelation = (notes: string[]) => {
        let intervals = [];
        for (let i = 0; i < notes.length; i++) {
            if (!notes[i + 1]) break;
            intervals.push(getInterval(notes[0], notes[i + 1]));
        }

        return intervals;
    }

    const chordNotes = getChordNotes(CHORDS.seventhNinths[0]);
    const chordIntervals = getNotesRelation(chordNotes);
    console.log(chordIntervals);

    const getNoteName = (armNote: { value: string, variations: string[] }) => {
        let name = "";
        for (const s of scale) {
            const idx = armNote.variations.indexOf(s.note);
            if (idx !== -1) {
                name = armNote.variations[idx];
                break;
            }
        }

        return name || armNote.value;
    }

    return (
        <main className="min-h-screen bg-gray-950 bg-opacity-80 bg-blend-multiply bg-[url('/guitar.jpg')] bg-center bg-cover select-none">
            <div className="w-full">
                <div className="p-2 border-gray-500 mb-4">
                    <label htmlFor="legend" className="text-white font-bold block mb-2">Legend:</label>
                    <div id="legend" className="flex">
                        {
                            COLORS.map((c, i) => {
                                return (    
                                    <div
                                        key={i}
                                        className="w-full p-2 text-center text-white first:rounded-l last:rounded-r"
                                        style={{ backgroundColor: c }}
                                    >{i + 1}</div>
                                )
                            })
                        }
                    </div>
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
                    setScale(getScaleByKeyAndPattern(key, pattern));
                }
            }} className="fixed bottom-0 left-0 w-full flex h-[50px]">
                <select onChange={(e) => setKey(e.target.value)} className="bg-gray-950 text-white p-2 text-lg w-full h-full border-4 border-blue-600 outline-blue-700">
                    <option value="">Selecione uma opção</option>
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
                <select onChange={(e) => setPattern(e.target.value)} className="bg-gray-950 text-white p-2 text-lg w-full h-full border-4 border-blue-600 outline-blue-700">
                    <option value="">Selecione uma opção</option>

                    {/* Modos gregos */}
                    <optgroup label="Modos Gregos">
                        <option value="2M 3M 4J 5J 6M 7M 8J">Maior natural (Jônio)</option>
                        <option value="2M 3m 4J 5J 6M 7m 8J">Dórico</option>
                        <option value="2M 3m 4J 5J 6m 7m 8J">Frígio</option>
                        <option value="2M 3M 4J 5J 6M 7M 8J">Lídio</option>
                        <option value="2M 3M 4J 5J 6M 7m 8J">Mixolídio</option>
                        <option value="2M 3m 4J 5J 6m 7m 8J">Eólio (Menor natural)</option>
                        <option value="2M 3m 4J 5J 6m 7M 8J">Lócrio</option>
                    </optgroup>

                    {/* Escalas japonesas */}
                    <optgroup label="Escalas Japonesas">
                        <option value="2M 4J 5J 6m 8J">In Sen</option>
                        <option value="2m 4J 5J 6m 8J">Hirajoshi</option>
                        <option value="2m 4J 5J 7m 8J">Iwato</option>
                        <option value="2M 3M 5J 6M 8J">Yo</option>
                        <option value="2M 4J 5J 7m 8J">Kumoi</option>
                    </optgroup>
                </select>
                <button className="bg-blue-600 hover:bg-blue-700 block w-full text-white uppercase ring-blue-500 basis-1/2">Enviar</button>
            </form>
        </main>
    );
}