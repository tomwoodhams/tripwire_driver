import RPi.GPIO as GPIO, time, os
from random import randint

#####################################MAIN####################################### 
print "running StartupScript"

from random import randint
randnumber = randint(1,2) #Inclusive

if (randnumber == 1):
		playsound("sudo aplay /opt/ninja/drivers/tripwire_driver/sounds/hello1.wav");

elif (randnumber == 2):
		playsound("sudo aplay /opt/ninja/drivers/tripwire_driver/sounds/hello2.wav");


bashCommand = "sudo python /opt/ninja/drivers/tripwire_driver/main.py"
os.system(bashCommand) 

