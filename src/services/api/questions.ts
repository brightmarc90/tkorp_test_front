import { AxiosService } from "../axiosService"

export async function getAnswers(questionID: number) {
    let uri = ""
    switch (questionID) {
        case 1:
            uri = "/question/oldest-animal"
            break;
        case 2:
            uri = "/question/common-species"
            break;
        case 3:
            uri = "/question/master-with-most-animals"
            break;
        case 4:
            uri = "/question/master-with-most-cats"
            break;
        case 5:
            uri = "/question/master-with-heaviest"
            break; 
        case 6:
            uri = "/question/master-with-heaviest-group"
            break;
    
        default:
            break;
    }
    const response = await AxiosService.get(uri)
    return response
}