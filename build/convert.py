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

for svg_file in svg_lib:

    file_meta = svg.load(f"{library.get_src()}{svg_file}")

    if len(file_meta['error']) > 0:

        errors += 1
        print(
            f"{colors.red(' Error:')} {file_meta['file']}{file_meta['error']}", end="\r")
        break
    else:

        all_size += file_meta['size_raw']
        processed += 1
        info_text = f"Processed {utils.byte_size(all_size)} in {processed} files, {file_meta['file']}"
        print(f"{colors.blue(' Converting:')} {info_text}", end = "\r")

    sys.stdout.write('\033[2K\033[1G')

print("\n")
print(f"{colors.green('Done:')} Processed {utils.byte_size(all_size)} in {processed} files, with {errors} errors")


