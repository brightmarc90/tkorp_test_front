interface Person {
    id: number
    lastname: string
    firstname: string
    email: string
    phone_number: string
}

export default interface PersonData {
    total: number
    data: Person[]
    skip: number
    limit: number
}