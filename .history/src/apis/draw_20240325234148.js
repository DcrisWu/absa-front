import service from "../api/request";

export function getAte(sentence) {
    return service.post(`/absa/ate/${sentence}`)
}
