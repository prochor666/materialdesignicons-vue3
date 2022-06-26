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
            d: "M19.5 20.5V22H18V20.5H19.5M17.5 15.5H16V15C16 13.34 17.34 12 19 12S22 13.34 22 15C22 15.97 21.5 16.88 20.71 17.41L20.41 17.6C19.84 18 19.5 18.61 19.5 19.3V19.5H18V19.3C18 18.11 18.6 17 19.59 16.35L19.88 16.16C20.27 15.9 20.5 15.47 20.5 15C20.5 14.17 19.83 13.5 19 13.5S17.5 14.17 17.5 15V15.5M18 3H4C2.9 3 2 3.9 2 5V17C2 18.1 2.9 19 4 19H14V17H12V13H14.42C14.78 12.2 15.34 11.5 16.03 11H12V7H18V10.1C18.32 10.04 18.66 10 19 10S19.68 10.04 20 10.1V5C20 3.9 19.11 3 18 3M10 17H4V13H10V17M10 11H4V7H10V11Z",
        })
    ]))
}
