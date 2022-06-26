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
            d: "M22 16V18H20C18.6 18 17.2 17.6 16 17C13.5 18.3 10.5 18.3 8 17C6.8 17.6 5.4 18 4 18H2V16H4C5.4 16 6.8 15.5 8 14.7C10.4 16.4 13.6 16.4 16 14.7C17.2 15.5 18.6 16 20 16H22M5.28 13.79C5.82 13.63 6.37 13.38 6.89 13.04L8.03 12.27L9.16 13.07C10 13.66 11 14 12 14C13 14 14 13.66 14.84 13.07L15.97 12.27L17.11 13.04C17.93 13.59 18.83 13.9 19.67 13.97C18.24 7.4 12.37 2 6 2C5.65 2 5.33 2.18 5.15 2.47C4.97 2.77 4.95 3.14 5.11 3.45C7.28 7.79 6.61 11.29 5.28 13.79M16 18.7C13.6 20.4 10.4 20.4 8 18.7C6.8 19.5 5.4 20 4 20H2V22H4C5.4 22 6.8 21.6 8 21C10.5 22.3 13.5 22.3 16 21C17.2 21.6 18.6 22 20 22H22V20H20C18.6 20 17.2 19.5 16 18.7Z",
        })
    ]))
}
