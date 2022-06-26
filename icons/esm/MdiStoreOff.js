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
            d: "M9.2 6L7.2 4H20V6H9.2M20 16.8V14H21V12L20 7H10.2L17.2 14H18V14.8L20 16.8M22.11 21.46L20.84 22.73L14 15.89V20H4V14H3V12L4 7H5.11L1.11 3L2.39 1.73L22.11 21.46M12 14H6V18H12V14Z",
        })
    ]))
}
