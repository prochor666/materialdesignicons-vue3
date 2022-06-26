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
            d: "M2.39 1.73L1.11 3L5 6.89V19C5 20.11 5.9 21 7 21V22H9V21H11.5V13.39L12.5 14.39V21H15V22H17V21C17.58 21 18.1 20.75 18.46 20.35L20.84 22.73L22.11 21.46L2.39 1.73M10 14H7V10H8.11L10 11.89V14M19 15.8L12.5 9.3V2H17C18.11 2 19 2.9 19 4V15.8M11.5 8.3L5.7 2.5C6.05 2.19 6.5 2 7 2H11.5V8.3Z",
        })
    ]))
}
