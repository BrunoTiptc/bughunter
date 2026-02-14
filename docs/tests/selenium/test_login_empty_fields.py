from selenium import webdriver
from selenium.webdriver.common.by import By
import time


def test_login_empty_fields():
    driver = webdriver.Chrome()

    try:
        driver.get("http://localhost:3000")
        time.sleep(2)

        login_button = driver.find_element(By.TAG_NAME, "button")
        login_button.click()

        time.sleep(2)

        page_source = driver.page_source
        assert "obrigatório" in page_source.lower()

        print("Validação de campos vazios funcionando!")

    finally:
        driver.quit()
