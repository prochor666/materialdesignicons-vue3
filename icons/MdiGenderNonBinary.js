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
            d: "M13 3H11V5.27L9.04 4.13L8.04 5.87L10 7L8.04 8.13L9.04 9.87L11 8.73V12.1C8.72 12.56 7 14.58 7 17C7 19.76 9.24 22 12 22S17 19.76 17 17C17 14.58 15.28 12.56 13 12.1V8.73L14.96 9.87L15.96 8.13L14 7L15.96 5.87L14.96 4.13L13 5.27V3M12 20C10.35 20 9 18.65 9 17S10.35 14 12 14 15 15.35 15 17 13.65 20 12 20Z",
        })
    ]))
}
