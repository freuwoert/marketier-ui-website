<template>
    <div class="item">
        <i><slot name="icon"></slot></i>
        <div class="details">
            <h2><slot name="heading"></slot></h2>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.item
    display: flex
    align-items: flex-start
    gap: 1rem

    i
        display: flex
        place-items: center
        place-content: center
        width: 4rem
        height: 4rem
        border-radius: .75rem
        font-size: 2rem
        font-family: var(--font-icons)
        font-style: normal
        background: var(--color-background-soft)
        color: var(--color-primary)

    .details
        flex: 1

        h2
            font-size: 1.4rem
            margin: 0rem
            color: var(--color-heading)
</style>
