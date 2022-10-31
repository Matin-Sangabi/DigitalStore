export function CalculatePriceOffer ( price , offPrice) {
    const offer = price * (offPrice / 100);
    const OffPrice = price - offer;
    return OffPrice;
}
