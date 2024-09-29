interface DataDetails {
    total: number
    skip: number
    limit: number
}

interface Owner {
    firstname: string
    lastname: string
}

export interface Person {
    id: number
    lastname: string
    firstname: string
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