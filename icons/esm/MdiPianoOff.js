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
            d: "M22.11 21.46L2.39 1.73L1.11 3L2 3.89V20C2 21.11 2.9 22 4 22H20.11L20.84 22.73L22.11 21.46M8 20H4V5.89L6.8 8.69V13C6.8 13.56 7.24 14 7.79 14H8V20M15 20H9V14H9.31C9.86 14 10.3 13.56 10.3 13V12.19L15 16.89V20M16 20V17.89L18.11 20H16M10.3 7.1L5.2 2H20C21.11 2 22 2.9 22 4V18.8L20 16.8V4H17.25V13C17.25 13.3 17.13 13.55 16.93 13.73L13.75 10.55V4H10.3V7.1Z",
        })
    ]))
}
