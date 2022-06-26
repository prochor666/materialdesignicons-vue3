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
            d: "M17 17H15V23H13V17H10.88L9.34 18.93L11.71 21.29L10.29 22.71L7.93 20.34C7.58 20 7.38 19.53 7.35 19.04C7.32 18.55 7.47 18.06 7.78 17.68L8.32 17H7L9 13V10C8.38 10.47 7.88 11.07 7.53 11.76C7.18 12.46 7 13.22 7 14H5C5 12.14 5.74 10.36 7.05 9.05C8.36 7.74 10.14 7 12 7C13.33 7 14.6 6.47 15.54 5.54C16.47 4.6 17 3.33 17 2H19C19 3.32 18.62 4.62 17.91 5.73C17.2 6.85 16.2 7.74 15 8.31V13L17 17M14 4C14 4.4 13.88 4.78 13.66 5.11C13.44 5.44 13.13 5.7 12.77 5.85C12.4 6 12 6.04 11.61 5.96C11.22 5.88 10.87 5.69 10.59 5.41C10.31 5.13 10.12 4.78 10.04 4.39C9.96 4 10 3.6 10.15 3.24C10.3 2.87 10.56 2.56 10.89 2.34C11.22 2.12 11.6 2 12 2C12.53 2 13.04 2.21 13.41 2.59C13.79 2.96 14 3.47 14 4Z",
        })
    ]))
}
