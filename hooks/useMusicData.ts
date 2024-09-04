import { useState } from "react"
import { MusicCard } from "@/types/musicCard"

export function useMusicData(initialData: MusicCard[]) {
  const [musicData, setMusicData] = useState(initialData);
  const [editingCard, setEditingCard] = useState<MusicCard | null>(null);

  const openEditModal = (card: MusicCard) => setEditingCard(card);
  const closeEditModal = () => setEditingCard(null);

  const handleSave = (data: { artist: string; song: string; image: string }) => {
    setMusicData(prevData =>
      prevData.map(card =>
        card.id === editingCard?.id ? { ...card, ...data } : card
      )
    );
    closeEditModal();
  };

  return { musicData, editingCard, handleSave, openEditModal, closeEditModal };
}