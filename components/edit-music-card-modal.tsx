import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Youtube } from "lucide-react"

interface MusicCardEditModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (data: { artist: string; song: string; image: string }) => void
  initialData?: { artist: string; song: string; image: string }
}

export default function MusicCardEditModal({
  isOpen,
  onClose,
  onSave,
  initialData = { artist: "", song: "", image: "" },
}: MusicCardEditModalProps) {
  const [formData, setFormData] = useState(initialData)

  useEffect(() => {
    if (isOpen) {
      setFormData(initialData)
    }
  }, [isOpen, initialData])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }, [])

  const handleSave = useCallback(() => {
    onSave(formData)
    onClose()
  }, [formData, onSave, onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Edit Music Card</DialogTitle>
          <DialogDescription>Make changes to the music card here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="artist" className="text-right">
              Artist
            </Label>
            <Input
              id="artist"
              value={formData.artist}
              onChange={handleInputChange}
              className="col-span-3 bg-gray-700 border-gray-600"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="song" className="text-right">
              Song
            </Label>
            <Input
              id="song"
              value={formData.song}
              onChange={handleInputChange}
              className="col-span-3 bg-gray-700 border-gray-600"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Song URL
            </Label>
            <Input
              id="image"
              value={formData.image}
              onChange={handleInputChange}
              className="col-span-3 bg-gray-700 border-gray-600"
            />
          </div>
        </div>
        <div className="mt-4 p-4 bg-gray-900 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Preview</h3>
          <div className="w-full max-w-[225px] h-[400px] bg-gray-800 rounded-lg overflow-hidden shadow-lg mx-auto">
            <Image 
              src={formData.image || "/placeholder.svg"} 
              alt={`${formData.artist} - ${formData.song}`} 
              width={225} 
              height={300} 
              className="w-full h-[300px] object-cover" 
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{formData.artist || "Artist Name"}</h2>
              <p className="text-gray-400">{formData.song || "Song Title"}</p>
              <div className="mt-2 flex justify-between">
                <Button variant="ghost" size="icon">
                  <Youtube className="h-6 w-6 text-red-500" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="bg-gray-700 hover:bg-gray-600 text-white">
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
