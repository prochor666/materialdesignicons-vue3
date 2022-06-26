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
            "clip-rule": "evenodd",
            d: "M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2M13 7.5C13 5.6 14.6 4 16.5 4C18.4 4 20 5.6 20 7.5C20 9.4 18.4 11 16.5 11C14.6 11 13 9.4 13 7.5M4 4H11V11H4V4M4 20V13H11V20H4M20 20H13V13H20V20Z",
        })
    ]))
}
