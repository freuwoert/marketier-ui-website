<template>
    <header id="header">
        <div class="limiter">
            <RouterLink to="/" id="logo">
                <img alt="Marketier UI logo" class="logo" src="@/assets/mui_icon.svg" />
                <h2>Marketier UI</h2>
            </RouterLink>

            <div class="spacer"></div>
            
            <Menu />
        </div>
    </header>
</template>

<script setup>
    import Menu from './Menu.vue'
</script>

<style lang="sass" scoped>
    header
        position: fixed
        top: 0
        left: 0
        z-index: 100
        width: 100%
        height: 4rem
        background-color: #ffffffee
        backdrop-filter: blur(10px)
        display: flex
        align-items: center

        #logo
            padding: 0
            border-radius: .5rem
            display: flex
            align-items: center
            gap: 1rem
            padding-block: .5rem
            color: var(--color-heading)
            text-decoration: none
            position: relative
            
            &::after
                content: ''
                position: absolute
                top: 0
                left: -.5rem
                width: calc(100% + 1.5rem)
                height: 100%
                border-radius: inherit
                background: var(--color-background-soft)
                opacity: 0

            &:hover
                color: var(--color-primary)
                &::after
                    opacity: 1

            .logo
                margin: 0
                height: 2rem
                position: relative
                z-index: 1

            h2
                font-size: 1.2rem
                margin: 0
                white-space: nowrap
                color: inherit
                position: relative
                z-index: 1

            .spacer
                flex: 1

        .limiter
            display: flex
            align-items: center
            justify-content: space-between
</style>