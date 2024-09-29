"use client";

import ListPagination from '@/components/listPagination/ListPagination';
import { getPersons } from '@/services/api/persons';
import PersonData from '@/types/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const PersonListView = () => {
    const router = useRouter()
    const [personData, setPersonData] = useState<PersonData | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [listIndex, setListIndex] = useState<number>(0);

    const execAsync = async (skip: number, limit: number) => {
        try {
            const response = await getPersons(skip, limit);
            setPersonData(response.data);
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
        router.push(`/persons/${event.currentTarget.id}`)
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
        <h1>Liste des maitres</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Num. Tel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        personData?.data.map((person, index) => (
                            <tr key={index} id={person.id.toString()} onClick={handleClick}>
                                <td>{listIndex + index + 1}</td>
                                <td>{person.lastname}</td>
                                <td>{person.firstname}</td>
                                <td>{person.email}</td>
                                <td>{person.phone_number}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
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