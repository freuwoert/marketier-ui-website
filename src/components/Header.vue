<template>
    <header>
        <div class="limiter">
            <RouterLink to="/" id="logo">
                <img alt="Marketier UI logo" class="logo" src="@/assets/mui_icon.svg" />
                <h2>Marketier UI</h2>
            </RouterLink>
            
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/configurator">Configurator</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style lang="sass" scoped>
    header
        position: fixed
        top: 0
        left: 0
        z-index: 100
        width: 100%
        height: 4rem
        background-color: #ffffffdd
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

        .limiter
            display: flex
            align-items: center

        nav
            width: 100%
            font-size: 1rem
            margin: 0
            display: flex
            align-items: center
            justify-content: flex-end
            gap: 1rem

            a
                text-decoration: none
                color: var(--color-text)
                position: relative
                height: 2.5rem
                display: flex
                align-items: center
                justify-content: center
                padding: 0 1rem
                border-radius: .5rem
                transition: all 100ms ease-in-out

                &::after
                    content: ''
                    height: 100%
                    width: 100%
                    border-radius: inherit
                    position: absolute
                    top: 0
                    left: 0
                    background: var(--color-primary)
                    opacity: 0
                    transition: all 100ms ease-in-out

                &:hover
                    background: transparent
                    color: var(--color-primary)

                &.router-link-exact-active
                    background: var(--color-background-soft)
                    color: var(--color-primary)
</style>