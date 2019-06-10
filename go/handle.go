package main

import (
	"fmt"
	"html"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/bar", printPath)
	http.HandleFunc("/nicepath", printPath)
	http.HandleFunc("/hey", handler)
	http.HandleFunc("/hello", handler)
	err := http.ListenAndServe("localhost:8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}

func printPath(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, r)
	fmt.Fprint(w, "hello web!")
}
