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
            d: "M18 1C15.2 1 13 3.2 13 6V8H4C2.9 8 2 8.9 2 10V20C2 21.1 2.9 22 4 22H16C17.1 22 18 21.1 18 20V10C18 8.9 17.1 8 16 8H15V6C15 4.3 16.3 3 18 3S21 4.3 21 6V8H23V6C23 3.2 20.8 1 18 1M7.5 11C8.3 11 9 11.7 9 12.5S8.3 14 7.5 14 6 13.3 6 12.5 6.7 11 7.5 11M12.5 19C11.7 19 11 18.3 11 17.5S11.7 16 12.5 16 14 16.7 14 17.5 13.3 19 12.5 19M7.2 19.2L5.8 17.8L12.9 10.7L14.3 12.1L7.2 19.2Z",
        })
    ]))
}
