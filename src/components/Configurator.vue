<template>
    <div class="configurator-wrapper">
        <div class="header">
            <mui-button size="small" :variant="variantByActiveState('input')"  @click="setType('input')"  label="input"/>
            <!-- <mui-button size="small" :variant="variantByActiveState('button')" @click="setType('button')" label="button"/> -->
            <!-- <mui-button size="small" :variant="variantByActiveState('toggle')" @click="setType('toggle')" label="toggle"/> -->
            <!-- <mui-button size="small" :variant="variantByActiveState('loader')" @click="setType('loader')" label="loader"/> -->
            <div class="spacer"></div>
            <!-- <mui-button size="small" variant="text" label="Generate code" icon-right="download"/> -->
        </div>

        <div class="preview">
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
        </div>

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
                    <mui-toggle class="checkbox flex-1" v-model="disabled" no-border append-label="Disabled" />
                    <mui-toggle class="checkbox flex-1" v-model="clearable" no-border append-label="Clearable" />
                    <mui-toggle class="checkbox flex-1" v-model="noBorder" no-border append-label="Hide border" />
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
                    You can use any icon font in your project as long as you set the<br>
                    <code>--mui-icon-font</code> css-variable to the desired font family.
                </small>

                <div class="row">
                    <mui-input no-border label="Left Icon" v-model="iconLeft"/>
                    <mui-input no-border label="Right Icon" v-model="iconRight"/>
                </div>
            </fieldset>

            <fieldset>
                <legend>Validation</legend>

                <mui-toggle class="checkbox" v-model="required" no-border append-label="Required" />
                
                <div class="row">
                    <mui-input no-border type="number" label="Min" v-model="min"/>
                    <mui-input no-border type="number" label="Max" v-model="max"/>
                </div>

                <mui-input no-border label="Pattern" v-model="pattern"/>
                <mui-input no-border label="Error Text" v-model="errorText"/>

                <mui-toggle class="checkbox" v-show="!!max__" v-model="hideMax" no-border append-label="Hide character counter" />
            </fieldset>

            <fieldset v-show="displayPasswordSpecificOptions">
                <legend>Password options</legend>

                <mui-toggle class="checkbox" v-model="hideObfuscationToggle" no-border append-label="Hide obfuscation toggle" />
                <mui-toggle class="checkbox" v-model="showPasswordScore" no-border>
                    <template v-slot:appendLabel>
                        <b>Show password score</b><br>
                        Requires dropbox/zxcvbn
                    </template>
                </mui-toggle>
            </fieldset>

            <fieldset v-show="displayTextareaSpecificOptions">
                <legend>Textarea options</legend>

                <select class="dropdown" v-model="resize">
                    <option value="none">none</option>
                    <option value="vertical">vertical</option>
                    <option value="horizontal">horizontal</option>
                    <option value="both">both</option>
                </select>
            </fieldset>

            <!-- <div class="bottom-bar">
                <mui-button label="Generate code" icon-right="download"/>
            </div> -->
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
            }
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
        grid-template-columns: auto 32rem
        grid-template-rows: 1fr 34rem
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
            overflow-x: auto
            overflow-y: hidden

            .spacer
                flex: 1

        .preview
            grid-area: preview
            display: flex
            align-items: center
            justify-content: center
            padding: 1rem

        .options
            grid-area: options
            background: var(--color-background-mute)
            padding: 1rem 0
            display: flex
            flex-direction: column
            gap: 2rem
            overflow: auto
            --mui-background: #00000010

            fieldset
                border: none
                box-shadow: var(--shadow-elevation-low)
                padding: 1rem
                padding-bottom: 2rem
                gap: 1rem
                display: flex
                flex-direction: column

                legend
                    padding-inline: 0rem
                    color: var(--color-primary)
                    font-weight: 600
                    font-size: .8rem
                    letter-spacing: .25px
                    text-transform: uppercase

            code
                border-radius: .25rem
                padding: .25rem
                background: var(--color-background-soft)

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
                background: #00000010
                --mui-background: var(--color-background-mute)

            .bottom-bar
                display: flex
                padding: 0 1rem
                margin-top: -1rem

                button
                    flex: 1

    @media screen and (max-width: 840px)
        .configurator-wrapper
            grid-template-columns: auto
            grid-template-rows: 1fr 15rem auto
            grid-template-areas: "header" "preview" "options"

    @media screen and (max-width: 540px)
        .configurator-wrapper
            .options
                .row
                    flex-direction: column
                    align-items: stretch

                    .affix,
                    .flex-1,
                    .placeholder
                        flex: none
</style>