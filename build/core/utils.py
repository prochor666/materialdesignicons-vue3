import platform, os


def clear_screen():
   if platform.system() == 'Windows':
        _ = os.system('cls')
   else:
        _ = os.system('clear')


def byte_size(bytes, suffix="B"):
    factor = 1024
    for unit in ["", "K", "M", "G", "T", "P"]:
        if bytes < factor:
            return f"{bytes:.2f} {unit}{suffix}"
        bytes /= factor


def decimal_size(num, suffix="Hz"):
    factor = 1000
    for unit in ["", "K", "M", "G", "T", "P"]:
        if num < factor:
            return f"{num:.2f} {unit}{suffix}"
        num /= factor


def replace_all(text, r={}):
    for i, j in r.items():
        text = text.replace(i, j)
    return text


def app_root():
    p = os.path.dirname(os.path.abspath(__file__))
    return strip_end(p, f"{os.path.sep}core")


def file_save(file, content=' '):
    fh = open(file, 'w')
    fh.write(content)
    fh.close()
    return True


def strip_end(text, suffix):
    if suffix and text.endswith(suffix):
        return text[:-len(suffix)]
    return text
