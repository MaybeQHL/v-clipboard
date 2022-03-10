<template>
    <div class="v-clipboard">
        <div class="v-clipboard__content">
            <slot></slot>
        </div>
        <div class="v-clipboard__trigger" :data-clipboard-text="text">
            <slot name="trigger" v-if="$slots.trigger"></slot>
            <a v-else class="v-clipboard__btn" @click="clickCopy">{{ btnText }}</a>
        </div>
    </div>
</template>
<script lang="ts">
import ClipboardJS from "clipboard";

import { defineComponent, unref } from 'vue-demi'
export default defineComponent({
    name: 'VClipboard',
    props: {
        text: {
            type: String,
            required: true
        },
        onSuccess: {
            type: Function
        },
        onError: {
            type: Function
        },
        config: {
            type: Object
        },
        btnText: {
            type: String,
            default: 'Copy'
        }
    },
    setup(p, { emit }) {
        const props = unref(p)
        const clickCopy = () => {
            const clipboard = new ClipboardJS(".v-clipboard__trigger", props.config);
            clipboard.on("success", function (e) {

                // Free memory
                clipboard.destroy();

                // Custom success callback
                emit('success', e, clipboard);

                console.log("Copy succeeded!", e);
            });
            clipboard.on("error", (e) => {
                //  Free memory
                clipboard.destroy();

                // Custom error callback
                emit('error', e, clipboard);

                console.log("Copy error!", e);

            });
        }

        return {
            clickCopy
        }

    }
})
</script>

<style lang="scss" scoped>
.v-clipboard {
    .v-clipboard__content {
        display: inline-block;
    }
    .v-clipboard__trigger {
        display: inline-block;
        margin-left: 5px;
        .v-clipboard__btn {
            color: #377ffc;
        }
    }
}
</style>