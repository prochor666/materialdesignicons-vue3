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
            d: "M21 12C21 8 18.5 4.7 15 3.5C14.7 2.1 13.5 1 12 1C10.3 1 9 2.3 9 4S10.3 7 12 7C13.1 7 14.1 6.4 14.6 5.5C17.2 6.5 19 9 19 12C19 14.9 17.2 17.5 14.6 18.5C14.1 17.6 13.1 17 12 17C10.3 17 9 18.3 9 20S10.3 23 12 23C13.5 23 14.7 21.9 15 20.5C18.5 19.3 21 15.9 21 12M12 5C11.4 5 11 4.6 11 4S11.4 3 12 3 13 3.4 13 4 12.6 5 12 5M12 21C11.4 21 11 20.6 11 20S11.4 19 12 19 13 19.4 13 20 12.6 21 12 21M12 9C13.7 9 15 10.3 15 12S13.7 15 12 15 9 13.7 9 12 10.3 9 12 9Z",
        })
    ]))
}
