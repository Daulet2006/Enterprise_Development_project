import type React from "react"

import {useState} from "react"
import type {Pet} from "../types/entity.ts"

interface PetFormProps {
    pet?: Pet
    onSubmit: (data: Omit<Pet, "id">) => void
    onCancel: () => void
}

export function PetForm({pet, onSubmit, onCancel}: PetFormProps) {
    const [formData, setFormData] = useState({
        name: pet?.name || "",
        breed: pet?.breed || "",
        age: pet?.age || 1,
        price: pet?.price || 0,
        image: pet?.image || "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pet name</label>
                <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="E.g.: Barsik"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Breed</label>
                <input
                    type="text"
                    required
                    value={formData.breed}
                    onChange={(e) => setFormData({...formData, breed: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="E.g.: British Shorthair"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Age (years)</label>
                <input
                    type="number"
                    required
                    min="0"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: Number(e.target.value)})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price (KZT)</label>
                <input
                    type="number"
                    required
                    min="0"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URL</label>
                <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="https://example.com/image.jpg"
                />
            </div>

            <div className="flex gap-3 pt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-teal-600 dark:bg-emerald-600 text-white rounded-lg hover:bg-teal-700 dark:hover:bg-emerald-700 transition-colors font-medium"
                >
                    {pet ? "Save" : "Create"}
                </button>
            </div>
        </form>
    )
}