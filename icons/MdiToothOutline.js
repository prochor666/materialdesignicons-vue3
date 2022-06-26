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
            d: "M7,2C4,2 2,5 2,8C2,10.11 3,13 4,14C5,15 6,22 8,22C12.54,22 10,15 12,15C14,15 11.46,22 16,22C18,22 19,15 20,14C21,13 22,10.11 22,8C22,5 20,2 17,2C14,2 14,3 12,3C10,3 10,2 7,2M7,4C9,4 10,5 12,5C14,5 15,4 17,4C18.67,4 20,6 20,8C20,9.75 19.14,12.11 18.19,13.06C17.33,13.92 16.06,19.94 15.5,19.94C15.29,19.94 15,18.88 15,17.59C15,15.55 14.43,13 12,13C9.57,13 9,15.55 9,17.59C9,18.88 8.71,19.94 8.5,19.94C7.94,19.94 6.67,13.92 5.81,13.06C4.86,12.11 4,9.75 4,8C4,6 5.33,4 7,4Z",
        })
    ]))
}