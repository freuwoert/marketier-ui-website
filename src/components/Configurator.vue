<template>
    <div class="configurator-wrapper">
        <div class="options">
            <fieldset>
                <legend>General settings</legend>

                <select class="dropdown" v-model="inputType">
                    <option value="text">text</option>
                    <option value="password">password</option>
                    <option value="email">email</option>
                    <option value="number">number</option>
                    <option value="tel">tel</option>
                    <option value="url">url</option>
                    <option value="search">search</option>
                    <option value="textarea">textarea</option>
                </select>


                <div class="row">
                    <mui-toggle class="checkbox flex-1" v-model="disabled" no-border label="Disabled" />
                    <mui-toggle class="checkbox flex-1" v-model="clearable" no-border label="Clearable" />
                    <mui-toggle class="checkbox flex-1" v-model="noBorder" no-border label="Hide border" />
                </div>
            </fieldset>

            <fieldset>
                <legend>Labels & text</legend>

                <mui-input no-border label="Label" v-model="label"/>

                <div class="row">
                    <mui-input no-border label="Prefix" v-model="prefix" class="affix"/>
                    <mui-input no-border label="Placeholder" v-model="placeholder" class="placeholder"/>
                    <mui-input no-border label="Suffix" v-model="suffix" class="affix"/>
                </div>

                <mui-input no-border label="Helper text" v-model="helper"/>
            </fieldset>

            <fieldset>
                <legend>Icons</legend>

                <small>
                    <b>This site uses Googles "Material Symbols Rounded" icon font.</b><br>
                    You can use any icon font in your project as long as you set the
                    <code>--mui-icon-font</code> css-variable to the desired font family.
                </small>

                <div class="row">
                    <mui-input class="flex-1" no-border label="Left Icon" v-model="iconLeft"/>
                    <mui-input class="flex-1" no-border label="Right Icon" v-model="iconRight"/>
                </div>
            </fieldset>

            <fieldset>
                <legend>Validation</legend>

                <mui-toggle class="checkbox" v-model="required" no-border label="Required" />
                
                <div class="row">
                    <mui-input class="flex-1" no-border type="number" label="Min" v-model="min"/>
                    <mui-input class="flex-1" no-border type="number" label="Max" v-model="max"/>
                </div>

                <mui-input no-border label="Pattern" v-model="pattern"/>
                <mui-input no-border label="Error Text" v-model="errorText"/>

                <mui-toggle class="checkbox" v-show="!!max__" v-model="hideMax" no-border append-label="Hide character counter" />
            </fieldset>

            <fieldset v-if="displayPasswordSpecificOptions">
                <legend>Password options</legend>

                <mui-toggle class="checkbox" v-model="hideObfuscationToggle" no-border label="Hide obfuscation toggle" />
                <mui-toggle class="checkbox" v-model="showPasswordScore" no-border>
                    <template v-slot:label>
                        <b>Show password score</b><br>
                        Requires dropbox/zxcvbn
                    </template>
                </mui-toggle>
            </fieldset>

            <fieldset v-if="displayTextareaSpecificOptions">
                <legend>Textarea options</legend>

                <select class="dropdown" v-model="resize">
                    <option value="none">none</option>
                    <option value="vertical">vertical</option>
                    <option value="horizontal">horizontal</option>
                    <option value="both">both</option>
                </select>
            </fieldset>
        </div>

        <div class="preview" ref="preview" :class="{'fixed': previewFixed}">
            <mui-input
                v-if="type === 'input'"
                :type="inputType"
                :label="label"
                :placeholder="placeholder"
                :icon-left="iconLeft"
                :icon-right="iconRight"
                :helper="helper"
                :errorText="errorText"
                :hide-obfuscation-toggle="hideObfuscationToggle"
                :show-password-score="showPasswordScore"
                :resize="resize"
                :no-border="noBorder"
                :clearable="clearable"
                :prefix="prefix"
                :suffix="suffix"
                :disabled="disabled"
                :required="required"
                :min="min__"
                :max="max__"
                :pattern="pattern__"
                :hideMax="hideMax"
                />

            <mui-button
                v-if="type === 'button'"
                :label="label"
                />

            <mui-toggle
                v-if="type === 'toggle'"
                />

            <mui-loader
                v-if="type === 'loader'"
                />

            <div class="info">
                <span>Preview</span>
                <div>|</div>
                <a href="#">Docs</a>
            </div>
        </div>

        <div class="output">
            {{generatedCode}}
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
                clearable: false,
                label: '',
                placeholder: '',
                iconLeft: '',
                iconRight: '',
                prefix: '',
                suffix: '',
                helper: '',
                errorText: '',
                disabled: false,
                required: false,
                min: '',
                max: '',
                pattern: '',
                resize: 'none',

                hideObfuscationToggle: false,
                showPasswordScore: false,
                hideMax: false,



                previewFixed: false,
                initialPreviewPosition: 0,
            }
        },

        mounted() {
            this.initialPreviewPosition = this.$refs.preview.getBoundingClientRect().top + window.scrollY
            window.addEventListener('resize', this.calculateScroll)
            window.addEventListener('scroll', this.calculateScroll)
            this.calculateScroll()
        },

        computed: {
            displayPasswordSpecificOptions() {
                return this.inputType === 'password'
            },

            displayTextareaSpecificOptions() {
                return this.inputType === 'textarea'
            },

            min__() {
                return this.min || this.min === 0 ? this.min : null
            },

            max__() {
                return this.max || this.max === 0 ? this.max : null
            },

            pattern__() {
                return this.pattern ? this.pattern : null
            },



            inputCode() {
                let code = `<mui-input type="${this.inputType}"`

                if (this.label) code += ` label="${this.label}"`
                if (this.placeholder) code += ` placeholder="${this.placeholder}"`
                if (this.iconLeft) code += ` icon-left="${this.iconLeft}"`
                if (this.iconRight) code += ` icon-right="${this.iconRight}"`
                if (this.prefix) code += ` prefix="${this.prefix}"`
                if (this.suffix) code += ` suffix="${this.suffix}"`
                if (this.noBorder) code += ` no-border`
                if (this.disabled) code += ` disabled`
                if (this.clearable) code += ` clearable`
                if (this.required) code += ` required`
                if (this.min__) code += ` :min="${this.min__}"`
                if (this.max__) code += ` :max="${this.max__}"`
                if (this.max__ && this.hideMax) code += ` hide-max`
                if (this.pattern__) code += ` pattern="${this.pattern__}"`
                if (this.inputType === 'textarea' && this.resize !== 'none') code += ` resize="${this.resize}"`
                if (this.errorText) code += ` error-text="${this.errorText}"`
                if (this.inputType === 'password' && this.hideObfuscationToggle) code += ` hide-obfuscation-toggle`
                if (this.inputType === 'password' && this.showPasswordScore) code += ` show-password-score`
                
                code += ` />`

                return code
            },



            generatedCode() {
                let code = ''

                switch (this.type)
                {
                    case 'input': code = this.inputCode; break;
                }

                return code
            },
        },

        methods: {
            variantByActiveState(type) {
                return this.type === type ? 'filled' : 'text'
            },

            setType(type) {
                this.type = type
            },

            calculateScroll() {
                this.previewFixed = this.initialPreviewPosition < (window.scrollY + (document?.getElementById('header')?.getBoundingClientRect()?.height || 0))
            },
        },
    }
