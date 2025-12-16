import pyautogui
import time
time.sleep(8)
count=0
while count<=100:
    pyautogui.typewrite("PRAVAL SUN"+str(count))
    pyautogui.press("enter")
    count=count+1
