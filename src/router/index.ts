import { createRouter, createWebHistory } from 'vue-router'
import CaseStudyComponent from '@/views/CaseStudy.vue'
import HomeComponent from '@/views/HomePage.vue'


const caseStudies = (import.meta.glob('@/assets/case-studies/*.yaml', {eager: true}) as Record<string, {default: CaseStudy}>)

const aboutPageKey = Object.keys(caseStudies).find(v => v.endsWith("about.yaml")) ?? ""
const aboutPage = caseStudies[aboutPageKey]?.default
delete caseStudies[aboutPageKey]

const routes = []
for (const caseStudy of Object.values(caseStudies)) {
  routes.push({
    path: `/cases/${(caseStudy.default.url)}`,
    name: caseStudy.default.title,
    component: CaseStudyComponent,
    props: { caseStudy: caseStudy.default }
  })
}

routes.push({
  path: '/',
  name: "Home",
  component: HomeComponent,
  props: {pages: caseStudies}
}, {
  path: '/about',
  name: "About",
  component: CaseStudyComponent,
  props: {caseStudy: aboutPage}
})


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior: () => {
    return {top: 0, left: 0, behavior: 'smooth'}
  }
})
export default router
