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
            d: "M14 5V4C14 2.9 13.1 2 12 2H8C6.9 2 6 2.9 6 4V5C3.8 5 2 6.8 2 9V20C2 21.1 2.9 22 4 22H15.2L13.2 20H4V16H6V18H7V16H12V15H4V9C4 7.9 4.9 7 6 7H14C15.1 7 16 7.9 16 9V12H18V9C18 6.8 16.2 5 14 5M12 5H8V4H12V5M10 9L8 11L10 13L12 11L10 9M21.8 17.8L18.2 14.2C18 14.1 17.8 14 17.6 14H14.8C14.4 14 14 14.4 14 14.8V17.6C14 17.8 14.1 18 14.2 18.2L17.8 21.8C17.9 21.9 18.1 22 18.4 22S18.8 21.9 19 21.8L21.8 19C21.9 18.9 22 18.7 22 18.4C22 18.2 21.9 18 21.8 17.8M15.8 16.5C15.4 16.5 15.1 16.2 15 15.8C15 15.4 15.3 15.1 15.7 15.1C16.1 15.1 16.4 15.4 16.5 15.8C16.5 16.2 16.2 16.5 15.8 16.5Z",
        })
    ]))
}
