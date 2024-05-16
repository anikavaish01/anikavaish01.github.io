<template>
    <div>
        <div v-for="(data, index) in data" :key="`${data.type}-${index}`">
            <ParagraphWrapper v-if="data.type === 'paragraph'" :content="(data.data as string)" />
            <SubtitleWrapper v-else-if="data.type === 'subtitle'" :title="(data.data as string)" />
            <SubsubtitleWrapper v-else-if="data.type === 'subsubtitle'" :title="(data.data as string)" />
            <GridWrapper v-else-if="data.type === 'grid'" :data="(data.data as Daum[])" />
            <ImageWrapper v-else-if="data.type === 'image'" :image="(data.data as string)" />
            <CalloutTextWrapper v-else-if="data.type === 'callout'" :content="(data.data as string)" />
            <NumbersWrapper v-else-if="data.type === 'numbers'" :title="(data.data as string)" /> 
            <EmphasisWrapper v-else-if="data.type === 'emphasis'" :content="(data.data as string)" />
            <QuoteWrapper v-else-if="data.type === 'quote'" :content="(data.data as string)" />
            <BulletWrapper v-else-if="data.type === 'bullets'" :data="(data.data as string[])" />              
            <SpacerWrapper v-else-if="data.type === 'spacer'" />
            <div v-else-if="data.type === 'important'">
                <ImpBox :title="data.title" :data="(data.data as Daum[])" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ParagraphWrapper from '@/components/ParagraphWrapper.vue'
import GridWrapper from '@/components/GridWrapper.vue'
import SubtitleWrapper from '@/components/SubtitleWrapper.vue'
import SubsubtitleWrapper from '@/components/SubsubtitleWrapper.vue'
import ImpBox from '@/components/ImpBox.vue'
import ImageWrapper from '@/components/ImageWrapper.vue'
import CalloutTextWrapper from '@/components/CalloutTextWrapper.vue'
import EmphasisWrapper from '@/components/EmphasisWrapper.vue'
import QuoteWrapper from '@/components/QuoteWrapper.vue'
import BulletWrapper from '@/components/BulletWrapper.vue'
import NumbersWrapper from '@/components/NumbersWrapper.vue'
import SpacerWrapper from '@/components/SpacerWrapper.vue'
import { computed } from 'vue'

const { items } = defineProps({
    items: Object
})

const data = computed(() => items as Daum[])
</script>