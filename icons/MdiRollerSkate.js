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
            d: "M6.5 18C5.1 18 4 19.12 4 20.5S5.1 23 6.5 23 9 21.88 9 20.5 7.86 18 6.5 18M16.5 18C15.1 18 14 19.12 14 20.5S15.1 23 16.5 23 19 21.88 19 20.5 17.86 18 16.5 18M20 17C20 15.63 20.09 13.81 19.5 12.95C18.55 10.9 15.82 10.56 13.91 10.05C13 10 12 9 11.82 8H9C8.71 8 8.5 7.78 8.5 7.5C8.5 7.22 8.71 7 9 7H11.5V6H9C8.71 6 8.5 5.78 8.5 5.5C8.5 5.22 8.71 5 9 5H11.5V2H3V17H20Z",
        })
    ]))
}
