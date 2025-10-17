import {useNavigate} from "react-router-dom"
import type {Pet} from "../types/entity.ts"

export default function PetCard({pet}: { pet: Pet }) {
    const navigate = useNavigate()

    return (
        <div
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                    src={pet.image || `https://placehold.co/300x300?text=${encodeURIComponent(pet.breed)}`}
                    alt={pet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            <div className="p-4">
                <span
                    className="inline-block px-2 py-1 text-xs font-medium bg-teal-100 dark:bg-emerald-900/30 text-teal-700 dark:text-emerald-400 rounded-full mb-2">
                    {pet.breed}
                </span>

                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1">{pet.name}</h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Age: {pet.age} {pet.age === 1 ? "year" : pet.age < 5 ? "years" : "years"}
                </p>

                <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-teal-600 dark:text-emerald-400">
                        {new Intl.NumberFormat(undefined, {
                            style: "currency",
                            currency: "KZT",
                            maximumFractionDigits: 0,
                        }).format(pet.price)}
                    </span>
                </div>

                <div className="flex justify-center border-t border-gray-200 dark:border-gray-700 pt-3">
                    <button
                        onClick={() => navigate(`/pets/${pet.id}`)}
                        className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                    >
                        Details
                    </button>
                </div>
            </div>
        </div>
    )
}