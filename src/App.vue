<template>
  <div class="clipboard">
    <h1>v-clipboard</h1>
    <div class="content">
      <m-panel title="Basic usage">
        <v-clipboard text="text 1" :onSuccess="onSuccess">text 1</v-clipboard>
      </m-panel>
      <m-panel title="Slot usage">
        <v-clipboard text="text 2" :onSuccess="onSuccess" :config="config" ref="clipboard">
          text 2
          <template #trigger>
            <button size="small" @click="clickCopy">复制</button>
          </template>
        </v-clipboard>
      </m-panel>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import VClipboard, { SuccessCallback, Config } from '../'
import '../dist-lib/style.css'

const config = ref<Config>({})

const clipboard = ref<VClipboard>();

const clickCopy = () => {
  clipboard.value?.clickCopy();
}
const onSuccess: SuccessCallback = (c, e) => {
  alert(`Copy ${e.text} succeeded!`);
  // Free memory
  c.destroy();
}

</script>
<style scoped lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
.clipboard {
  text-align: center;
  .content {
    margin-top: 30px;
  }
}
</style>

