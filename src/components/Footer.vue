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
                    <a href="https://marketier.solutions/legal-disclosures" target="_blank">Legal Disclosures</a>
                    <!-- <RouterLink to="/legal-disclosures">Legal Disclosures</RouterLink> -->
                    <span>•</span>
                    <a href="https://marketier.solutions/privacy-policy" target="_blank">Privacy Policy</a>
                    <!-- <RouterLink to="/privacy-policy">Privacy Policy</RouterLink> -->
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
                    flex-wrap: wrap
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

    @media screen and (max-width: 768px)
        footer
            .limiter
                .row
                    flex-direction: column
                    gap: 1rem

                    > span
                        font-size: .8rem

                    .spacer
                        display: none

    @media screen and (max-width: 480px)
        footer
            .limiter
                padding-bottom: 1rem

                .row
                    gap: 2rem

                    nav
                        border-radius: .75rem
                        width: 100%
                        background: #00000010
                        padding: 1rem
                        flex-direction: column
                        
                        > span
                            display: none
</style>