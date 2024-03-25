import service from "../api/request";

export function vistLottery(friendId, marketingSubId) {
    if (marketingSubId) {
        return service.get(`/mall-marketing/noVersion/visit?marketingSubId=${marketingSubId}`)
    }
    return service.get(`/mall-marketing/vistLottery?friendId=${friendId}`)
}
