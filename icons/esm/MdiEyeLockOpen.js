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
            d: "M14.9 11.1C13.9 11.9 13.2 13.1 13.2 14.5V14.7C12.8 14.9 12.4 15 12 15C10.3 15 9 13.7 9 12S10.3 9 12 9C13.4 9 14.5 9.9 14.9 11.1M12 18.2C12 17.8 12.1 17.4 12.3 17H12C9.2 17 7 14.8 7 12S9.2 7 12 7C14.1 7 15.9 8.3 16.7 10.2C17.1 10.1 17.6 10 18 10C20.1 10 21.9 11.3 22.5 13.1C22.7 12.8 22.8 12.4 23 12C21.3 7.6 17 4.5 12 4.5S2.7 7.6 1 12C2.7 16.4 7 19.5 12 19.5V18.2M20.8 17H16.5V14.5C16.5 13.7 17.2 13.2 18 13.2S19.5 13.7 19.5 14.5V15H20.8V14.5C20.8 13.1 19.4 12 18 12S15.2 13.1 15.2 14.5V17C14.6 17 14 17.6 14 18.2V21.7C14 22.4 14.6 23 15.2 23H20.7C21.4 23 22 22.4 22 21.8V18.3C22 17.6 21.4 17 20.8 17Z",
        })
    ]))
}
