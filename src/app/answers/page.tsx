"use client"

import { getAnswers } from '@/services/api/questions'
import { CommonSpecies, OldestAnimal, WithMostAnimals, WithMostHeaviest, WithMostHeaviestGroup } from '@/types/types'
import React, { useEffect, useState } from 'react'

const AnswersView = () => {
    type AccordionState = {
        [key: string]: boolean;
    };
    const [accordionState, setAccordionState] = useState<AccordionState>({
        q1: true,
        q2: true,
        q3: true,
        q4: true,
        q5: true,
        q6: true,
    })
    const [oldestAnimal, setOldestAnimal] = useState<OldestAnimal | null>(null)
    const [commonSpecies, setCommonSpecies] = useState<CommonSpecies | null>(null)
    const [withMostAnimals, setWithMostAnimals] = useState<WithMostAnimals | null>(null)
    const [withMostCats, setWithMostCats] = useState<WithMostAnimals | null>(null)
    const [withMostHeaviest, setWithMostHeaviest] = useState<WithMostHeaviest| null>(null)
    const [withMostHeaviestGroup, setWithMostHeaviestGroup] = useState<WithMostHeaviestGroup | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const execAsync = async () => {
            try {
                const response1 = await getAnswers(1)
                setOldestAnimal(response1.data)
                const response2 = await getAnswers(2)
                setCommonSpecies(response2.data)
                const response3 = await getAnswers(3)
                setWithMostAnimals(response3.data)
                const response4 = await getAnswers(4)
                setWithMostCats(response4.data)
                const response5 = await getAnswers(5)
                setWithMostHeaviest(response5.data)
                const response6 = await getAnswers(6)
                setWithMostHeaviestGroup(response6.data)
            } catch (err) {
                if(err){
                    setError("Une erreur s'est produite lors de la récupération des données.")
                }
            }
        }
        execAsync()
    }, [])

    const handleClick = (id: number) => {
        setAccordionState(prevState => ({...prevState, [`q${id}`]: !accordionState[`q${id}`]}))
    }

    if(error){
        <p>{error}</p>
    }

    return (
    <div className='container mt-5'>
        <h1 className='mt-5 mb-5'>Réponses aux questions</h1>
        <div className='accordion' id="accordionExample">
            <div className="accordion-item"> {/* debut question 1 */}
                <h2 className='accordion-header'>
                    <button onClick={() => handleClick(1)} className={`accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Question 1: l&apos;animal le plus vieux
                    </button>                    
                </h2>
                <div id="collapseOne" className={`accordion-collapse collapse ${accordionState.q1? "show": ""}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {
                            oldestAnimal && (
                                <>                        
                                    <p>{`Nom: ${oldestAnimal.name}`}</p>
                                    <p>{`Espèce: ${oldestAnimal.species}`}</p>
                                    <p>{`Race: ${oldestAnimal.breed}`}</p>
                                    <p>{`Né le ${new Date(oldestAnimal.date_of_birth).toLocaleString("fr-FR", {day: "numeric", month: "numeric", year: "numeric"})}`}</p>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>{/* fin question 1 */}
            <div className="accordion-item"> {/* debut question 2 */}
                <h2 className='accordion-header'>
                    <button onClick={() => handleClick(2)} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                        Question 2: l&apos;espèce la mieux représentée
                    </button>                    
                </h2>
                <div id="collapse2" className={`accordion-collapse collapse ${accordionState.q2? "show": ""}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {
                            commonSpecies && (
                                <>
                                    <p>{`Espèce: ${commonSpecies.species}`}</p>
                                    <p>{`Total d'occurences: ${commonSpecies.total}`}</p>
                                </>
                            )
                        }
                    </div>
                </div>
            </div> {/* fin question 2 */}
            <div className="accordion-item"> {/* debut question 3 */}
                <h2 className='accordion-header'>
                    <button onClick={() => handleClick(3)} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                        Question 3: la personne qui possède le plus d'animaux
                    </button>                    
                </h2>
                <div id="collapse3" className={`accordion-collapse collapse ${accordionState.q3? "show": ""}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {
                            withMostAnimals && (
                                <>
                                    <p>{`Nom: ${withMostAnimals.firstname+" "+withMostAnimals.lastname}`}</p>
                                    <p>{`Total: ${withMostAnimals.total}`}</p>
                                </>
                            )
                        }
                    </div>
                </div>
            </div> {/* fin question 3 */}
            <div className="accordion-item"> {/* debut question 4 */}
                <h2 className='accordion-header'>
                    <button onClick={() => handleClick(4)} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                        Question 4: la personne qui a le plus de chats
                    </button>                    
                </h2>
                <div id="collapse4" className={`accordion-collapse collapse ${accordionState.q4? "show": ""}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {
                            withMostCats && (
                                <>
                                    <p>{`Nom: ${withMostCats.firstname+" "+withMostCats.lastname}`}</p>
                                    <p>{`Total: ${withMostCats.total}`}</p>
                                </>
                            )
                        }
                    </div>
                </div>
            </div> {/* fin question 4 */}
            <div className="accordion-item"> {/* debut question 5 */}
                <h2 className='accordion-header'>
                    <button onClick={() => handleClick(5)} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                        Question 5: la personne qui possède l&apos;animal le plus lourd
                    </button>                    
                </h2>
                <div id="collapse5" className={`accordion-collapse collapse ${accordionState.q5? "show": ""}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {
                            withMostHeaviest && (
                                <>
                                    <p>{`Nom: ${withMostHeaviest.firstname+" "+withMostHeaviest.lastname}`}</p>
                                    <p>{`Animal: ${withMostHeaviest.animal_name}`}</p>
                                    <p>{`Espèce: ${withMostHeaviest.animal_species}`}</p>
                                    <p>{`Poids: ${withMostHeaviest.animal_weight} Kg`}</p>
                                </>
                            )
                        }
                    </div>
                </div>
            </div> {/* fin question 5 */}
            <div className="accordion-item"> {/* debut question 6 */}
                <h2 className='accordion-header'>
                    <button onClick={() => handleClick(6)} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                        Question 6: la personne qui possède le group d&apos;animaux le plus lourd
                    </button>                    
                </h2>
                <div id="collapse6" className={`accordion-collapse collapse ${accordionState.q6? "show": ""}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {
                            withMostHeaviestGroup && (
                                <>
                                    <p>{`Nom: ${withMostHeaviestGroup.firstname+" "+withMostHeaviestGroup.lastname}`}</p>
                                    <p>{`Poids total: ${withMostHeaviestGroup.total_weight} Kg`}</p>
                                </>
                            )
                        }
                    </div>
                </div>
            </div> {/* fin question 6 */}
            
                       
        </div>
    </div>
  )
}

export default AnswersView