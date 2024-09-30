import { getOneAnimal } from "@/services/api/animal"
import { Animal } from "@/types/types"
import styles from './page.module.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';
import ScaleIcon from '@mui/icons-material/Scale';

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
    <div className="container mt-5">
      <h1 className="mt-5 mb-5">Détails sur l&apos;animal</h1>
      <div>
        {
          data && (
          <div className={`p-4 mx-auto ${styles.DetailCard} row`}>
            <div className="col-12 col-md-5 d-flex align-items-center">
              <img src={`/images/${data.species}.jpg`} alt={data.species} className={`w-100 ${styles.ImgCard}`}/>
            </div>
            <div className="col-12 col-md-7">
                <h2 className="text-md-start text-center mt-4 mt-md-0">{data.name}</h2>
                <p className={`${styles.CardText}`}><span><PetsIcon sx={{ fontSize: 16 }} /></span> {`${data.species} / ${data.breed} / ${data.color}`}</p>
                <p className={`${styles.CardText}`}><span><ScaleIcon sx={{ fontSize: 16 }} /></span> {`${data.weight} Kg`}</p>
                <p className={`${styles.CardText}`}><span><CalendarMonthIcon sx={{ fontSize: 16 }} /></span> {new Date(data.date_of_birth).toLocaleString("fr-FR", {day: "numeric", month: "numeric", year: "numeric"})}</p>
                <p className={`${styles.CardText}`}><span><PersonIcon sx={{ fontSize: 16 }} /></span> {data.owner.lastname+" "+data.owner.firstname}</p>
            </div>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default AnimalDetailView