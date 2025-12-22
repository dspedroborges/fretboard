export function fisherYatesShuffle<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const SEMITONS: Record<string, number> = {
    "1": 0,
    "2m": 1,
    "2M": 2,
    "3m": 3,
    "3M": 4,
    "4-": 4,
    "4J": 5,
    "4A": 6,
    "5-": 6,
    "5J": 7,
    "5A": 8,
    "6m": 8,
    "6M": 9,
    "7-": 9,
    "7m": 10,
    "7M": 11,
    "8J": 12
};

export const POSSIBLE_INTERVALS = [
    "2m",
    "2M",
    "3m",
    "3M",
    "4-",
    "4J",
    "4A",
    "5-",
    "5J",
    "5A",
    "6m",
    "6M",
    "7-",
    "7m",
    "7M",
    "8J"
]

export type IntervalType = typeof POSSIBLE_INTERVALS[number];

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

const getNoteByInterval = (note: string, interval: IntervalType) => {
    const desiredDistance = SEMITONS[interval];
    const sharpAmount = countSubstr(note, "#");
    const bemolAmount = countSubstr(note, "b");
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

    return "8J";
}

export type ScaleType = {
    note: string;
    interval: { value: number, type: string }
}

export const getScaleByKeyAndPattern = (key: string, pattern: string) => {
    const patternSplit = pattern.split(" ");
    let notes: ScaleType[] = [];
    for (let i = 0; i < patternSplit.length; i++) {
        notes.push({
            note: getNoteByInterval(key, patternSplit[i]),
            interval: { value: Number(patternSplit[i].split("")[0]), type: patternSplit[i].split("")[1] },
        });
    }

    return notes;
}

export const COLORS = ["darkred", "#1E3A8A", "#065F46", "#5B21B6", "#7C2D12", "#0F766E", "#374151", "#92400E"];

export const getBg = (intervalValue: number) => {
    return COLORS[intervalValue - 1] ?? "transparent";
};

export const OCTAVE_MAP = [
    [4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5], // E4
    [3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4], // B3
    [3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4], // G3
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4], // D3
    [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // A2
    [2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3]  // E2
];

export const guitarNotes: { value: string; variations: string[] }[][] = [
    // 1ª corda (E agudo)
    [
        { value: "E", variations: ["Fb", "D##"] },
        { value: "F", variations: ["E#", "Gbb"] },
        { value: "F#", variations: ["Gb", "E##"] },
        { value: "G", variations: ["F##", "Abb"] },
        { value: "G#", variations: ["Ab"] },
        { value: "A", variations: ["G##", "Bbb"] },
        { value: "A#", variations: ["Bb", "G###"] },
        { value: "B", variations: ["Cb", "A##"] },
        { value: "C", variations: ["B#", "Dbb"] },
        { value: "C#", variations: ["Db", "B##"] },
        { value: "D", variations: ["C##", "Ebb"] },
        { value: "D#", variations: ["Eb"] },
        { value: "E", variations: ["Fb", "D##"] }
    ],

    // 2ª corda (B)
    [
        { value: "B", variations: ["Cb", "A##"] },
        { value: "C", variations: ["B#", "Dbb"] },
        { value: "C#", variations: ["Db", "B##"] },
        { value: "D", variations: ["C##", "Ebb"] },
        { value: "D#", variations: ["Eb"] },
        { value: "E", variations: ["Fb", "D##"] },
        { value: "F", variations: ["E#", "Gbb"] },
        { value: "F#", variations: ["Gb", "E##"] },
        { value: "G", variations: ["F##", "Abb"] },
        { value: "G#", variations: ["Ab"] },
        { value: "A", variations: ["G##", "Bbb"] },
        { value: "A#", variations: ["Bb"] },
        { value: "B", variations: ["Cb", "A##"] }
    ],

    // 3ª corda (G)
    [
        { value: "G", variations: ["F##", "Abb"] },
        { value: "G#", variations: ["Ab"] },
        { value: "A", variations: ["G##", "Bbb"] },
        { value: "A#", variations: ["Bb"] },
        { value: "B", variations: ["Cb", "A##"] },
        { value: "C", variations: ["B#", "Dbb"] },
        { value: "C#", variations: ["Db", "B##"] },
        { value: "D", variations: ["C##", "Ebb"] },
        { value: "D#", variations: ["Eb"] },
        { value: "E", variations: ["Fb", "D##"] },
        { value: "F", variations: ["E#", "Gbb"] },
        { value: "F#", variations: ["Gb", "E##"] },
        { value: "G", variations: ["F##", "Abb"] }
    ],

    // 4ª corda (D)
    [
        { value: "D", variations: ["C##", "Ebb"] },
        { value: "D#", variations: ["Eb"] },
        { value: "E", variations: ["Fb", "D##"] },
        { value: "F", variations: ["E#", "Gbb"] },
        { value: "F#", variations: ["Gb", "E##"] },
        { value: "G", variations: ["F##", "Abb"] },
        { value: "G#", variations: ["Ab"] },
        { value: "A", variations: ["G##", "Bbb"] },
        { value: "A#", variations: ["Bb"] },
        { value: "B", variations: ["Cb", "A##"] },
        { value: "C", variations: ["B#", "Dbb"] },
        { value: "C#", variations: ["Db", "B##"] },
        { value: "D", variations: ["C##", "Ebb"] }
    ],

    // 5ª corda (A)
    [
        { value: "A", variations: ["G##", "Bbb"] },
        { value: "A#", variations: ["Bb"] },
        { value: "B", variations: ["Cb", "A##"] },
        { value: "C", variations: ["B#", "Dbb"] },
        { value: "C#", variations: ["Db", "B##"] },
        { value: "D", variations: ["C##", "Ebb"] },
        { value: "D#", variations: ["Eb"] },
        { value: "E", variations: ["Fb", "D##"] },
        { value: "F", variations: ["E#", "Gbb"] },
        { value: "F#", variations: ["Gb", "E##"] },
        { value: "G", variations: ["F##", "Abb"] },
        { value: "G#", variations: ["Ab"] },
        { value: "A", variations: ["G##", "Bbb"] }
    ],

    // 6ª corda (E grave)
    [
        { value: "E", variations: ["Fb", "D##"] },
        { value: "F", variations: ["E#", "Gbb"] },
        { value: "F#", variations: ["Gb", "E##"] },
        { value: "G", variations: ["F##", "Abb"] },
        { value: "G#", variations: ["Ab"] },
        { value: "A", variations: ["G##", "Bbb"] },
        { value: "A#", variations: ["Bb"] },
        { value: "B", variations: ["Cb", "A##"] },
        { value: "C", variations: ["B#", "Dbb"] },
        { value: "C#", variations: ["Db", "B##"] },
        { value: "D", variations: ["C##", "Ebb"] },
        { value: "D#", variations: ["Eb"] },
        { value: "E", variations: ["Fb", "D##"] }
    ]
];

export function getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}