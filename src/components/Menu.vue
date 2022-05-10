<template>
    <nav class="menu desktop">
        <RouterLink v-for="item in menu" :key="item.name" :to="item.link">{{item.name}}</RouterLink>
    </nav>

    <div class="menu-wrapper mobile" :class="{'open': isOpen}">
        <button class="menu-toggle-button" @mousedown="toggleMenu()">
            <svg class="svg-wrapper" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="hamburger-path" d="M5 9C5 9 17.5 9 19 9C20.5 9 22.5 7.5 21.5 6C20.5 4.5 18 6 17 7C16 8 7 17 7 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path class="hamburger-path" d="M5 15.0054C5 15.0054 17.5 15.0054 19 15.0054C20.5 15.0054 22.5 16.5054 21.5 18.0054C20.5 19.5054 18 18.0054 17 17.0054C16 16.0054 7 7.00542 7 7.00542" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>

        <div class="menu-content">
            <div class="background" @click="closeMenu()"></div>
            <nav class="menu">
                <RouterLink v-for="item in menu" :key="item.name" :to="item.link" @click="closeMenu()">{{item.name}}</RouterLink>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {name: 'Home', link: '/'},
                // {name: 'Docs', link: '/docs'},
                // {name: 'Getting Started', link: '/getting-started'},
                {name: 'Configurator', link: '/configurator'},
            ],

            isOpen: false,
        }
    },

    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        },

        closeMenu() {
            this.isOpen = false
        },
    },

    watch: {
        isOpen(isOpen) {
            document.body.style.overflow = isOpen ? 'hidden' : 'initial'
        },
    },
}
</script>

<style lang="sass" scoped>
    nav.menu.desktop
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

    .menu-wrapper
        color: var(--color-text)
        display: none

        .menu-toggle-button
            height: 3rem
            width: 3rem
            display: grid
            place-content: center
            border-radius: .325rem
            color: inherit
            background: transparent
            border: none
            padding: 0
            position: relative
            z-index: 10000

            .svg-wrapper
                height: 2rem
                width: 2rem
                color: inherit
                
                .hamburger-path
                    stroke-dasharray: 14 100
                    transition: all 300ms
                    stroke: currentcolor

        .menu-content
            position: fixed
            top: 0
            left: 0
            width: 100%
            height: 100vh
            z-index: 100
            pointer-events: none

            .background
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
                background: #00000080
                opacity: 0
                transition: all 250ms ease-in-out

            nav.menu
                position: absolute
                top: 0
                right: 0
                width: 20rem
                height: 100%
                background: var(--color-background)
                padding: 4rem 1rem 1rem
                display: flex
                flex-direction: column
                transform: translateX(100%)
                transition: all 250ms cubic-bezier(0, 0, 0.2, 1)

                a
                    text-decoration: none
                    color: var(--color-text)
                    position: relative
                    height: 2.5rem
                    display: flex
                    align-items: center
                    padding: 0 1rem
                    border-radius: .5rem
                    transition: all 100ms ease-in-out

                    &.router-link-exact-active
                        background: var(--color-background-soft)
                        color: var(--color-primary)

        &.open
            .menu-toggle-button
                color: var(--color-heading)

                .svg-wrapper .hamburger-path
                    stroke-dashoffset: -23.8

            .menu-content
                pointer-events: all

                .background
                    opacity: 1

                nav.menu
                    transform: translateX(0)

    @media screen and (max-width: 768px)
        nav.menu.desktop
            display: none

        .menu-wrapper
            display: block
</style>