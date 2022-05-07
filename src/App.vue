<template>
    <Header />
    <RouterView />
    <Footer />
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
</script>

<style lang="sass">
    @import '@/assets/base.css'

    body
        padding-top: 4rem

    #hero
        background: var(--color-primary)

        .limiter
            height: 40vh
            display: flex
            justify-content: center
            align-items: center
            flex-direction: column
            color: #ffffffaa

            h1
                font-size: 4rem
                font-weight: 300
                color: var(--color-primary-contrast)

            p
                font-size: 2rem

    #content
        padding-block: 8rem

        .limiter p
            max-width: 50rem
</style>
