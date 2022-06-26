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
            d: "M19 9H18V4H8V20H22V12C22 10.34 20.66 9 19 9M10 6H16V9H10V6M14 17H10V12H14V17M16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17M16 14C15.45 14 15 13.55 15 13S15.45 12 16 12C16.55 12 17 12.45 17 13S16.55 14 16 14M19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15S20 15.45 20 16C20 16.55 19.55 17 19 17M19 14C18.45 14 18 13.55 18 13S18.45 12 19 12 20 12.45 20 13 19.55 14 19 14M4.5 8C3.12 8 2 9.12 2 10.5V18.5C2 19.88 3.12 21 4.5 21S7 19.88 7 18.5V10.5C7 9.12 5.88 8 4.5 8Z",
        })
    ]))
}
