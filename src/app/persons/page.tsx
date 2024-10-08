"use client";

import ListPagination from '@/components/listPagination/ListPagination';
import { getPersons } from '@/services/api/persons';
import PersonData from '@/types/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';

const PersonListView = () => {
    const router = useRouter()
    const [personData, setPersonData] = useState<PersonData | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [listIndex, setListIndex] = useState<number>(0);

    const execAsync = async (skip: number, limit: number) => {
        try {
            const response = await getPersons(skip, limit);
            setPersonData(response.data);
        } catch (e: unknown) {
            e instanceof Error? setError(e.message) : setError("Une erreur s'est produite lors de la récupération des données.")
        }
    }

    useEffect(() => {
        execAsync(0, 10)
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        router.push(`/persons/${event.currentTarget.id}`)
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
        <h1 className="mt-5 mb-4">Liste des maîtres</h1>
        <div>
            <div className='d-flex flex-wrap justify-content-evenly'>
                {
                    personData?.data.map((person, index) => (
                        <div className={`card mb-4 ${styles.Card}`} key={index} id={person.id.toString()} onClick={handleClick}>
                            <p className='text-center mb-0'>
                                <PersonIcon sx={{ fontSize: 100 }} color='action'/>
                            </p>
                            <div className="card-body">
                                <p className={`card-title text-center ${styles.CardTitle}`}>{person.firstname+" "+person.lastname}</p>
                                <p className={`card-text ${styles.CardText}`}><span><AlternateEmailSharpIcon sx={{ fontSize: 16 }} /></span> {person.email}</p>                                
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                personData && (
                    <ListPagination count={personData.total} limit={personData.limit} changePage={changePage}/>
                )
            }
        </div>
    </div>
  )
}

export default PersonListView