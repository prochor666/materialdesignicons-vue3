import os, traceback
from core import utils, library
from xml.dom import minidom

def load(file_path):

    try:
        meta = os.stat(file_path)
        with open(file_path) as templateSrc:

            index_patterns = convert(file_path)

            return {
                'file': os.path.basename(file_path),
                'path': file_path,
                'index_patterns': index_patterns,
                'size_raw': meta.st_size,
                'size': utils.byte_size(meta.st_size),
                'error': "",
                'traceback': ""
            }

    except Exception as e:

        return {
            'file': os.path.basename(file_path),
            'path': file_path,
            'size_raw': 0,
            'size': utils.byte_size(0),
            'error': f": {str(e)}",
            'traceback': f"{traceback.format_exc()}"
        }


def convert(file_path):
    svg_file = os.path.basename(file_path)

    doc = minidom.parse(file_path)
    svgpath = [path.getAttribute('d') for path
                in doc.getElementsByTagName('path')][0]
    doc.unlink()

    temp = os.path.splitext(svg_file)[0].split('-')

    vue_exposed_name = f"Mdi{''.join(map(str.title, temp))}"

    js_index_pattern = f'module.exports.{vue_exposed_name} = require("./{vue_exposed_name}.js")'
    js_esm_index_pattern = 'export { default as '+vue_exposed_name+' } from \'./'+vue_exposed_name+'.js\''
    ts_index_pattern = 'export { default as '+vue_exposed_name+' } from \'./'+vue_exposed_name+'\''

    # template = vue_component(template.read(), vue_expose)
    js_template = vue_js_component_create(svgpath)
    js_esm_template = vue_js_component_create(svgpath)
    ts_template = vue_ts_component_create(vue_exposed_name)

    utils.file_save(
        f"{library.target()}{vue_exposed_name}.js", js_template)

    utils.file_save(
        f"{library.target('/esm/')}{vue_exposed_name}.js", js_esm_template)

    utils.file_save(
        f"{library.target()}{vue_exposed_name}.d.ts", ts_template)

    utils.file_save(
        f"{library.target('/esm/')}{vue_exposed_name}.d.ts", ts_template)

    return [
        js_index_pattern,
        js_esm_index_pattern,
        ts_index_pattern
    ]


def vue_component(svg, vue_exposed_name):

    template = '''<template>
    '''+svg+'''
</template>

<script setup>
defineExpose({
    name: "'''+vue_exposed_name+'''",
});

const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    size: {
        type: [Number, String],
        default: 24
    },
    viewBox: {
        type: String,
        default: '0 0 24 24',
    },
});
</script>
'''

    return template


def vue_js_component_create(d):

    template = '''const { createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = require("vue")

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
            d: "'''+d+'''",
        })
    ]))
}
'''

    return template


def vue_js_esm_component_create(d):

    template = '''import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export default function render(_ctx, _cache) {
    return (_openBlock(), _createBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [
        _createVNode("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "'''+d+'''",
        })
    ]))
}
'''

    return template


def vue_ts_component_create(vue_exposed_name):

    template = '''import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';
declare const '''+vue_exposed_name+''': FunctionalComponent<HTMLAttributes & VNodeProps>;
export default '''+vue_exposed_name+''';
'''

    return template
