import service from "../api/request";

export function ATE(sentence) {
    return service.post(`/absa/ate`,{ raw_text: sentence })
}

export function returnATSC(sentence) {
    return service.post(`/absa/atsc`,{ raw_text: sentence })
}