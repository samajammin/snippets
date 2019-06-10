import requests
import lxml.html as lh
import pandas as pd
import pdb

#Table scraping
url='https://stats.nba.com/players/traditional/?sort=PTS&dir=-1&Season=2018-19&SeasonType=Regular%20Season&LastNGames=15&PerMode=Per36'
#Create a handle, page, to handle the contents of the website
page = requests.get(url)
#Store the contents of the website under doc
doc = lh.fromstring(page.content)
#Parse data that are stored between <tr>..</tr> of HTML
tr_elements = doc.xpath('//tr')

pdb.set_trace()