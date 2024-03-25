import service from "../api/request";

export function vistLottery(friendId, marketingSubId) {
    if (marketingSubId) {
        return service.get(`/mall-marketing/noVersion/visit?marketingSubId=${marketingSubId}`)
    }
    return service.get(`/mall-marketing/vistLottery?friendId=${friendId}`)
}

export function doLottery(marketingSubId) {
    if (marketingSubId) {
        return service.post(`/mall-marketing/noVersion/lottery?marketingSubId=${marketingSubId}`)
    }
    return service.post(`/mall-marketing/doLottery`)
}

export function checkMyPrize(marketingSubId) {
    if (marketingSubId) {
        return service.get(`/mall-marketing/noVersion/checkPrize?marketingSubId=${marketingSubId}`)
    }
    return service.get(`/mall-marketing/checkMyPrize`)
}

export function getMoreChance(marketingSubId) {
    if (marketingSubId) {
        return service.get(`/mall-marketing/noVersion/getChance?marketingSubId=${marketingSubId}`)
    }
    return service.get(`/mall-marketing/getMoreChance`)
}

export function clickOrder(marketingSubId) {
    if (marketingSubId) {
        return service.get(`/mall-marketing/noVersion/orderMission?marketingSubId=${marketingSubId}`)
    }
    return service.get(`/mall-marketing/clickOrder`)
}

export function clickShareFriend() {
    return service.get(`/mall-marketing/clickShareFriend`)
}
