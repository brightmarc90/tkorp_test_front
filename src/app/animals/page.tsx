"use client"

import ListPagination from '@/components/listPagination/ListPagination'
import { getAnimals } from '@/services/api/animal'
import { AnimalData } from '@/types/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AnimalListView = () => {
    const router = useRouter()
    const [animalData, setAnimalData] = useState<AnimalData | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [listIndex, setListIndex] = useState<number>(0);

    const execAsync = async (skip: number, limit: number) => {
        try {
            const response = await getAnimals(skip, limit);
            setAnimalData(response.data);
        } catch (e) {
            if(e){
                setError("Une erreur s'est produite lors de la récupération des données.")
            }
        }
    }

    useEffect(() => {
        execAsync(0, 10)
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLTableRowElement>) => {
        router.push(`/animals/${event.currentTarget.id}`)
    }

    if (error) {
        return <p>{error}</p>
    }

    const changePage = (skip: number, limit: number) => {
        setListIndex(skip)
        execAsync(skip, limit)
    }

    return (
    <div>
        <h1>Liste des animaux</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Espèce</th>
                        <th>Race</th>
                        <th>Date de naissance</th>
                        <th>Couleur</th>
                        <th>Poids</th>
                        <th>Maitre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        animalData?.data.map((animal, index) => (
                            <tr key={index} id={animal.id.toString()} onClick={handleClick}>
                                <td>{listIndex + index + 1}</td>
                                <td>{animal.name}</td>
                                <td>{animal.species}</td>
                                <td>{animal.breed}</td>
                                <td>{new Date(animal.date_of_birth).toLocaleString("fr-FR", {day: "numeric", month: "numeric", year: "numeric"})}</td>
                                <td>{animal.color}</td>
                                <td>{animal.weight}</td>
                                <td>{animal.owner.lastname+" "+animal.owner.firstname}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
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