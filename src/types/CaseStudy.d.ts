interface CaseStudy {
    title: string
    header: {
        title: string
        color: string
        "product-name": string
        description: string
        image: string
        "prototype-image": string
    }
    colors: {
        accent: string
        "accent-light": string
        boxes: string
        subtitle: string
    }
    url: string
    sections: Section[]
}

interface Section {
    title: string
    icon: string
    colored: boolean
    color: string
    data: Daum[]
    "text-color"?: string
}

interface Daum {
    type: string
    padding?: boolean
    caption?: string
    data: Daum[] | string | string[]
    link?: string
    colored?: boolean
    color?: string
    "text-color"?: string
    title?: string
}
