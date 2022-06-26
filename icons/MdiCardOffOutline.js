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
            d: "M9.2 6L7.2 4H20C21.11 4 22 4.89 22 6V18C22 18.24 21.96 18.47 21.88 18.68L20 16.8V6H9.2M22.11 21.46L20.84 22.73L18.11 20H4C2.9 20 2 19.11 2 18V6C2 5.42 2.25 4.9 2.65 4.54L1.11 3L2.39 1.73L6.66 6L18.65 18H18.66L20.57 19.91L20.56 19.91L22.11 21.46M16.11 18L4.11 6H4V18H16.11Z",
        })
    ]))
}
