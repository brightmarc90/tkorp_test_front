import { AxiosService } from "../axiosService"

export async function getPersons(skip?: number, limit?: number) {
    let uri = ""
    uri += skip? `skip=${skip}&` : ""
    uri += limit? `limit=${limit}&` : ""
    const response = await AxiosService.get(`/person?${uri}`)
    return response
}