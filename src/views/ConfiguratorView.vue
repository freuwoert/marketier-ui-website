<template>
    <main>
        <section id="hero">
            <div class="limiter">
                <h1>MUI Configurator</h1>
            </div>
        </section>
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
        padding-block: 8rem
        --primary: var(--color-primary)
        --mui-icon-font: var(--font-icons)
</style>