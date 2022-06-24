@ECHO OFF
cls
rd /S /Q "..\src"
md "..\src"

@ECHO ON
git clone https://github.com/Templarian/MaterialDesign.git "..\src"