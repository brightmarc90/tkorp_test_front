import { getAnswers } from '@/services/api/questions'
import { CommonSpecies, OldestAnimal, WithMostAnimals, WithMostHeaviest, WithMostHeaviestGroup } from '@/types/types'
import React from 'react'

const AnswersView = async () => {
    let oldestAnimal: OldestAnimal | null = null
    let commonSpecies: CommonSpecies | null = null
    let withMostAnimals: WithMostAnimals | null = null
    let withMostCats: WithMostAnimals | null = null
    let withMostHeaviest: WithMostHeaviest| null = null
    let withMostHeaviestGroup: WithMostHeaviestGroup| null = null
    let error: string | null = null

    try {
        const response1 = await getAnswers(1)
        oldestAnimal = await response1.data
        const response2 = await getAnswers(2)
        commonSpecies = await response2.data
        const response3 = await getAnswers(3)
        withMostAnimals = await response3.data
        const response4 = await getAnswers(4)
        withMostCats = await response4.data
        const response5 = await getAnswers(5)
        withMostHeaviest = await response5.data
        const response6 = await getAnswers(6)
        withMostHeaviestGroup = await response6.data
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
        <h1>Réponses aux questions</h1>
        <div>
            {
                oldestAnimal && (
                    <div>
                        <h2>Question 1: l&apos;animal le plus vieux</h2>
                        <p>{oldestAnimal.name}</p>
                        <p>{oldestAnimal.species}</p>
                        <p>{oldestAnimal.breed}</p>
                        <p>{new Date(oldestAnimal.date_of_birth).toLocaleString("fr-FR", {day: "numeric", month: "numeric", year: "numeric"})}</p>
                    </div>
                )
            }
            {
                commonSpecies && (
                    <div>
                        <h2>Question 2: l&apos;espèce la mieux représentée</h2>
                        <p>{commonSpecies.species}</p>
                        <p>{commonSpecies.total}</p>
                    </div>
                )
            }
            {
                withMostAnimals && (
                    <div>
                        <h2>Question 3: la personne qui possède le plus d'animaux</h2>
                        <p>{withMostAnimals.firstname+" "+withMostAnimals.lastname}</p>
                        <p>{withMostAnimals.total}</p>
                    </div>
                )
            } 
            {
                withMostCats && (
                    <div>
                        <h2>Question 4: la personne qui a le plus de chats</h2>
                        <p>{withMostCats.firstname+" "+withMostCats.lastname}</p>
                        <p>{withMostCats.total}</p>
                    </div>
                )
            }
            {
                withMostHeaviest && (
                    <div>
                        <h2>Question 5: la personne qui possède l&apos;animal le plus lourd</h2>
                        <p>{withMostHeaviest.firstname+" "+withMostHeaviest.lastname}</p>
                        <p>{withMostHeaviest.animal_name}</p>
                        <p>{withMostHeaviest.animal_species}</p>
                        <p>{withMostHeaviest.animal_weight}</p>
                    </div>
                )
            }
            {
                withMostHeaviestGroup && (
                    <div>
                        <h2>Question 6: la personne qui possède le group d&apos;animaux le plus lourd</h2>
                        <p>{withMostHeaviestGroup.firstname+" "+withMostHeaviestGroup.lastname}</p>
                        <p>{withMostHeaviestGroup.total_weight}</p>
                    </div>
                )
            }           
        </div>
    </div>
  )
}

export default AnswersView