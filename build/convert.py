import os
import sys
import shutil
from core import library, colors, utils, svg

utils.clear_screen()

print(f"{colors.blue('Material Design Icons')} SVG {colors.green('Vue 3')} & {colors.red('Tailwind')} converter", end = "\n\n\r")
print(f"Loading directory: {library.get_src()}")

svg_lib = library.load_all()

print(f"Directory files: {len(svg_lib)}")

all_size = 0
processed = 0
errors = 0

if os.path.exists(f"{library.target()}"):

    shutil.rmtree(f"{library.target()}", ignore_errors=False, onerror=None)

os.makedirs(library.target())
os.makedirs(library.target('/esm/'))

js_index_file_content = ''
js_esm_index_file_content = ''
ts_index_file_content = ''

for svg_file in svg_lib:

    file_meta = svg.load(f"{library.get_src()}{svg_file}")

    if len(file_meta['error']) > 0:

        errors += 1
        print(
            f"{colors.red(' Error:')} {file_meta['file']}{file_meta['error']}", end="\r")
        break
    else:

        index_patterns = file_meta['index_patterns']

        if len(js_index_file_content)>0:

            js_index_file_content = "\n".join(
                [js_index_file_content, index_patterns[0]])
            js_esm_index_file_content = "\n".join(
                [js_esm_index_file_content, index_patterns[1]])
            ts_index_file_content = "\n".join(
                [ts_index_file_content, index_patterns[2]])
        else:

            js_index_file_content = index_patterns[0]
            js_esm_index_file_content = index_patterns[1]
            ts_index_file_content = index_patterns[2]

        all_size += file_meta['size_raw']
        processed += 1
        info_text = f"Processed {utils.byte_size(all_size)} in {processed} files, {file_meta['file']}"
        print(f"{colors.blue(' Converting:')} {info_text}", end = "\r")

    utils.file_save(
        f"{library.target()}index.js", js_index_file_content)

    utils.file_save(
        f"{library.target('/esm/')}index.js", js_esm_index_file_content)

    utils.file_save(
        f"{library.target()}index.d.ts", ts_index_file_content)

    utils.file_save(
        f"{library.target('/esm/')}index.d.ts", ts_index_file_content)

    sys.stdout.write('\033[2K\033[1G')

print("\n")
print(f"{colors.green('Done:')} Processed {utils.byte_size(all_size)} in {processed} files, with {errors} errors")


