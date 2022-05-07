<template>
    <div class="configurator-wrapper">
        <div class="header">
            <mui-button size="small" :variant="variantByActiveState('input')"  @click="setType('input')"  label="input"/>
            <mui-button size="small" :variant="variantByActiveState('button')" @click="setType('button')" label="button"/>
            <mui-button size="small" :variant="variantByActiveState('toggle')" @click="setType('toggle')" label="toggle"/>
            <mui-button size="small" :variant="variantByActiveState('loader')" @click="setType('loader')" label="loader"/>
            <div class="spacer"></div>
            <mui-button size="small" variant="text" label="Generate code" icon-right="download"/>
        </div>
        <div class="preview">
            <mui-input
                :type="inputType"
                :label="label"
                :placeholder="placeholder"
                :hide-obfuscation-toggle="hideObfuscationToggle"
                :no-border="noBorder"
                :prefix="prefix"
                :suffix="suffix"
                />
        </div>
        <div class="options">
            <mui-input no-border label="Type" v-model="inputType" helper="text, email, tel, url, password, textarea"/>
            <div class="row">
                <mui-toggle v-model="noBorder" no-border append-label="Disable border" />
            </div>
            <mui-input no-border label="Label" v-model="label"/>
            <mui-input no-border label="Placeholder" v-model="placeholder"/>
            <mui-input no-border label="Prefix" v-model="prefix"/>
            <mui-input no-border label="Suffix" v-model="suffix"/>
            
            <div class="row" v-show="displayPasswordSpecificOptions">
                <mui-toggle v-model="hideObfuscationToggle" no-border append-label="Hide obfuscation toggle" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: 'input',
                inputType: 'text',
                noBorder: false,
                border: false,
                label: '',
                placeholder: '',
                prefix: '',
                suffix: '',

                hideObfuscationToggle: false,
            }
        },

        computed: {
            displayPasswordSpecificOptions() {
                return this.inputType === 'password'
            },
        },

        methods: {
            variantByActiveState(type) {
                return this.type === type ? 'filled' : 'text'
            },

            setType(type) {
                this.type = type
            },
        },
    }
</script>
<style lang="sass" scoped>
    .configurator-wrapper
        background: var(--color-background)
        border-radius: .5rem
        box-shadow: var(--shadow-elevation-medium)
        overflow: hidden
        display: grid
        grid-template-columns: auto 25rem
        grid-template-rows: 1fr auto
        grid-template-areas: "header header" "preview options"

        .header
            grid-area: header
            display: flex
            align-items: center
            gap: 1rem
            padding: 1rem
            box-shadow: var(--shadow-elevation-low)
            position: relative
            z-index: 1

            .spacer
                flex: 1

        .preview
            grid-area: preview
            display: flex
            align-items: center
            justify-content: center
            min-height: 30rem

        .options
            grid-area: options
            background: var(--color-background-mute)
            padding: 2rem 1rem
            display: flex
            flex-direction: column
            gap: 1.5rem
            --mui-background: #00000010
</style>