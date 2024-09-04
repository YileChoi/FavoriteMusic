import Image from "next/image"
import { Youtube, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MusicCard as MusicCardType } from "@/types/musicCard"

interface MusicCardProps {
  item: MusicCardType;
  editMode: boolean;
  onEdit: () => void;
}

export function MusicCard({ item, editMode, onEdit }: MusicCardProps) {
  return (
    <div className="snap-center shrink-0">
      <div className="w-[225px] h-[400px] bg-gray-800 rounded-lg overflow-hidden shadow-lg relative">
        <Image 
          src={item.image || "/placeholder.svg"} 
          alt={`${item.artist} - ${item.song}`} 
          width={225} 
          height={300} 
          className="w-full h-[300px] object-cover" 
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg text-white">{item.song || "Untitled Track"}</h2>
          <p className="text-sm text-gray-400">{item.artist || "Unknown Artist"}</p>
          <div className="mt-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="p-0 hover:bg-transparent"
            >
              <Youtube className="h-6 w-6 text-red-500 transition-colors duration-200 ease-in-out hover:text-red-400" />
            </Button>
          </div>
        </div>
        {editMode && (
          <button 
            className="absolute top-2 right-2 bg-white text-[#080808] p-2 rounded-full"
            onClick={onEdit}
          >
            <Edit2 className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}