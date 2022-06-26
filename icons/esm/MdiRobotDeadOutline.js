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
            d: "M10.62 14.44L9.56 15.5L10.62 16.56L9.56 17.62L8.5 16.56L7.44 17.62L6.38 16.56L7.44 15.5L6.38 14.44L7.44 13.38L8.5 14.44L9.56 13.38L10.62 14.44M16.56 13.38L15.5 14.44L14.44 13.38L13.38 14.44L14.44 15.5L13.38 16.56L14.44 17.62L15.5 16.56L16.56 17.62L17.62 16.56L16.56 15.5L17.62 14.44L16.56 13.38M23 15V18C23 18.55 22.55 19 22 19H21V20C21 21.11 20.11 22 19 22H5C3.9 22 3 21.11 3 20V19H2C1.45 19 1 18.55 1 18V15C1 14.45 1.45 14 2 14H3C3 10.13 6.13 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2S14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7H14C17.87 7 21 10.13 21 14H22C22.55 14 23 14.45 23 15M21 16H19V14C19 11.24 16.76 9 14 9H10C7.24 9 5 11.24 5 14V16H3V17H5V20H19V17H21V16Z",
        })
    ]))
}
