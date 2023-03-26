input.onButtonPressed(Button.AB, function () {
    if (hubIndex < 4) {
        hubIndex = hubIndex + 1
    } else {
        hubIndex = 0
    }
    currentHub = hubs[hubIndex]
})
let currentHub = ""
let hubIndex = 0
let hubs: string[] = []
radio.setGroup(1)
hubs = [
"x",
"a",
"b",
"c",
"d"
]
hubIndex = 0
currentHub = hubs[hubIndex]
basic.forever(function () {
    basic.showString("" + (currentHub))
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    radio.sendString("" + currentHub + dht11_dht22.readData(dataType.temperature))
    basic.showNumber(dht11_dht22.readData(dataType.temperature))
})