</script>

<style lang="sass" scoped>
    .configurator-wrapper
        display: flex
        flex-direction: column
        gap: 1rem
        --mui-background: var(--color-background-mute)

        .preview
            grid-area: preview
            display: flex
            align-items: center
            justify-content: center
            padding: 1rem
            padding-top: 3.75rem
            border-radius: 8px
            border: 1px solid var(--color-background-soft)
            background: var(--color-background)
            position: relative

            .info
                position: absolute
                top: 1rem
                left: 1rem
                background: #000000aa
                backdrop-filter: blur(10px)
                color: #ffffffee
                border-radius: 3rem
                display: flex
                align-items: center
                padding: 0 1rem
                gap: .5rem
                height: 1.75rem
                font-size: .8rem
                user-select: none

                > div
                    opacity: .5

                > a
                    color: #1e90ff
                    text-decoration: none

                    &:hover
                        color: #70a1ff

        .options
            grid-area: options
            padding-top: 2rem
            display: flex
            flex-direction: column
            gap: 1rem
            overflow: auto

            fieldset
                border: none
                gap: 1rem
                padding: 0
                display: flex
                flex-direction: column
                border-radius: 8px
                border: 1px solid var(--color-background-soft)
                box-shadow: var(--shadow-elevation-low)

                legend
                    display: flex
                    width: 100%
                    line-height: 1.5
                    padding: 1rem
                    margin-bottom: 1rem
                    background: var(--color-background-mute)
                    color: var(--color-primary)
                    font-weight: 600
                    font-size: .8rem
                    letter-spacing: .25px
                    text-transform: uppercase

            code
                border-radius: .25rem
                padding: 0 .25rem
                display: inline-block
                background: var(--color-background-mute)

            .row
                display: flex
                align-items: center
                gap: 1rem

                .flex-1
                    flex: 1

                .placeholder
                    flex: 3

                .affix
                    flex: 2

            .dropdown
                background: var(--mui-background)
                border: none
                border-radius: .325rem
                height: 3rem
                font-family: inherit
                padding: 0 .8rem

            .checkbox
                justify-content: flex-start
                height: 3rem
                padding-left: 1rem
                background: var(--color-background-mute)
                --mui-background: var(--color-background-mute)

            .bottom-bar
                display: flex
                padding: 1rem
                margin-top: -2rem

                button
                    flex: 1

        .output
            background: #282c34
            color: #abb2bf
            border-radius: 8px
            padding: 1rem
            font-family: monospace

    @media screen and (max-width: 840px)
        .configurator-wrapper
            border-radius: 0
            box-shadow: none
            grid-template-columns: auto
            grid-template-rows: 10rem auto auto
            grid-template-areas: "preview" "header" "options"

            .preview
                width: 100%
                height: 10rem
                border-top: 2px solid var(--color-border)
                border-bottom: 2px solid var(--color-border)
                background-color: #ffffffee
                backdrop-filter: blur(10px)
                padding-top: 3.25rem

                &.fixed
                    position: fixed
                    z-index: 10
                    top: 4rem
                    left: 0
                    border-bottom-color: transparent
                    box-shadow: var(--shadow-elevation-medium)
                
            .header
                background: var(--color-background-mute)
                box-shadow: none
                border-bottom: 2px solid var(--color-border)

            .options
                fieldset
                    &:last-of-type
                        box-shadow: none

                .bottom-bar
                    border-top: 2px solid var(--color-border)
                    border-bottom: 2px solid var(--color-border)

    @media screen and (max-width: 540px)
        .configurator-wrapper
            .preview
                padding: 1rem
                height: 8rem

                .info
                    display: none

            .header
                padding-block: 2rem

            .options
                .row
                    flex-direction: column
                    align-items: stretch

                    .affix,
                    .flex-1,
                    .placeholder
                        flex: none
</style>