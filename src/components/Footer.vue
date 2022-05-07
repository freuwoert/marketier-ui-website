<template>
    <footer>
        <div class="limiter">
            <div class="row">
                <RouterLink to="/">
                    <img alt="Marketier UI logo" class="logo" src="@/assets/mui_icon.svg" height="32"/>
                </RouterLink>
                <div class="spacer"></div>
                <span>A project made with 💜 by the Marketier team</span>
            </div>
            <div class="divider"></div>
            <div class="row">
                © {{ new Date().getFullYear() }} Marketier
                <div class="spacer"></div>
                <nav>
                    <a href="https://github.com/freuwoert/marketier-ui" target="_blank">Github</a>
                    <span>•</span>
                    <RouterLink to="/legal-disclosures">Legal Disclosures</RouterLink>
                    <span>•</span>
                    <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
                </nav>
            </div>
        </div>
    </footer>
</template>

<style lang="sass" scoped>
    footer
        background: var(--color-background-mute)

        .limiter
            display: flex
            flex-direction: column
            gap: 2rem
            padding-block: 2rem

            .row
                display: flex
                align-items: center
                color: var(--color-text)

                a
                    display: flex

                .spacer
                    flex: 1

                .logo
                    filter: grayscale(100%) brightness(190%)

                    &:hover
                        filter: none

                nav
                    display: flex
                    align-items: center
                    gap: 1rem

                    a
                        color: var(--color-text)
                        text-decoration: none

                        &:hover
                            color: var(--color-heading)

                        &.router-link-exact-active
                            color: var(--color-primary)
        
            .divider
                width: 100%
                height: 0
                border-top: 1px solid var(--color-border)
</style>