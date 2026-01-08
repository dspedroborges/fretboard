import { COLORS } from "./shared.data";

export const getBg = (intervalValue: number) => {
    return COLORS[intervalValue - 1] ?? "transparent";
};