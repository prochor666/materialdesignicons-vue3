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
            d: "M19.5,12.8V22H14.7V13.9C14.7,13.2 14.1,12.6 13.4,12.6H10.5C9.8,12.6 9.2,13.2 9.2,13.9V22H4.5V2H9.3V8.4C9.6,8.3 9.9,8.2 10.2,8.2H15C17.5,8.2 19.5,10.3 19.5,12.8Z",
        })
    ]))
}
