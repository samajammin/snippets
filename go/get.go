package main

import (
	"io"
	"net/http"
	"os"
)

func main() {
	resp, err := http.Get("https://tour.golang.org/list")
	if err != nil {
		// handle error
	}
	defer resp.Body.Close()
	io.Copy(os.Stdout, resp.Body)
}
