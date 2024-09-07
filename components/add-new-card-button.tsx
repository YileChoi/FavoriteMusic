import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"

export function AddNewCardButton() {
  const router = useRouter()

  const handleAddNewCard = () => {
    router.push("/add-music-card")
  }

  return (
    <Button onClick={handleAddNewCard}>
      Add New Card
    </Button>
  )
}