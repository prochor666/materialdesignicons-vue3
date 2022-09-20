@ECHO OFF
cls
rd /S /Q "..\src"
md "..\src"

@ECHO ON
git clone git@github.com:Templarian/MaterialDesign-SVG.git "..\src"
