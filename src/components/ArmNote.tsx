import * as Tone from "tone";
import { getBg } from "../utils/functions";

const synth = new Tone.Synth().toDestination();

type Props = { note: string, intervalValue: number, showNoteValue: boolean, isReference: boolean, isFirstHouse: boolean, octave: number };

export default function ArmNote({ note, intervalValue, showNoteValue, isReference, isFirstHouse, octave }: Props) {

    const playNote = async (note: string) => {
        await Tone.start();
        synth.triggerAttackRelease(`${note}${octave}`, "8n");
    };
    
    return (
        <div
            onClick={() => playNote(note)}
            className={`
        cursor-pointer
        w-full
        flex items-center justify-center
        text-center ${isFirstHouse ? "border-r md:border-r-12 border-gray-300" : "border border-gray-500"} p-2
        relative
        text-white text-[8px] md:text-base font-extralight
        hover:shadow-xl
        hover:opacity-90
        `
            }
            style={{
                backgroundColor: getBg(intervalValue),
            }}
        >
            {
                showNoteValue && note
            }

            {
                isReference && (
                    <div className="h-2 w-2 md:h-4 md:w-4 bg-blue-600 border border-gray-950 rounded-full absolute -bottom-full left-1/2 -translate-x-1/2"></div>
                )
            }
        </div>
    )
}