#!/bin/bash
# sends a GET request to a URL, and displays the body of the response if status code is 200
curl -sfL "$1"
