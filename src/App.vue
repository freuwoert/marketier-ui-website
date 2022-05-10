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

    main
        padding-block: 8rem
        gap: 12rem
        display: flex
        flex-direction: column

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
                text-align: center

            p
                font-size: 2rem
                text-align: center

    #content
        .limiter
            h2
                margin-bottom: 2rem
            p
                max-width: 50rem
                margin: 0 auto

    @media screen and (max-width: 768px)
        #hero
            .limiter
                h1
                    font-size: 2.6rem

                p
                    font-size: 1.6rem
</style>
