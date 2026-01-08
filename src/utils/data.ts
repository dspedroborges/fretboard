import type { Interval } from "./types";

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

export const scaleCategories = [
    {
        category: "Modos Gregos",
        scales: [
            { label: "Jônio (Maior natural)", value: ["1J", "2M", "3M", "4J", "5J", "6M", "7M"] },
            { label: "Dórico", value: ["1J", "2M", "3m", "4J", "5J", "6M", "7m"] },
            { label: "Frígio", value: ["1J", "2M", "3m", "4J", "5J", "6m", "7m"] },
            { label: "Lídio", value: ["1J", "2M", "3M", "4J", "5J", "6M", "7M"] },
            { label: "Mixolídio", value: ["1J", "2M", "3M", "4J", "5J", "6M", "7m"] },
            { label: "Eólio (Menor natural)", value: ["1J", "2M", "3m", "4J", "5J", "6m", "7m"] },
            { label: "Lócrio", value: ["1J", "2M", "3m", "4J", "5J", "6m", "7M"] },
        ]
    },
    {
        category: "Escalas Japonesas",
        scales: [
            { label: "In Sen", value: ["1J", "2M", "4J", "5J", "6m"] },
            { label: "Hirajoshi", value: ["1J", "2m", "4J", "5J", "6m"] },
            { label: "Iwato", value: ["1J", "2m", "4J", "5J", "7m"] },
            { label: "Yo", value: ["1J", "2M", "3M", "5J", "6M"] },
            { label: "Kumoi", value: ["1J", "2M", "4J", "5J", "7m"] },
        ]
    },
    {
        category: "Pentatônicas",
        scales: [
            { label: "Pentatônica Maior", value: ["1J", "2M", "3M", "5J", "6M"] },
            { label: "Pentatônica Menor", value: ["1J", "3m", "4J", "5J", "7m"] },
        ]
    },
    {
        category: "Pentablues",
        scales: [
            { label: "Pentablues Maior", value: ["1J", "2M", "3M", "4A", "5J", "6M"] },
            { label: "Pentablues Menor", value: ["1J", "3m", "4J", "4A", "5J", "7m"] },
        ]
    },
        {
        category: "Harmônica",
        scales: [
            { label: "Menor harmônica", value: ["1J", "2M", "3m", "4J", "5J", "6m", "7M"] },
        ]
    }
];

export const OCTAVE_MAP = [
    [4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5], // E4
    [3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // B3
    [3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4], // G3
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4], // D3
    [2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // A2
    [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]  // E2
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

export const COLORS = ["darkred", "#1E3A8A", "#065F46", "#5B21B6", "#7C2D12", "#0F766E", "#374151"];

export const keyTranslations: Record<string, {pt: string, en: string }> = {
    "triads": { pt: "Tríades", en: "Triads" },
    "tetrads": { pt: "Tétrades", en: "Tetrads" }
};