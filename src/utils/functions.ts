import { COLORS, POSSIBLE_INTERVALS, SEMITONS } from "./data";
import type { Interval, NoteScaleType } from "./types";

export function fisherYatesShuffle<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function countSubstr(str: string, substr: string): number {
    if (substr === "") return 0;

    let count = 0;
    let i = 0;

    while ((i = str.indexOf(substr, i)) !== -1) {
        count++;
        i += substr.length;
    }

    return count;
}

export const NEXT_NATURAL_NOTE: Record<string, { note: string; distance: number }> = {
    "C": { note: "D", distance: 2 },
    "D": { note: "E", distance: 2 },
    "E": { note: "F", distance: 1 },
    "F": { note: "G", distance: 2 },
    "G": { note: "A", distance: 2 },
    "A": { note: "B", distance: 2 },
    "B": { note: "C", distance: 1 }
};

const getNoteByInterval = (note: string, interval: Interval) => {
    if (interval == "1J") return note;

    const desiredDistance = SEMITONS[interval];
    const sharpAmount = [...note].filter(c => c === '#').length;
    const bemolAmount = [...note].filter(c => c === 'b').length;
    const naturalNote = note.replaceAll("#", "").replaceAll("b", "");
    const intervalAmount = Number(interval.split("")[0]);

    let previous = naturalNote, baseDistance = 0, baseNote = "";
    for (let i = 0; i < intervalAmount - 1; i++) {
        const current = NEXT_NATURAL_NOTE[previous]
        baseDistance += current.distance;
        baseNote = current.note;
        previous = current.note;
    }

    baseDistance = baseDistance - sharpAmount + bemolAmount;

    const positive = desiredDistance - baseDistance > 0;
    const dif = positive ? desiredDistance - baseDistance : (desiredDistance - baseDistance) * -1;
    for (let i = 0; i < dif; i++) {
        if (positive) {
            baseNote += "#";
        } else {
            baseNote += "b";
        }
    }

    return baseNote;
}

export const getInterval = (note1: string, note2: string) => {
    for (let i = 0; i < POSSIBLE_INTERVALS.length; i++) {
        if (getNoteByInterval(note1, POSSIBLE_INTERVALS[i]) === note2) {
            return POSSIBLE_INTERVALS[i];
        }
    }

    return "1J";
}

export const getScaleByKeyAndPattern = (key: string, pattern: string) => {
    const patternSplit = pattern.split(" ");

    let notes: NoteScaleType[] = [];
    for (let i = 0; i < patternSplit.length; i++) {
        notes.push({
            note: getNoteByInterval(key, patternSplit[i] as Interval),
            interval: { value: Number(patternSplit[i].split("")[0]), type: patternSplit[i].split("")[1] },
        });
    }

    return notes;
}


export const getBg = (intervalValue: number) => {
    return COLORS[intervalValue - 1] ?? "transparent";
};

export function getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}