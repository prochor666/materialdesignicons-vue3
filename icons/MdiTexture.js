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
            d: "M9.29,21H12.12L21,12.12V9.29M19,21C19.55,21 20.05,20.78 20.41,20.41C20.78,20.05 21,19.55 21,19V17L17,21M5,3A2,2 0 0,0 3,5V7L7,3M11.88,3L3,11.88V14.71L14.71,3M19.5,3.08L3.08,19.5C3.17,19.85 3.35,20.16 3.59,20.41C3.84,20.65 4.15,20.83 4.5,20.92L20.93,4.5C20.74,3.8 20.2,3.26 19.5,3.08Z",
        })
    ]))
}
