"use client"

import ListPagination from '@/components/listPagination/ListPagination'
import { getAnimals } from '@/services/api/animal'
import { AnimalData } from '@/types/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';

const AnimalListView = () => {
    const router = useRouter()
    const [animalData, setAnimalData] = useState<AnimalData | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [listIndex, setListIndex] = useState<number>(0);

    const execAsync = async (skip: number, limit: number) => {
        try {
            const response = await getAnimals(skip, limit);
            setAnimalData(response.data);
        } catch (e: unknown) {
            e instanceof Error? setError(e.message) : setError("Une erreur s'est produite lors de la récupération des données.")
        }
    }

    useEffect(() => {
        execAsync(0, 10)
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        router.push(`/animals/${event.currentTarget.id}`)
    }

    if (error) {
        return <p className='alert alert-warning'>{error}</p>
    }

    const changePage = (skip: number, limit: number) => {
        setListIndex(skip)
        execAsync(skip, limit)
    }

    return (
    <div className='container mt-5'>
        <h1 className="mt-5 mb-4">Liste des animaux</h1>
        <div>
            <div className='d-flex flex-wrap justify-content-evenly'>
                {
                    animalData?.data.map((animal, index) => (
                        <div className={`card mb-4 ${styles.Card}`} key={index} id={animal.id.toString()} onClick={handleClick}>
                            <img src={`/images/${animal.species}.jpg`} alt={animal.species} className={styles.ImgCard}/>
                            <div className="card-body">
                                <p className={`card-title text-center ${styles.CardTitle}`}>{animal.name}</p>
                                <p className={`card-text ${styles.CardText}`}><span><PetsIcon sx={{ fontSize: 16 }} /></span> {animal.species+" / "+animal.breed}</p>
                                <p className={`card-text ${styles.CardText}`}><span><PersonIcon sx={{ fontSize: 16 }} /></span> {animal.owner.lastname+" "+animal.owner.firstname}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                animalData && (
                    <ListPagination count={animalData.total} limit={animalData.limit} changePage={changePage}/>
                )
            }
        </div>
    </div>
  )
}

export default AnimalListView