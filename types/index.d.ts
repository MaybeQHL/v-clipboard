
import ClipboardJS, { Event } from "clipboard";

/**  component common definition */
export declare class BaseComponent {
    /** Install component into Vue */
    static install(app: any, ...options: any): any
}
export default class VClipboard extends BaseComponent {
    /**
     * en: click copy
     * cn: 点击复制
     */
    clickCopy: () => void
}

export type Config = ClipboardJS.Options | undefined;
export type SuccessCallback = (e: Event, cbjs: ClipboardJS,) => void
export type ErrorCallback = (e: Event, cbjs: ClipboardJS) => void