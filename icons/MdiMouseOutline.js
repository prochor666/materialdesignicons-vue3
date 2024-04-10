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
            d: "M13 9V1.07C13.7 1.16 14.37 1.33 15 1.59C17.33 2.53 19.11 4.53 19.75 7C19.91 7.64 20 8.31 20 9H13M17.66 7C17.18 5.65 16.23 4.5 15 3.81V7H17.66M11 9V1.07C10.3 1.16 9.63 1.33 9 1.59C6.67 2.53 4.89 4.53 4.25 7C4.09 7.64 4 8.31 4 9H11M6.34 7C6.82 5.65 7.78 4.5 9 3.81V7H6.34M6 15V13H18V15C18 16.59 17.37 18.12 16.24 19.24C15.12 20.37 13.59 21 12 21C10.41 21 8.88 20.37 7.76 19.24C6.63 18.12 6 16.59 6 15M4 15C4 17.12 4.84 19.16 6.34 20.66C7.84 22.16 9.88 23 12 23C14.12 23 16.16 22.16 17.66 20.66C19.16 19.16 20 17.12 20 15V11H4V15Z",
        })
    ]))
}
