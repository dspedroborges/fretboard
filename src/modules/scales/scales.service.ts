import { NEXT_NATURAL_NOTE, POSSIBLE_INTERVALS, SEMITONS } from "./scales.data";
import type { Interval, NoteScaleType } from "./scales.types";

export default class ScalesService {
    getNoteByInterval(note: string, interval: Interval) {
        if (interval == "1J") return note;

        const desiredDistance = SEMITONS[interval];
        const sharpAmount = [...note].filter(c => c === '#').length
        const bemolAmount = [...note].filter(c => c === 'b').length;
        const naturalNote = note.replace(/#/g, "").replace(/b/g, "");
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

    getIntervalFromNotes(note1: string, note2: string) {
        for (let i = 0; i < POSSIBLE_INTERVALS.length; i++) {
            if (this.getNoteByInterval(note1, POSSIBLE_INTERVALS[i]) === note2) {
                return POSSIBLE_INTERVALS[i];
            }
        }

        return "Invalid";
    }

    getScaleByKeyAndPattern(key: string, pattern: string) {
        const patternSplit = pattern.split(" ");

        let notes: NoteScaleType[] = [];
        for (let i = 0; i < patternSplit.length; i++) {
            notes.push({
                note: this.getNoteByInterval(key, patternSplit[i] as Interval),
                interval: { value: Number(patternSplit[i].split("")[0]), type: patternSplit[i].split("")[1] },
            });
        }

        return notes;
    }
}