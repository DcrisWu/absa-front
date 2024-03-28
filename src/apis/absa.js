import service from "../api/request";

export function ATE(sentence) {
    return service.post(`/absa/ate`,{ raw_text: sentence })
}

export function ATSC(sentence,term) {
    return service.post(`/absa/atsc`,{ raw_text: sentence,aspect_term: term })
}

export function ASPE(sentence) {
    return service.post(`/absa/aspe`,{ raw_text: sentence })
}