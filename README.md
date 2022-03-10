
# v-clipboard

A directive for Vue 2 & 3 base on [clipboard.js](https://github.com/zenorocha/clipboard.js).

<p align="left">
If you think it's good , give me a star.Thanks.
</p>

 <p align="center" >
    <img src="https://img.shields.io/npm/v/@maybecode/v-clipboard?style=flat-square" alt="npm version"  style="margin-right:5px;" />
    <img src="https://img.shields.io/npm/dt/@maybecode/v-clipboard.svg?style=flat-square&color=#4fc08d" alt="downloads" style="margin-right:5px;"   />
    <img src="https://img.shields.io/jsdelivr/npm/hm/@maybecode/v-clipboard?style=flat-square" alt="Jsdelivr Hits" style="margin-right:5px;"  >

  <img src="https://img.shields.io/github/stars/maybeQHL/v-clipboard?style=flat-square&logo=GitHub" alt="star" style="margin-right:5px;"  >
   <img src="https://gitee.com/null_639_5368/v-clipboard/badge/star.svg?style=flat-square" alt="star">
</p>

### Online Demo

[Demo](http://null_639_5368.gitee.io/v-clipboard)

## Install
### Vue3
```
yarn add @maybecode/v-clipboard
```

### Vue2
```
yarn add @maybecode/v-clipboard @vue/composition-api
```

## Register
### Vue3
```
import { createApp } from 'vue';
import VClipboard from '@maybecode/v-clipboard'

const app = createApp();

app.use(VClipboard);
```
### Vue2
```
import Vue from 'vue';
import VClipboard from '@maybecode/v-clipboard'

Vue.use(VClipboard);

```
### Basic Usage
```
<template>
 <v-clipboard text="text 1" :onSuccess="onSuccess">text 1</v-clipboard>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VClipboard, { SuccessCallback, Config } from '@maybecode/v-clipboard'
import '@maybecode/v-clipboard/dist-lib/style.css'

const config = ref<Config>({})

const clipboard = ref<VClipboard>();

const clickCopy = () => {
  clipboard.value?.clickCopy();
}
const onSuccess: SuccessCallback = (c, e) => {
  alert(`Copy ${e.text} succeeded!`);
}
```

## Props

| name      | type                                    | default | remark                |
| --------- | --------------------------------------- | ------- | --------------------- |
| config    | _{}_                                    |         | `clipboard.js`Options |
| onSuccess | _(cbjs: ClipboardJS, e: Event) => void_ |         | -                     |
| onError   | _(cbjs: ClipboardJS, e: Event) => void_ |         | -                     |
| btnText   | string                                  | Copy    | copy button text      |

## Ref

| name      | explain               | params |
| --------- | --------------------- | ------ |
| clickCopy | Click to trigger copy | -      |

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="42px" height="42px" />](https://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="42px" height="42px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="42px" height="42px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="42px" height="42px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                        | last 2 versions                                                                                                                                                                                                    | last 2 versions                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                |

## License

[MIT](./LICENSE)