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
            d: "M20 7H22V9H20C18.62 9 17.26 8.65 16 8C13.5 9.3 10.5 9.3 8 8C6.74 8.65 5.37 9 4 9H2V7H4C5.39 7 6.78 6.53 8 5.67C10.44 7.38 13.56 7.38 16 5.67C17.22 6.53 18.61 7 20 7M12 12.5C14.21 12.5 16 14.29 16 16.5C16 17.32 15.75 18.08 15.33 18.71L14.24 17.62C14.41 17.28 14.5 16.9 14.5 16.5C14.5 15.12 13.38 14 12 14V15.5L9.75 13.25L12 11V12.5M12 19V17.5L14.25 19.75L12 22V20.5C9.79 20.5 8 18.71 8 16.5C8 15.68 8.25 14.92 8.67 14.29L9.76 15.38C9.59 15.72 9.5 16.1 9.5 16.5C9.5 17.88 10.62 19 12 19Z",
        })
    ]))
}
