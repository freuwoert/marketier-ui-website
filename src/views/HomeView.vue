<template>
    <section id="hero">
        <div class="limiter">
            <h1>Marketier UI</h1>
            <p>A material-like component library for Vue</p>
        </div>
    </section>

    <main>
        <section id="content">
            <div class="limiter">
                <h2>Our motivation</h2>
                <p>
                    While developing Marketier – our platform for marketing and productivity tools –
                    we needed a way to quickly create forms and inputs for the tools we were building.
                    We built our own UI library to have a unique yet familiar look combined with a feature rich experience.<br><br>

                    The definate goal of this projekt is to create a <b>modern</b>, <b>jank-free</b> and <b>user-friendly</b>
                    UI library with the focus on interactive input components.
                </p>
            </div>
        </section>

        <section id="features">
            <div class="limiter">
                <h2>Available Components</h2>
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

                <FeatureItem>
                    <template #icon>widgets</template>
                    <template #heading>...and more are on the way!</template>
                    <template #default>Components like date-, time-, color-, or icon-pickers, radio selects, icon buttons, select inputs and more</template>
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

        h2
            text-align: center

        .limiter.grid
            display: grid
            grid-template-columns: 1fr 1fr
            gap: 4rem

    #content
        h2
            text-align: center

    @media screen and (max-width: 768px)
        #features
            .limiter.grid
                grid-template-columns: 1fr
</style>