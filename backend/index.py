import requests
import json

dbLink = "https://samubase-b839f-default-rtdb.firebaseio.com/"

##POST

    ##CRIAR NOVA ATIVIDADE
data = {
    "name": "Abertura de SITE",
    "operator" : "Magno Rodolfo dos Santos Ribeiro",
    "mobile": 88334422,
    "date": "01/06/2022"
}

newActivityLink = f'{dbLink}/Atividades/.json'
newActivityRequest= requests.post(newActivityLink, data=json.dumps(data))
    ##CRIAR NOVA OPERADORA

##GET

##PATCH

##DELETE


##TESTING API CONNECTION
print(newActivityRequest)
print(newActivityRequest.text)

##SITES COM IDS EXCLUSIVOS
    ##NA PASTA "SITES"