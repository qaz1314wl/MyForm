#!/usr/bin/env bash

kubectl --namespace=dev-tools create configmap internal-share --from-file=./server.conf
