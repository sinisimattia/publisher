const Node = require("prosemirror-to-html-js").Node;
 
export default class IFrame extends Node {
    matching () {
        return this.node.type === "iframe";
    }
 
    tag () {
        return "iframe";
    }
}
