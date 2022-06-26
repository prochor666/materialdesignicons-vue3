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
            d: "M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 18H4V6H20V18M4 0H20V2H4M4 22H20V24H4M12 12C13.38 12 14.5 10.88 14.5 9.5S13.38 7 12 7 9.5 8.12 9.5 9.5 10.62 12 12 12M12 8.5C12.55 8.5 13 8.95 13 9.5S12.55 10.5 12 10.5 11 10.05 11 9.5 11.45 8.5 12 8.5M17 16C17 13.9 13.69 13 12 13S7 13.9 7 16V17H17V16M8.81 15.5C9.42 15 10.84 14.5 12 14.5C13.17 14.5 14.59 15 15.2 15.5H8.81Z",
        })
    ]))
}