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
            d: "M22 14H21C21 10.13 17.87 7 14 7H13V5.73C13.6 5.39 14 4.74 14 4C14 2.9 13.11 2 12 2S10 2.9 10 4C10 4.74 10.4 5.39 11 5.73V7H10C6.13 7 3 10.13 3 14H2C1.45 14 1 14.45 1 15V18C1 18.55 1.45 19 2 19H3V20C3 21.11 3.9 22 5 22H19C20.11 22 21 21.11 21 20V19H22C22.55 19 23 18.55 23 18V15C23 14.45 22.55 14 22 14M21 17H19V20H5V17H3V16H5V14C5 11.24 7.24 9 10 9H14C16.76 9 19 11.24 19 14V16H21V17M10.7 14C11.1 14.39 11.1 15.05 10.7 15.45L9.97 16.18L8.5 17.65L6.3 15.45C5.9 15.05 5.9 14.39 6.3 14C6.71 13.58 7.36 13.58 7.77 14L8.5 14.72L9.23 14C9.64 13.58 10.29 13.58 10.7 14M17.7 14C18.1 14.39 18.1 15.05 17.7 15.45L16.97 16.18L15.5 17.65L13.3 15.45C12.9 15.05 12.9 14.39 13.3 14C13.71 13.58 14.36 13.58 14.77 14L15.5 14.72L16.23 14C16.64 13.58 17.29 13.58 17.7 14Z",
        })
    ]))
}
