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
            d: "M14 8C13.45 8 13 7.55 13 7S13.45 6 14 6C14.55 6 15 6.45 15 7C15 7.55 14.55 8 14 8M12 12V19H5V12H12M12.78 10H4.22C3.55 10 3 10.55 3 11.22V19.78C3 20.45 3.55 21 4.22 21H12.78C13.45 21 14 20.45 14 19.78V11.22C14 10.55 13.45 10 12.78 10M19.78 3H11.22C10.55 3 10 3.55 10 4.22V8H12V5H19V12H16V14H19.78C20.45 14 21 13.45 21 12.78V4.22C21 3.55 20.45 3 19.78 3M17 8C16.45 8 16 7.55 16 7S16.45 6 17 6C17.55 6 18 6.45 18 7C18 7.55 17.55 8 17 8M17 11C16.45 11 16 10.55 16 10S16.45 9 17 9C17.55 9 18 9.45 18 10C18 10.55 17.55 11 17 11M7 15C6.45 15 6 14.55 6 14S6.45 13 7 13C7.55 13 8 13.45 8 14C8 14.55 7.55 15 7 15M10 18C9.45 18 9 17.55 9 17S9.45 16 10 16C10.55 16 11 16.45 11 17C11 17.55 10.55 18 10 18",
        })
    ]))
}
