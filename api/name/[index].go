package name

import (
	"encoding/json"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	data := map[string]string{
		"url": r.URL.String(),
	}
	returnJSON(r, w, data)
}

func returnJSON(r *http.Request, w http.ResponseWriter, data map[string]string) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(data)
}
