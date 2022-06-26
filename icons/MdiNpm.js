const { createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
    return (_openBlock(), _createBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [
    _createVNode("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd"
            d: "M4,10V14H6V11H7V14H8V10H4M9,10V15H11V14H13V10H9M12,11V13H11V11H12M14,10V14H16V11H17V14H18V11H19V14H20V10H14M3,9H21V15H12V16H8V15H3V9Z",
        })
    ]))
}
