<template>
    <section id="hero">
        <div class="limiter">
            <h1>MUI Configurator</h1>
        </div>
    </section>

    <main>
        <section id="configurator">
            <div class="limiter">
                <Configurator />
            </div>
        </section>
    </main>
</template>

<script setup>
    import Configurator from '@/components/Configurator.vue'
</script>

<style lang="sass" scoped>
    #configurator
        --primary: var(--color-primary)
        --mui-icon-font: var(--font-icons)

    @media screen and (max-width: 840px)
        main
            padding-block: 0
            gap: 0

        #configurator
            .limiter
                padding: 0
</style>