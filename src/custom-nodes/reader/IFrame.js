import { Node } from "prosemirror-to-html-js";
 
export default class IFrame extends Node {
    matching () {
        return this.node.type === "iframe";
    }
 
    tag () {
        return {
            tag: "iframe",
            attrs: {
                "src": this.node.attrs.src,
                "frameborder": this.node.attrs.frameborder,
                "allowfullscreen": this.node.attrs.allowfullscreen,
                "allow": this.node.attrs.allow,
            }
        };
    }
}
