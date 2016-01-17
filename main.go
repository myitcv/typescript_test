package main

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/golang/protobuf/proto"
)

func handler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic("Could not read body")
	}
	fmt.Printf("Body %v\n", string(body))
	test2 := &HelloRequest{}
	err = proto.Unmarshal(body, test2)
	if err != nil {
		panic("Could not decode HelloRequest from")
	}
	resp := &HelloReply{}
	resp.Message = "OK " + test2.Name
	respBytes, err := proto.Marshal(resp)
	if err != nil {
		panic("Could not marshal response")
	}
	fmt.Printf("We got %v\n", test2)
	fmt.Printf("We sent %v\n", string(respBytes))
	w.Header().Set("Content-Type", "binary")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Fprintf(w, "%s", respBytes)
	// fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
	http.HandleFunc("/SayHello", handler)
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.ListenAndServe(":8080", nil)
}
