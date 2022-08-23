package handler

import (
	"fmt"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	result := addTwoIntegersReturnString(1, 2)
	fmt.Fprintf(w, "<h1>"+result+"</h1>")
}
