#!/bin/bash
# pip install grpcio
# pip install grpcio-tools
python3.7 -m grpc_tools.protoc -I ./proto/ --python_out=./plugin/ --grpc_python_out=./plugin/ ./proto/model.proto