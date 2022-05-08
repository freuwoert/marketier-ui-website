<template>
    <main>
        <section id="hero">
            <div class="limiter">
                <h1>Marketier UI</h1>
                <p>A material-like component library for Vue</p>
            </div>
        </section>
        <section id="features">
            <div class="limiter">
                <h2>Components</h2>
            </div>
            <div class="limiter grid">
                <FeatureItem>
                    <template #icon>text_fields</template>
                    <template #heading>Inputs</template>
                    <template #default>Text based inputs like password, number, text, or email fields</template>
                </FeatureItem>

                <FeatureItem>
                    <template #icon>touch_app</template>
                    <template #heading>Buttons</template>
                    <template #default>Filled, contained, and text buttons</template>
                </FeatureItem>

                <FeatureItem>
                    <template #icon>toggle_on</template>
                    <template #heading>Toggles</template>
                    <template #default>Checkboxes and switches</template>
                </FeatureItem>

                <FeatureItem>
                    <template #icon>rotate_right</template>
                    <template #heading>Loaders</template>
                    <template #default>Spinners <del>and loading bars</del> <small>(Coming soon)</small></template>
                </FeatureItem>
            </div>
        </section>
    </main>
</template>

<script setup>
    import FeatureItem from '@/components/FeatureItem.vue'
</script>

<style lang="sass" scoped>
    #hero
        background: var(--color-primary)

        .limiter
            height: 60vh

    #features
        display: flex
        flex-direction: column
        gap: 4rem
        padding-block: 8rem

        .limiter.grid
            display: grid
            grid-template-columns: 1fr 1fr
            gap: 4rem

    @media screen and (max-width: 768px)
        #features
            .limiter.grid
                grid-template-columns: 1fr
</style>