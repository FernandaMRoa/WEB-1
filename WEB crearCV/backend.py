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


@app.post("/curriculum")
def create_curriculum(cv: CV):
    nombre = cv.nombre
    apellido = cv.apellido
    titulo = cv.titulo
    celular = cv.celular
    email = cv.email
    ubicacion = cv.ubicacion
    perfil = cv.perfil
    trabajo_institucion = cv.trabajo_institucion
    trabajo_1 = cv.trabajo_1
    trabajo_2 = cv.trabajo_2
    estudios_institucion = cv.estudios_institucion
    estudios_1 = cv.estudios_1
    estudios_2 = cv.estudios_2
    idioma_1 = cv.idioma_1
    idioma_2 = cv.idioma_2

    with open("curriculums.txt","a", encoding= "utf-8") as archivo:
        archivo.write(nombre + ";")
        archivo.write(apellido + ";")
        archivo.write(titulo + ";")
        archivo.write(celular + ";")
        archivo.write(email + ";")
        archivo.write(ubicacion + ";")
        archivo.write(perfil + ";")
        archivo.write(trabajo_institucion + ";")
        archivo.write(trabajo_1 + ";")
        archivo.write(trabajo_2 + ";")
        archivo.write(estudios_institucion + ";")
        archivo.write(estudios_1 + ";")
        archivo.write(estudios_2 + ";")
        archivo.write(idioma_1 + ";")
        archivo.write(idioma_2 + "\n")
        archivo.close()