from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

class CV(BaseModel):
    nombre: str
    apellido: str
    titulo: str
    celular: str
    email: str
    ubicacion: str
    perfil: str
    trabajo_institucion: str
    trabajo_1: str
    trabajo_2: str
    estudios_institucion: str
    estudios_1: str
    estudios_2: str
    idioma_1: str
    idioma_2: str

lista_atributos = list(CV.__annotations__.keys())

@app.get("/nombres")
def give_nombres():
    archivo = open("curriculums.txt", encoding='utf-8')
    informacion = archivo.readlines()
    nombres=[]
    for i in range(len(informacion)):
        informacion[i] = informacion[i].strip().split(';')
        nombres.append(informacion[i][0])
    archivo.close
    return nombres

@app.get('/CVs')
def give_curriculums():
    archivo = open("curriculums.txt", encoding='utf-8')
    informacion = archivo.readlines()
    archivo.close
    for i in range(len(informacion)):
        informacion[i] = informacion[i].strip().split(';')
        '''CV = informacion[i].strip().split(';')
        if CV[0].lower() == nombre.lower():
            return CV'''
    return informacion
print(give_curriculums())
