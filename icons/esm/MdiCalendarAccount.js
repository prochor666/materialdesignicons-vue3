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
            d: "M12 9C14 9 15 11.42 13.59 12.84C12.17 14.26 9.75 13.25 9.75 11.25C9.75 10 10.75 9 12 9M16.5 18H7.5V16.88C7.5 15.63 9.5 14.63 12 14.63S16.5 15.63 16.5 16.88M19 19H5V8H19M16 1V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3H18V1H16Z",
        })
    ]))
}
