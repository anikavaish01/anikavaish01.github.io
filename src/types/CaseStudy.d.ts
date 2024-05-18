interface CaseStudy {
    title: string
    header: {
        title: string
        description: string
        image: string
    }
    colors: {
        accent: string
        boxes: string
        subtitle: string
        "icon-primary": string
        "icon-secondary": string   
    }
    url: string
    sections: Section[]
}

interface Section {
    title: string
    data: Daum[]
}

interface Daum {
    type: string
    data: Daum[] | string | string[]
    title?: string
}
