package main

import (
	"bufio"
	"encoding/base64"
	"github.com/golang/protobuf/proto"
	"io/ioutil"
	"os"
)

func WriteSerializedObject(filename string, serialized []byte) {
	e := ioutil.WriteFile(filename, serialized, 0644)
	if e != nil {
		panic(e)
	}
}

func CreateSerializedReply(repo *HelloReply) []byte {
	byteArray, err := proto.Marshal(repo)
	if err != nil {
		panic(err)
	}
	return byteArray
}

func CreateSerializedTestMessage(reqo *TestMessage) []byte {
	byteArray, err := proto.Marshal(reqo)
	if err != nil {
		panic(err)
	}
	return byteArray
}

func CreateBase64String(byteArray []byte) string {
	encStr := base64.StdEncoding.EncodeToString(byteArray)
	return encStr
}

func BuildFixture() {
	hrep := &HelloReply{}
	hrep.Message = "OK hello world!"
	bhrep := CreateSerializedReply(hrep)
	WriteSerializedObject("fixtures/SayHello", bhrep)

	stringValue := "modelogiq"
	uint64Value := uint64(9999999999)

	jsonFile, _ := os.Create("fixtures/serialized.json")
	testMessageBufferWriter := bufio.NewWriter(jsonFile)
	testMessageBufferWriter.WriteString("{\"")

	oneofStringField := &TestMessage_OneofStringField{}
	oneofStringField.OneofStringField = stringValue
	oneofUint64Field := &TestMessage_OneofUint64Field{}
	oneofUint64Field.OneofUint64Field = uint64Value

	emptyTestMessage := &TestMessage{}
	bEmptyTestMessage := CreateSerializedTestMessage(emptyTestMessage)
	testMessageBufferWriter.WriteString("emptyTestMessage\":\"")
	testMessageBufferWriter.WriteString(CreateBase64String(bEmptyTestMessage))
	testMessageBufferWriter.WriteString("\",\"")

	testMessageWithString := &TestMessage{}
	testMessageWithString.StringField = stringValue
	bTestMessageWithString := CreateSerializedTestMessage(testMessageWithString)
	testMessageBufferWriter.WriteString("testMessageWithString\":\"")
	testMessageBufferWriter.WriteString(CreateBase64String(bTestMessageWithString))
	testMessageBufferWriter.WriteString("\",\"")

	testMessageWithUint64 := &TestMessage{}
	testMessageWithUint64.Uint64Field = uint64Value
	bTestMessageWithUint64 := CreateSerializedTestMessage(testMessageWithUint64)
	testMessageBufferWriter.WriteString("testMessageWithUint64\":\"")
	testMessageBufferWriter.WriteString(CreateBase64String(bTestMessageWithUint64))
	testMessageBufferWriter.WriteString("\",\"")

	testMessageWithOneofString := &TestMessage{}
	testMessageWithOneofString.OneofField = oneofStringField
	bTestMessageWithOneofString := CreateSerializedTestMessage(testMessageWithOneofString)
	testMessageBufferWriter.WriteString("testMessageWithOneofString\":\"")
	testMessageBufferWriter.WriteString(CreateBase64String(bTestMessageWithOneofString))
	testMessageBufferWriter.WriteString("\",\"")

	testMessageWithOneofUint64 := &TestMessage{}
	testMessageWithOneofUint64.OneofField = oneofUint64Field
	bTestMessageWithOneofUint64 := CreateSerializedTestMessage(testMessageWithOneofUint64)
	testMessageBufferWriter.WriteString("testMessageWithOneofUint64\":\"")
	testMessageBufferWriter.WriteString(CreateBase64String(bTestMessageWithOneofUint64))
	testMessageBufferWriter.WriteString("\",\"")

	testMessageWithStringAndOneofString := &TestMessage{}
	testMessageWithStringAndOneofString.StringField = stringValue
	testMessageWithStringAndOneofString.OneofField = oneofStringField
	bTestMessageWithStringAndOneofString := CreateSerializedTestMessage(testMessageWithStringAndOneofString)
	testMessageBufferWriter.WriteString("testMessageWithStringAndOneofString\":\"")
	testMessageBufferWriter.WriteString(CreateBase64String(bTestMessageWithStringAndOneofString))
	testMessageBufferWriter.WriteString("\",\"")

	testMessageWithStringAndOneofUint64 := &TestMessage{}
	testMessageWithStringAndOneofUint64.StringField = stringValue
	testMessageWithStringAndOneofUint64.OneofField = oneofUint64Field
	bTestMessageWithStringAndOneofUint64 := CreateSerializedTestMessage(testMessageWithStringAndOneofUint64)
	testMessageBufferWriter.WriteString("testMessageWithStringAndOneofUint64\":\"")
	testMessageBufferWriter.WriteString(CreateBase64String(bTestMessageWithStringAndOneofUint64))
	// testMessageBufferWriter.WriteString("\",\"")

	testMessageBufferWriter.WriteString("\"}")
	testMessageBufferWriter.Flush()
	jsonFile.Close()
}
