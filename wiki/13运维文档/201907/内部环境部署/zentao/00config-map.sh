#!/bin/bash

kubectl create --namespace=dev-tools configmap zentao \
  --from-file=./zentao.conf


