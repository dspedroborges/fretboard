export type NoteScaleType = {
    note: string;
    interval: { value: number, type: string }
}

export type Chord = {
    name: string;
    intervals: NoteScaleType[]
}

export type Interval =
  | "1J"
  | "2m" | "2M" | "2A"
  | "3m" | "3M"
  | "4-" | "4J" | "4A"
  | "5-" | "5J" | "5A"
  | "6m" | "6M"
  | "7-" | "7m" | "7M"
  | "8J";