/**
 * v-clipboard
 * A directive for Vue 2 & 3 base on clipboard.
 * @author maybe
 * @desc 基于 clipboard https://github.com/zenorocha/clipboard.js
 */
import { App } from "vue-demi";
import Component from './Component.vue'

function install(app: App, options: any) {
    app.component(Component.name, Component)
}
Component.install = install;

export default Component;
