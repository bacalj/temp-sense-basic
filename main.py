def on_button_pressed_a():
    basic.show_number(dht11_dht22.read_data(dataType.TEMPERATURE))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    dht11_dht22.query_data(DHTtype.DHT11, DigitalPin.P1, True, False, True)
basic.forever(on_forever)
