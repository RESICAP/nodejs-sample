[string] $basedir = $PSScriptRoot
[string] $curdir = Resolve-Path .
[string] $rootdir = Resolve-Path $basedir/../..

cd $rootdir
docker build -t resicap-node-sample:latest .
cd $curdir

