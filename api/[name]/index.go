package handler

import (
	"fmt"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	age := r.URL.Query().Get("age")
	message := fmt.Sprintf("Hello %s, you are %s years old", name, age)
	fmt.Fprintf(w, "<h1>"+message+"</h1>")
}
