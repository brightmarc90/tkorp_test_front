import { getOnePerson } from "@/services/api/persons"
import { Person } from "@/types/types"
import styles from "./page.module.css"
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonIcon from '@mui/icons-material/Person';

const PersonDetailView = async ({params}: {params: {personId: string}}) => {
  let data: Person | null = null
  let error: string | null = null
  const {personId} = params

  try {
    const response = await getOnePerson(personId)
    data = await response.data
  } catch (err) {
    error = err instanceof Error? err.message : "Une erreur s'est produite lors de la récupération des données."
  }

  if(error){
    <p className='alert alert-warning'>{error}</p>
  }

  return (
    <div className="container mt-5">
      <h1 className="mt-5 mb-5">Détails du maître</h1>
      <div>
        {
          data && (
          <div className={`p-4 mx-auto ${styles.DetailCard} row`}>
            <div className="col-12 col-md-3">
              <p className='text-center mb-0'>
                  <PersonIcon sx={{ fontSize: 100 }} color='action'/>
              </p>
            </div>
            <div className="col-12 col-md-9">
              <h2 className="text-md-start text-center">{data.firstname+" "+data.lastname}</h2>
              <p className={`${styles.CardText}`}><span><AlternateEmailSharpIcon sx={{ fontSize: 20 }} /></span> {data.email}</p>
              <p className={`${styles.CardText}`}><span><PhoneIphoneIcon sx={{ fontSize: 20 }} /></span> {data.phone_number}</p>
            </div>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default PersonDetailView