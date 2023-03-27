function readTempAndSend () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    tempReading = dht11_dht22.readData(dataType.temperature)
    if (tempReading > 0) {
        packetString = "s" + hubIdentifier + "t" + tempReading
    } else {
        packetString = "s" + hubIdentifier + "t" + "empty"
    }
    radio.sendString(packetString)
    basic.showString(packetString)
}
let packetString = ""
let tempReading = 0
let hubIdentifier = ""
radio.setGroup(1)
hubIdentifier = "a"
basic.forever(function () {
    readTempAndSend()
})
