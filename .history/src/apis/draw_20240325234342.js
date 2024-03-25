import service from "../api/request";

export function returnATE(sentence) {
    return service.post(`/absa/ate/${sentence}`)
}

export function returnATSC(sentence) {
    return service.post(`/absa/atsc/${sentence}`)
}