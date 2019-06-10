package main

import (
	"fmt"
	"time"
)

func main() {
	go say("Let's go!", 3)
	go say("Ho!", 2)
	go say("Hey!", 1)
	time.Sleep(4 * time.Second)
}

func say(text string, delay time.Duration) {
	time.Sleep(delay * time.Second)
	fmt.Println(text)
}
