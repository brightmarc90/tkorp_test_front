import { getOnePerson } from "@/services/api/persons"
import { Person } from "@/types/types"

const PersonDetailView = async ({params}: {params: {personId: string}}) => {
  let data: Person | null = null
  let error: string | null = null
  const {personId} = params

  try {
    const response = await getOnePerson(personId)
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
      <h1>Détails du maitre</h1>
      <div>
        {
          data && (
          <>
            <p>{data.firstname+" "+data.lastname}</p>
            <p>{data.email}</p>
            <p>{data.phone_number}</p>
          </>
          )
        }
      </div>
    </div>
  )
}

export default PersonDetailView