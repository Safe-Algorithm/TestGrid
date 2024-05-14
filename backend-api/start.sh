#!/bin/sh

# start app process
python app/main.py &

# start woker process 
python app/workers/main.py &

# wait for processes to finish
wait