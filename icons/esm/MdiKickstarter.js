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
            d: "M19.3 10.2L17.5 12L19.3 13.8C21.19 15.67 21.19 18.72 19.3 20.59C17.42 22.46 14.35 22.46 12.47 20.59L11.8 19.93C10.93 21.19 9.5 22 7.83 22C5.16 22 3 19.85 3 17.2V6.8C3 4.15 5.16 2 7.83 2C9.5 2 10.93 2.82 11.8 4.07L12.47 3.41C14.35 1.54 17.42 1.54 19.3 3.41C21.19 5.28 21.19 8.33 19.3 10.2Z",
        })
    ]))
}
