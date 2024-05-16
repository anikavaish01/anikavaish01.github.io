interface CaseStudy {
    title: string
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
