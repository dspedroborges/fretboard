import type { Chord } from "../utils/types"

export default function Chords({ title, chords, onClick }: { title: string, chords: Chord[], onClick: Function }) {
    return (
        <div>
            <h3 className="text-center text-2xl font-bold text-white mt-8 mb-2">{title}</h3>
            <div className="flex gap-2 items-center justify-center">
                {
                    chords.map((chord, i) => {
                        return (
                            <div
                                key={i}
                                className="text-white bg-gray-800 p-4 rounded hover:bg-gray-900 cursor-pointer"
                                onClick={() => onClick(chord.intervals)}
                            >
                                {chord.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}