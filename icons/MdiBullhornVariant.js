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
            d: "M20 2V4L4 8V6H2V18H4V16L6 16.5V18.5C6 20.4 7.6 22 9.5 22S13 20.4 13 18.5V18.3L20 20V22H22V2H20M11 18.5C11 19.3 10.3 20 9.5 20S8 19.3 8 18.5V17L11 17.8V18.5Z",
        })
    ]))
}
