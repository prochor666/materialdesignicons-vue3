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
            d: "M13.5,18H4V12H14.3C15.3,10.8 16.8,10 18.5,10C19.8,10 21,10.5 22,11.3V6A2,2 0 0,0 20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H14.6C14.2,19.4 13.8,18.7 13.5,18M4,6H20V8H4V6M18.5,12C16.6,12 15,13.6 15,15.5C15,18.1 18.5,22 18.5,22C18.5,22 22,18.1 22,15.5C22,13.6 20.4,12 18.5,12M18.5,16.8C17.8,16.8 17.3,16.2 17.3,15.6C17.3,14.9 17.9,14.4 18.5,14.4C19.1,14.4 19.7,15 19.7,15.6C19.8,16.2 19.2,16.8 18.5,16.8Z",
        })
    ]))
}
