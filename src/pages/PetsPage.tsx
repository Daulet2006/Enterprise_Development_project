import {useState} from "react"
import {usePets} from "../hooks/usePets"
import PetCard from "../components/PetCard"
import Spinner from "../components/Spinner"
import ErrorBlock from "../components/ErrorBlock"
import {PetForm} from "../components/PetForm"
import type {Pet} from "../types/entity.ts"
import {useNotifications} from "../hooks/useNotifications"
import {Plus, Search} from "lucide-react"

export default function PetsPage() {
    const {pets, loading, error, createPet, refetch} = usePets()
    const {addNotification} = useNotifications()
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [sortBy, setSortBy] = useState<"name" | "price" | "age">("name")

    const handleCreate = async (data: Omit<Pet, "id">) => {
        try {
            await createPet(data)
            setShowCreateModal(false)
            addNotification(
                "Success!",
                "Pet successfully added",
                "default"
            )
        } catch (err: unknown) {
            if (err instanceof Error) console.error(err.message)
            addNotification(
                "Error",
                "Failed to create pet",
                "destructive"
            )
        }
    }

    const filteredPets = pets
        ?.filter(
            (pet) =>
                pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pet.breed.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name)
            if (sortBy === "price") return a.price - b.price
            if (sortBy === "age") return a.age - b.age
            return 0
        })

    if (loading) return <Spinner/>
    if (error) return <ErrorBlock message={error} onRetry={refetch}/>

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Our pets</h1>
                        <p className="text-muted-foreground">
                            Find your ideal companion from our collection of healthy and happy pets
                        </p>
                    </div>
                    <button
                        onClick={() => setShowCreateModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-lg transition-colors font-medium shadow-md"
                    >
                        <Plus className="w-5 h-5"/>
                        Add pet
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
                        <input
                            type="text"
                            placeholder="Search by name or breed..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "name" | "price" | "age")}
                        className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-teal-500 dark:focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    >
                        <option value="name">By name</option>
                        <option value="price">By price</option>
                        <option value="age">By age</option>
                    </select>
                </div>
            </div>

            {filteredPets && filteredPets.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPets.map((pet) => (
                        <PetCard key={pet.id} pet={pet}/>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                        {searchQuery ? "Pets not found" : "Pets not available yet"}
                    </p>
                </div>
            )}

            {showCreateModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-card rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                        <h2 className="text-xl font-bold mb-4 text-card-foreground">Add new pet</h2>
                        <PetForm onSubmit={handleCreate} onCancel={() => setShowCreateModal(false)}/>
                    </div>
                </div>
            )}
        </div>
    )
}