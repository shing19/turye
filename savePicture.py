from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.maximize_window()
driver.get('http://127.0.0.1:8000')

for i in range(0, 10000):
    element = driver.find_element(By.ID, 'TuryeSave')
    save_path = './images/turye-card-' + str(i) + '.jpg'
    element.screenshot(save_path)
    element = driver.find_element(By.ID, 'TuryeGen')
    save_path = './images/turye-' + str(i) + '.jpg'
    element.screenshot(save_path)
    driver.refresh()

driver.quit()