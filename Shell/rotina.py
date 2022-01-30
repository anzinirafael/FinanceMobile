import pyautogui as py

py.press('win', interval=0.2)
py.write('cmd', interval=0.2)
py.press('enter', interval=0.5)
py.write('sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade && sudo apt-get auto-remove -y && sudo apt-get autoclean && sudo apt-get install -f')
py.press('enter', interval=0.3)
py.write('Rafa@123')
py.press('enter')