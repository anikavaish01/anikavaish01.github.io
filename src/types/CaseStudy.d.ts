interface CaseStudy {
    title: string
    header: {
        title: string
        description: string
        image: string
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
    data: Daum[]
}

interface Daum {
    type: string
    data: Daum[] | string | string[]
    colored?: boolean
    color?: string
    "text-color"?: string
    title?: string
}
