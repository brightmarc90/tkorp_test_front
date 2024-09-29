import { AxiosService } from "../axiosService"

export async function getAnimals(skip?: number, limit?: number) {
    let uri = ""
    uri += skip? `skip=${skip}&` : ""
    uri += limit? `limit=${limit}&` : ""
    const response = await AxiosService.get(`/animal?${uri}`)
    return response
}

export async function getOneAnimal(animalID: string) {
    const response = await AxiosService.get(`/animal/${animalID}`)
    return response
}