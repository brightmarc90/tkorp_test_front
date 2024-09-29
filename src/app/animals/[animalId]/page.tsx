import { getOneAnimal } from "@/services/api/animal"
import { Animal } from "@/types/types"

const AnimalDetailView = async ({params}: {params: {animalId: string}}) => {
  let data: Animal | null = null
  let error: string | null = null
  const {animalId} = params

  try {
    const response = await getOneAnimal(animalId)
    data = await response.data
  } catch (err) {
    if(err){
      error = "Une erreur s'est produite lors de la récupération des données."
    }
  }

  if(error){
    <p>{error}</p>
  }

  return (
    <div>
      <h1>Détails sur l&apos;animal</h1>
      <div>
        {
          data && (
          <>
            <p>{data.name}</p>
            <p>{data.species}</p>
            <p>{data.breed}</p>
            <p>{data.color}</p>
            <p>{data.color}</p>
            <p>{data.weight}</p>
            <p>{new Date(data.date_of_birth).toLocaleString("fr-FR", {day: "numeric", month: "numeric", year: "numeric"})}</p>
            <p>{data.owner.firstname+" "+data.owner.lastname}</p>
          </>
          )
        }
      </div>
    </div>
  )
}

export default AnimalDetailView