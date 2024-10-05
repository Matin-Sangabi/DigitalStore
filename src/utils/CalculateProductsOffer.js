export function CalculatePriceOffer ( price , offPrice) {
    const offer = price * (offPrice / 100);
    const OffPrice = price - offer;
    return OffPrice;
}


export function calcDiscount ( price , mainPrice) {
    const offer =  ((mainPrice * 100 )/ price)
    const OffPrice = 100 - offer;
    return Math.round(OffPrice);
}
