import os
from core import utils


def get_src():
    path = "../src/svg/"
    return utils.replace_all(f"{utils.app_root()}/{path}", r = {'/': os.path.sep})


def target():
    path = "../icons/"
    return utils.replace_all(f"{utils.app_root()}/{path}", r={'/': os.path.sep})


def load_all():
    _dir = os.listdir(get_src())
    return _dir
