import type { Chord, NoteScaleType } from "../types";
import { CHORD_INTERVALS } from "./data";

export const getHarmonicField = (scale: NoteScaleType[]): Record<string, Chord[]> => {
    console.log(scale);
    return {};
}

export const getIntervalsFromChordNotation = (chord: string) => {
    const match = chord.match(/^([A-G][b#]?)([^()]*)(?:\(([^)]+)\))?$/);
    if (!match) throw new Error("Invalid chord");

    const root = match[1];
    const baseKey = match[2] || "";
    const modifiers = match[3]?.split(",") ?? [];

    const normalizedMods = modifiers.map(m =>
        m === "b13" ? "13-" :
        m === "#11" ? "#11" :
        m
    );

    const fullKey = baseKey + normalizedMods.join("");

    const intervals =
        CHORD_INTERVALS.triads[fullKey] ??
        CHORD_INTERVALS.tetrads[fullKey] ??
        CHORD_INTERVALS.extended[fullKey];

    if (!intervals) {
        throw new Error(`Unsupported chord: ${fullKey}`);
    }

    return {
        root,
        intervals
    };
};
