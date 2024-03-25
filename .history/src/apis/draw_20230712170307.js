import service from "../api/request";

// 区分开业活动和包裹卡活动

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

// 判断是否加了企微好友接口
export function checkWeCom(marketingSubId) {
    return service.get(`/mall-marketing/noVersion/concernedWeCom?marketingSubId=${marketingSubId}`)
}