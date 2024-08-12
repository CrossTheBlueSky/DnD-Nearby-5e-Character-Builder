import Builder from "../components/Builder"
import CharacterPreview from "../components/CharacterPreview"
import InfoPreview from "../components/InfoPreview"

export default function Page() {
  return (
    <div className="flex h-screen bg-red-900 text-white">
      <div className="w-1/4 p-4 bg-blue-100">
        <CharacterPreview />
      </div>
      <div className="flex-1 p-4">
        <Builder />
      </div>
      <div className="w-1/4 p-4 bg-yellow-100 bg-opacity-20">
        <InfoPreview />
      </div>
    </div>
  )
}