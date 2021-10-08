from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import string

import pymongo
print("working")
client = pymongo.MongoClient("localhost", 27031)
db = client["cet"]

collection = db["students"]

db.command("collMod", "students", validator={
    '$jsonSchema': {
        'required': ["name","roll_no"]}})

driver = webdriver.Chrome(executable_path = "./chromedriver.exe")
driver.get("http://karresults.nic.in/indexCET2021.asp")


glob = True  

def scrape(usn):

    element = driver.find_element_by_id("reg")
    element.send_keys(usn)
    driver.find_element_by_name("B1").click()

    try:
        driver.find_element_by_xpath(
            "//*[@id='details']/tbody/tr[1]/td[1]").text
    except:
        global glob
        glob = False 
        return driver.back()

    name = driver.find_element_by_xpath(
        "//*[@id='details']/tbody/tr[1]/td[2]/span").text
    roll = driver.find_element_by_xpath(
        "//*[@id='details']/tbody/tr[2]/td[2]/span").text

    eng = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/table/tbody/tr[2]/td[2]").text
    med = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/table/tbody/tr[3]/td[2]").text
    bnys = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/table/tbody/tr[4]/td[2]").text
    nata = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/table/tbody/tr[5]/td[2]").text
    agri = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/table/tbody/tr[6]/td[2]").text
    vet = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/table/tbody/tr[7]/td[2]").text
    agri_prac = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/table/tbody/tr[8]/td[2]").text
    vet_prac = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/table/tbody/tr[9]/td[2]").text
    b_pharma = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/table/tbody/tr[10]/td[2]").text
    pharma_d = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/table/tbody/tr[11]/td[2]").text
    lateral = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/table/tbody/tr[12]/td[2]").text
    phy = driver.find_element_by_xpath(
        "/html/body/div[2]/div[3]/div/table/tbody/tr[2]/td[2]").text
    phy_cet = driver.find_element_by_xpath(
        "/html/body/div[2]/div[3]/div/table/tbody/tr[2]/td[3]").text
    chem = driver.find_element_by_xpath(
        "/html/body/div[2]/div[3]/div/table/tbody/tr[3]/td[2]").text
    chem_cet = driver.find_element_by_xpath(
        "/html/body/div[2]/div[3]/div/table/tbody/tr[3]/td[3]").text
    math = driver.find_element_by_xpath(
        "/html/body/div[2]/div[3]/div/table/tbody/tr[4]/td[2]").text
    math_cet = driver.find_element_by_xpath(
        "/html/body/div[2]/div[3]/div/table/tbody/tr[4]/td[3]").text
    bio = driver.find_element_by_xpath(
        "/html/body/div[2]/div[3]/div/table/tbody/tr[5]/td[2]").text
    bio_cet = driver.find_element_by_xpath(
        "/html/body/div[2]/div[3]/div/table/tbody/tr[5]/td[3]").text
    try:
        
        doc = {
            "name": name,
            "roll_no": roll,
            "engineering": eng,
            "med": med,
            "bnys": bnys,
            "nata": nata,
            "agri": agri,
            "vet": vet,
            "agri_prac": agri_prac,
            "vet_prac": vet_prac,
            "b_pharma": b_pharma,
            "pharma_d": pharma_d,
            "lateral": lateral,
            "phy": phy,
            "phy_cet": phy_cet,
            "chem": chem,
            "chem_cet": chem_cet,
            "math": math,
            "math_cet": math_cet,
            "bio": bio,
            "bio_cet": bio_cet,
        }
        collection.insert_one(doc)
       
    except Exception as e:
        print(e)
        

    driver.back()



try:
    element = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "reg")))
    for i in string.ascii_uppercase:
        for j in string.ascii_uppercase:
            print("21UGE"+i+j)
            glob = True
            for num in range(1,1000):
                scrape("21UGE"+i+j+str(num).zfill(3))

                if(glob == False):
                    print("21UGE"+i+j+str(num).zfill(3), glob)
                    break
    
finally:
    driver.quit()






