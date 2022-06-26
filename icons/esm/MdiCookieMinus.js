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
            d: "M15 14.53C15 14.5 15 14.5 15 14.5C15 13.67 15.67 13 16.5 13C16.8 13 17.08 13.09 17.32 13.24C17.85 13.09 18.42 13 19 13C19.66 13 20.3 13.12 20.89 13.32C20.96 12.89 21 12.45 21 12C21 11.5 20.96 11 20.87 10.5C20.6 10 20 10 20 10H18V9C18 8 17 8 17 8H15V7C15 6 14 6 14 6H13V4C13 3 12 3 12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C12.45 21 12.89 20.96 13.32 20.89C13.12 20.3 13 19.66 13 19C13 17.22 13.78 15.63 15 14.53M6.5 13C5.67 13 5 12.33 5 11.5S5.67 10 6.5 10 8 10.67 8 11.5 7.33 13 6.5 13M8 7.5C8 6.67 8.67 6 9.5 6S11 6.67 11 7.5 10.33 9 9.5 9 8 8.33 8 7.5M11 19C10.17 19 9.5 18.33 9.5 17.5S10.17 16 11 16 12.5 16.67 12.5 17.5 11.83 19 11 19M11.5 14C10.67 14 10 13.33 10 12.5S10.67 11 11.5 11 13 11.67 13 12.5 12.33 14 11.5 14M23 18V20H15V18H23Z",
        })
    ]))
}
