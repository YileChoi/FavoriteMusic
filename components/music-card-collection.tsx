'use client'

import { PlusCircle, Edit2 } from "lucide-react"
import { useState } from "react"
import MusicCardEditModal from "./edit-music-card-modal"
import { Button } from "@/components/ui/button"
import { MusicCard } from "./music-card"
import { useMusicData } from "@/hooks/useMusicData"
import { initialMusicData } from "@/data/initialMusicData"
import AddMusicCardModal from "./add-music-card-modal"

export function MusicCardCollection() {
  const [editMode, setEditMode] = useState(false);
  const [isAddingNewCard, setIsAddingNewCard] = useState(false);
  const { musicData, editingCard, handleSave, openEditModal, closeEditModal, addNewCard } = useMusicData(initialMusicData);

  const toggleEditMode = () => setEditMode(!editMode);

  const openAddNewCardModal = () => setIsAddingNewCard(true);
  const closeAddNewCardModal = () => setIsAddingNewCard(false);

  const handleAddNewCard = (newCardData: { artist: string; song: string; image: string }) => {
    addNewCard(newCardData);
    closeAddNewCardModal();
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Music Card Collection</h1>
        <Button
          onClick={toggleEditMode}
          className="bg-white hover:bg-gray-200 text-[#080808] transition duration-300"
        >
          <Edit2 className="mr-2 h-4 w-4" /> {editMode ? "Done" : "Edit"}
        </Button>
      </div>

      {/* Music Cards */}
      <div className="flex overflow-x-auto space-x-4 pb-8 snap-x snap-mandatory">
        {musicData.map((item) => (
          <MusicCard 
            key={item.id} 
            item={item} 
            editMode={editMode} 
            onEdit={() => openEditModal(item)} 
          />
        ))}
      </div>

      {/* Add New Card Button */}
      <Button 
        onClick={openAddNewCardModal}
        className="mt-8 bg-white hover:bg-gray-200 text-[#080808] transition duration-300"
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add New Card
      </Button>

      {/* Edit Modal */}
      <MusicCardEditModal
        isOpen={!!editingCard}
        onClose={closeEditModal}
        onSave={handleSave}
        initialData={editingCard || undefined}
      />

      {/* Add New Card Modal */}
      <AddMusicCardModal
        isOpen={isAddingNewCard}
        onClose={closeAddNewCardModal}
        onSave={handleAddNewCard}
      />
    </div>
  )
}