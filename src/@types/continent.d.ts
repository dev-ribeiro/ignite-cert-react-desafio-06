interface Country {
    country: string;
    image: string;
}

interface AmountDetails {
    countries: number
    languages: number
    cities: number
}

export interface Continent {
    id: number
    name: string
    image: string
    slug: string
    summary: string
    countries: Country[]
    amountDetails: AmountDetails
}
