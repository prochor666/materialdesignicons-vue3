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
            d: "M11 8H13V14H11V8M13 19.92C12.67 19.97 12.34 20 12 20C8.13 20 5 16.87 5 13S8.13 6 12 6C14.82 6 17.24 7.67 18.35 10.06C18.56 10.04 18.78 10 19 10C19.55 10 20.07 10.11 20.57 10.28C20.23 9.22 19.71 8.24 19.03 7.39L20.45 5.97C20 5.46 19.55 5 19.04 4.56L17.62 6C16.07 4.74 14.12 4 12 4C7.03 4 3 8.03 3 13S7.03 22 12 22C12.42 22 12.83 21.96 13.24 21.91C13.09 21.53 13 21.12 13 20.7V19.92M15 1H9V3H15V1M23 17.3V20.8C23 21.4 22.4 22 21.7 22H16.2C15.6 22 15 21.4 15 20.7V17.2C15 16.6 15.6 16 16.2 16V14.5C16.2 13.1 17.6 12 19 12S21.8 13.1 21.8 14.5V16C22.4 16 23 16.6 23 17.3M20.5 14.5C20.5 13.7 19.8 13.2 19 13.2S17.5 13.7 17.5 14.5V16H20.5V14.5Z",
        })
    ]))
}