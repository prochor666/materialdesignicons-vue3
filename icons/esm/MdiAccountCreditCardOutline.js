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
            d: "M7 4C4.8 4 3 5.8 3 8S4.8 12 7 12 11 10.2 11 8 9.2 4 7 4M7 10C5.9 10 5 9.1 5 8S5.9 6 7 6 9 6.9 9 8 8.1 10 7 10M7 14C3.1 14 0 15.8 0 18V20H11V18H2C2 17.4 3.8 16 7 16C8.8 16 10.2 16.5 11 17V14.8C9.9 14.3 8.5 14 7 14M22 4H15C13.9 4 13 4.9 13 6V18C13 19.1 13.9 20 15 20H22C23.1 20 24 19.1 24 18V6C24 4.9 23.1 4 22 4M16 18H15V6H16V18M22 18H18V6H22V18Z",
        })
    ]))
}
