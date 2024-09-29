interface DataDetails {
    total: number
    skip: number
    limit: number
}

interface Owner {
    firstname: string
    lastname: string
}

export interface Person extends Owner{
    id: number
    email: string
    phone_number: string
}

export interface Animal {
    id: number
    name: string
    date_of_birth: Date
    species: string
    breed: string
    color: string
    weight: number
    owner_id: number
    owner: Owner
}

export default interface PersonData extends DataDetails{
    data: Person[]
}

export interface AnimalData extends DataDetails{
    data: Animal[]
}

export interface OldestAnimal {
    name: string
    species: string
    breed: string
    date_of_birth: Date
}

export interface CommonSpecies {
    species: string
    total: number
}

export interface WithMostAnimals extends Owner{
    total: number
}

export interface WithMostHeaviest extends Owner{
    animal_name: string
    animal_species: string
    animal_weight: number
}

export interface WithMostHeaviestGroup extends Owner {
    total_weight: number
}