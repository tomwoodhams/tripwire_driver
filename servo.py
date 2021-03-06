import RPi.GPIO as GPIO
import time

pin = 7
refresh_period = 0.02

GPIO.setmode(GPIO.BCM)

GPIO.setup(pin, GPIO.OUT)
GPIO.output(pin, True)

while True:
    for i in range(1, 100):
        GPIO.output(pin, False)
        time.sleep(0.001)
        GPIO.output(pin, True)
        time.sleep(refresh_period)

    for i in range(1, 100):
        GPIO.output(pin, False)
        time.sleep(0.0015)
        GPIO.output(pin, True)
        time.sleep(refresh_period)

    for i in range(1, 100):
        GPIO.output(pin, False)
        time.sleep(0.002)
        GPIO.output(pin, True)
        time.sleep(refresh_period)