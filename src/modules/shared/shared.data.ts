export const scaleCategories = [
    {
        category: "Greek Modes",
        scales: [
            { label: "Ionian (Natural Major)", value: ["1J", "2M", "3M", "4J", "5J", "6M", "7M"] },
            { label: "Dorian", value: ["1J", "2M", "3m", "4J", "5J", "6M", "7m"] },
            { label: "Phrygian", value: ["1J", "2M", "3m", "4J", "5J", "6m", "7m"] },
            { label: "Lydian", value: ["1J", "2M", "3M", "4J", "5J", "6M", "7M"] },
            { label: "Mixolydian", value: ["1J", "2M", "3M", "4J", "5J", "6M", "7m"] },
            { label: "Aeolian (Natural Minor)", value: ["1J", "2M", "3m", "4J", "5J", "6m", "7m"] },
            { label: "Locrian", value: ["1J", "2M", "3m", "4J", "5J", "6m", "7M"] },
        ]
    },
    {
        category: "Japanese Scales",
        scales: [
            { label: "In Sen", value: ["1J", "2M", "4J", "5J", "6m"] },
            { label: "Hirajoshi", value: ["1J", "2m", "4J", "5J", "6m"] },
            { label: "Iwato", value: ["1J", "2m", "4J", "5J", "7m"] },
            { label: "Yo", value: ["1J", "2M", "3M", "5J", "6M"] },
            { label: "Kumoi", value: ["1J", "2M", "4J", "5J", "7m"] },
        ]
    },
    {
        category: "Pentatonics",
        scales: [
            { label: "Major Pentatonic", value: ["1J", "2M", "3M", "5J", "6M"] },
            { label: "Minor Pentatonic", value: ["1J", "3m", "4J", "5J", "7m"] },
        ]
    },
    {
        category: "Pentablues",
        scales: [
            { label: "Major Pentablues", value: ["1J", "2M", "3M", "4A", "5J", "6M"] },
            { label: "Minor Pentablues", value: ["1J", "3m", "4J", "4A", "5J", "7m"] },
        ]
    },
    {
        category: "Harmonic",
        scales: [
            { label: "Harmonic Minor", value: ["1J", "2M", "3m", "4J", "5J", "6m", "7M"] },
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

export const COLORS = [
    "#1A5276",
    "#21618C",
    "#2874A6",
    "#2E86C1",
    "#3498DB",
    "#5DADE2",
    "#85C1E9",
    "#AED6F1"
];

export const keyTranslations: Record<string, { pt: string, en: string }> = {
    "triads": { pt: "Tríades", en: "Triads" },
    "tetrads": { pt: "Tétrades", en: "Tetrads" }
};