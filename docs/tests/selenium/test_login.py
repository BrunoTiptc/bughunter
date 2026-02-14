from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time


def test_login_page_load():
    options = Options()
    options.add_argument("--start-maximized")

    driver = webdriver.Chrome(options=options)

    try:
        driver.get("http://localhost:3000")
        time.sleep(2)

        email_field = driver.find_element(By.NAME, "email")
        password_field = driver.find_element(By.NAME, "senha")

        assert email_field is not None
        assert password_field is not None

        print("Página carregou e campos encontrados com sucesso!")

    finally:
        driver.quit()


def test_login_empty_submit():
    driver = webdriver.Chrome()

    try:
        driver.get("http://localhost:3000")
        time.sleep(2)

        submit_button = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
        submit_button.click()

        time.sleep(2)

        print("Botão clicado com sucesso!")

    finally:
        driver.quit()
