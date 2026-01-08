import type { Interval } from "./scales.types";

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

export const POSSIBLE_INTERVALS: Interval[] = [
    "1J",
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

export const NEXT_NATURAL_NOTE: Record<string, { note: string; distance: number }> = {
    "C": { note: "D", distance: 2 },
    "D": { note: "E", distance: 2 },
    "E": { note: "F", distance: 1 },
    "F": { note: "G", distance: 2 },
    "G": { note: "A", distance: 2 },
    "A": { note: "B", distance: 2 },
    "B": { note: "C", distance: 1 }
};