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
            d: "M20.84 22.73L18.85 20.74C18.56 21.5 17.84 22 17 22H14.92C14.81 20.59 14.5 19.25 13.97 18H16.11L7 8.89V11C6.36 10.74 5.69 10.53 5 10.37V6.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M17 5V13.8L19 15.8V3C19 1.9 18.11 1 17 1H7C6.24 1 5.59 1.43 5.25 2.05L8.2 5H17M2 20V23H5C5 21.34 3.66 20 2 20M2 16V18C4.76 18 7 20.24 7 23H9C9 19.13 5.87 16 2 16M2 12V14C6.97 14 11 18.03 11 23H13C13 16.92 8.08 12 2 12Z",
        })
    ]))
}
