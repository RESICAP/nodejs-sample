BASEDIR=$(dirname $0)
CURDIR=$(pwd)
ROOTDIR=$BASEDIR/..

cd $ROOTDIR
docker build -t resicap-node-sample:latest .
cd $CURDIR