def on_button_pressed_ab():
    global hubIndex, currentHub
    if hubIndex < 4:
        hubIndex = hubIndex + 1
    else:
        hubIndex = 0
    currentHub = hubs[hubIndex]
input.on_button_pressed(Button.AB, on_button_pressed_ab)

currentHub = ""
hubIndex = 0
hubs: List[str] = []
radio.set_group(1)
hubs = ["x", "a", "b", "c", "d"]
hubIndex = 0
currentHub = hubs[hubIndex]

def on_forever():
    basic.show_string("" + (currentHub))
    dht11_dht22.query_data(DHTtype.DHT11, DigitalPin.P1, True, False, True)
    radio.send_string("" + currentHub + str(dht11_dht22.read_data(dataType.TEMPERATURE)))
    basic.show_number(dht11_dht22.read_data(dataType.TEMPERATURE))
basic.forever(on_forever)
