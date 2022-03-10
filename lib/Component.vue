<template>
    <div class="v-clipboard">
        <div class="v-clipboard__content">
            <slot></slot>
        </div>
        <div class="v-clipboard__trigger" :data-clipboard-text="props.text">
            <slot name="trigger" v-if="$slots.trigger"></slot>
            <a v-else class="v-clipboard__btn" @click="clickCopy">{{ btnText }}</a>
        </div>
    </div>
</template>
<script lang="ts" setup>
import ClipboardJS from "clipboard";

const props = defineProps({
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
})



const clickCopy = () => {
    const clipboard = new ClipboardJS(".v-clipboard__trigger", props.config);
    clipboard.on("success", function (e) {
        // Free memory
        clipboard.destroy();

        // Custom success callback
        if (props.onSuccess) {
            props.onSuccess(clipboard, e);
            return;
        }
        console.log("Copy succeeded!", e);

    });
    clipboard.on("error", (e) => {
        //  Free memory
        clipboard.destroy();

        // Copy not supported
        console.log("Copy failed!", e);

        // Custom error callback
        if (props.onError) {
            props.onError(clipboard, e);
            return;
        }

    });
}


defineExpose({
    clickCopy
})

</script>
<script lang="ts">
export default {
    name: 'VClipboard'
}
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