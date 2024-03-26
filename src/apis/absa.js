import service from "../api/request";

export function returnATE(sentence) {
    return service.post(`/absa/ate`,{ raw_text: sentence })
}

export function returnATSC(sentence) {
    return service.post(`/absa/atsc`,{ raw_text: sentence })
}