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
            d: "M12,4C6.5,4 2,7.58 2,12C2,14.12 3.65,15.87 5.76,16H6A4,4 0 0,0 10,12A4,4 0 0,0 6,8H5.76C7.44,6.41 9.69,5.55 12,5.6C13.77,5.58 15.5,6.07 17,7L18.25,5.75C16.38,4.58 14.21,3.97 12,4M6,10A2,2 0 0,1 8,12C8,13.11 7.08,14 6,14C4.96,14 4.1,13.22 4,12.2C4,12.07 4,11.93 4,11.8C4.1,10.77 4.97,10 6,10M18.24,8H18A4,4 0 0,0 14,12A4,4 0 0,0 18,16H18.24C16.56,17.59 14.31,18.45 12,18.4C10.23,18.42 8.5,17.93 7,17L5.76,18.24C7.63,19.41 9.79,20 12,20C17.5,20 22,16.42 22,12C22,9.88 20.35,8.13 18.24,8M18,14A2,2 0 0,1 16,12C16,10.89 16.92,10 18,10C19.04,10 19.9,10.78 20,11.8C20,11.93 20,12.07 20,12.2C19.9,13.23 19.03,14 18,14Z",
        })
    ]))
}
