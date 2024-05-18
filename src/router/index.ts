import { createRouter, createWebHistory } from 'vue-router'
import CaseStudyComponent from '@/views/CaseStudy.vue'

const caseStudies = import.meta.glob('@/assets/case-studies/*.yaml', {eager: true})

const routes = []
for (const caseStudy of Object.values(caseStudies as Record<string, {default: CaseStudy}>)) {
  routes.push({
    path: `/cases/${(caseStudy.default.url)}`,
    name: caseStudy.default.title,
    component: CaseStudyComponent,
    props: { caseStudy: caseStudy.default }
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export default router
