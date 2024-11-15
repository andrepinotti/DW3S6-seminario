-----------------------------------------------
--TABELA MATERIAIS

CREATE TABLE material (
    id SERIAL PRIMARY KEY,        
    nome TEXT NOT NULL,            
    descricao TEXT,                
    quantidade INT NOT NULL,       
    unidade_medida TEXT NOT NULL,  
    preco DECIMAL(10, 2) NOT NULL, 
    data_adicionado DATE DEFAULT CURRENT_DATE 
);

ALTER TABLE material
DROP COLUMN unidade_medida

--------------------------------------------
--TABELA USUÁRIOS

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,       
    nome TEXT NOT NULL,          
    email TEXT UNIQUE NOT NULL,  
    senha TEXT NOT NULL,
	data_cad TIMESTAMP DEFAULT NOW()
);

--------------------------------------------