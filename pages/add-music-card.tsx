import { useState, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Youtube } from "lucide-react"
import { useRouter } from "next/router"

export default function AddMusicCardPage() {
  const [formData, setFormData] = useState({ artist: "", song: "", image: "" })
  const router = useRouter()

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }, [])

  const handleSave = useCallback(() => {
    // TODO: Implement save functionality
    console.log("Saving new music card:", formData)
    router.push("/") // Redirect to home page after saving
  }, [formData, router])

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Add New Music Card</h1>
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
      <div className="mt-4 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Preview</h3>
        // ... (Preview section remains the same as in edit-music-card-modal.tsx)
      </div>
      <div className="mt-4 flex justify-end gap-4">
        <Button variant="outline" onClick={() => router.push("/")} className="bg-gray-700 hover:bg-gray-600 text-white">
          Cancel
        </Button>
        <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
          Add Card
        </Button>
      </div>
    </div>
  )
}