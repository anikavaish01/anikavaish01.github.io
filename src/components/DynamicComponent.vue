<template>
    <div>
        <div v-for="(data, index) in data" :key="`${data.type}-${index}`">
            <ParagraphWrapper v-if="data.type === 'paragraph'" :content="(data.data as string)" :color="data.color" />
            <SubHeaderWrapper v-else-if="data.type === 'sub-header'" :content="(data.data as string)" :color="data.color" />
            <GridWrapper v-else-if="data.type === 'grid'" :data="(data.data as Daum[])" :colors="colors" :padding="data.padding ?? true"
                :color="data.color" />
            <ImageWrapper v-else-if="data.type === 'image'" :image="(data.data as string)" :colors="colors" :caption="data.caption" :link="data.link" />
            <NumbersWrapper v-else-if="data.type === 'numbers'" :content="(data.data as string)"
                :color="colors.accent" />
            <EmphasisWrapper v-else-if="data.type === 'emphasis'" :content="(data.data as string)" />
            <BulletWrapper v-else-if="data.type === 'bullets'" :data="(data.data as string[])" />
            <SpacerWrapper v-else-if="data.type === 'spacer'" :height="(data.data as string)" />
            <GraphicText v-else-if="data.type === 'graphic-text'" :content="(data.data as string)"
                :colored="(data.colored as boolean)" />
            <HeaderWrapper v-else-if="data.type === 'header'" :content="(data.data as string)" />
            <SmallSubHeader v-else-if="data.type === 'small-sub-header'" :content="(data.data as string)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ParagraphWrapper from '@/components/ParagraphWrapper.vue'
import GridWrapper from '@/components/GridWrapper.vue'
import FooterWrapper from '@/components/FooterWrapper.vue'
import SubHeaderWrapper from '@/components/SubheaderWrapper.vue'
import ImageWrapper from '@/components/ImageWrapper.vue'
import EmphasisWrapper from '@/components/EmphasisWrapper.vue'
import BulletWrapper from '@/components/BulletWrapper.vue'
import NumbersWrapper from '@/components/NumbersWrapper.vue'
import SpacerWrapper from '@/components/SpacerWrapper.vue'
import GraphicText from './GraphicText.vue'
import HeaderWrapper from './HeaderWrapper.vue'
import { computed } from 'vue'
import CaptionWrapper from './CaptionWrapper.vue'
import SmallSubHeader from './SmallSubHeader.vue'


const { items, colors } = defineProps<{ items: Daum[], colors: CaseStudy['colors'] }>()
const data = computed(() => items as Daum[])
</script>