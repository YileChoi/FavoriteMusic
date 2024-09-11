import { useState, useEffect } from "react"
import { MusicCard } from "@/types/musicCard"
import { initialMusicData } from "@/data/initialMusicData";

export function useMusicData(initialData: typeof initialMusicData) {
  const [musicData, setMusicData] = useState(() => {
    // 앱이 시작될 때 localStorage에서 데이터를 불러옵니다
    const savedData = localStorage.getItem('musicData');
    return savedData ? JSON.parse(savedData) : initialData;
  });

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

  const addNewCard = (newCardData: { artist: string; song: string; image: string }) => {
    const newCard = {
      id: Date.now().toString(),
      ...newCardData,
    };
    setMusicData((prevData) => [...prevData, newCard]);
  };

  // musicData가 변경될 때마다 localStorage에 저장합니다
  useEffect(() => {
    localStorage.setItem('musicData', JSON.stringify(musicData));
  }, [musicData]);

  return { musicData, editingCard, handleSave, openEditModal, closeEditModal, addNewCard };
}