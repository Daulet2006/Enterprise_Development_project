import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { usePet, usePets } from "../hooks/usePets"
import { PetForm } from "../components/PetForm"
import Spinner from "../components/Spinner"
import ErrorBlock from "../components/ErrorBlock"
import type { Pet } from "../types/entity.ts"
import { useNotifications } from "../hooks/useNotifications"
import { ArrowLeft, Edit, Trash2 } from "lucide-react"

export default function PetDetail() {
    const { id } = useParams<{ id: string }>()
    const petId = Number(id)
    const navigate = useNavigate()
    const { pet, loading, error, refetch } = usePet(petId)
    const { updatePet, deletePet } = usePets()
    const { addNotification } = useNotifications()
    const [showEditModal, setShowEditModal] = useState(false)
    const [deleteConfirm, setDeleteConfirm] = useState(false)

    const handleDelete = async () => {
        if (!petId) return
        try {
            await deletePet(petId)
            addNotification(
                "Successfully deleted",
                `${pet?.name} was removed from the list`,
                "default"
            )
            navigate("/pets")
        } catch (err: unknown) {
            if (err instanceof Error) console.error(err.message)
            addNotification(
                "Deletion error",
                "Failed to delete pet. Please try again.",
                "destructive"
            )
        }
    }

    const handleUpdate = async (data: Omit<Pet, "id">) => {
        if (!petId) return
        try {
            await updatePet(petId, data)
            setShowEditModal(false)
            refetch()
            addNotification(
                "Successfully updated",
                "Pet information updated",
                "default"
            )
        } catch (err: unknown) {
            if (err instanceof Error) console.error(err.message)
            addNotification(
                "Update error",
                "Failed to update information",
                "destructive"
            )
        }
    }

    if (loading) return <Spinner />
    if (error) return <ErrorBlock message={error} />
    if (!pet) return <ErrorBlock message="Pet not found" />

    return (
        <div className="max-w-4xl mx-auto">
            <Link
                to="/pets"
                className="inline-flex items-center gap-2 text-teal-600 dark:text-emerald-400 hover:underline mb-6 font-medium"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to pets
            </Link>

            <div className="bg-card rounded-xl shadow-lg overflow-hidden mb-6 border border-border">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-square bg-muted">
                        <img
                            src={pet.image || `https://placehold.co/600x600?text=${encodeURIComponent(pet.breed)}`}
                            alt={pet.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6 md:p-8">
                        <h1 className="text-3xl font-bold text-card-foreground mb-4">{pet.name}</h1>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">Breed:</span>
                                <span className="font-medium text-card-foreground">{pet.breed}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">Age:</span>
                                <span className="font-medium text-card-foreground">
                  {pet.age} {pet.age === 1 ? "year" : pet.age < 5 ? "years" : "years"}
                </span>
                            </div>
                        </div>

                        <div className="mb-6">
              <span className="text-3xl font-bold text-teal-600 dark:text-emerald-400">
                {new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: "KZT",
                    maximumFractionDigits: 0,
                }).format(pet.price)}
              </span>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowEditModal(true)}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium shadow-md"
                            >
                                <Edit className="w-4 h-4" />
                                Edit
                            </button>
                            <button
                                onClick={() => setDeleteConfirm(true)}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium shadow-md"
                            >
                                <Trash2 className="w-4 h-4" />
                                Delete
                            </button>
                        </div>

                        <p className="text-sm text-muted-foreground mt-6 p-4 bg-muted rounded-lg">
                            All our pets are vaccinated, chipped, and have veterinary health certificates.
                        </p>
                    </div>
                </div>
            </div>

            {showEditModal && pet && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-card rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border animate-in zoom-in-95 duration-200">
                        <h2 className="text-xl font-bold mb-4 text-card-foreground">Edit pet</h2>
                        <PetForm pet={pet} onSubmit={handleUpdate} onCancel={() => setShowEditModal(false)} />
                    </div>
                </div>
            )}

            {deleteConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-card rounded-xl p-6 max-w-md w-full shadow-2xl border border-border animate-in zoom-in-95 duration-200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                                <Trash2 className="w-6 h-6 text-red-600 dark:text-red-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-card-foreground">Delete {pet.name}?</h2>
                                <p className="text-sm text-muted-foreground">This action cannot be undone</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteConfirm(false)}
                                className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}