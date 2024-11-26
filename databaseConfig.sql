-----------------------------------------------
--TABELA MATERIAIS

CREATE TABLE material (
    id SERIAL PRIMARY KEY,        
    nome TEXT NOT NULL,            
    descricao TEXT,                
    quantidade INT NOT NULL,         
    preco DECIMAL(10, 2) NOT NULL, 
    data_adicionado DATE DEFAULT CURRENT_DATE 
);

ALTER TABLE material
DROP COLUMN unidade_medida

ALTER TABLE material 
ADD COLUMN deleted boolean not null default false
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
--TABELA FORNECEDOR

CREATE TABLE fornecedor (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    contato TEXT,
    email TEXT UNIQUE,
    endereco TEXT,
    deleted BOOLEAN NOT NULL DEFAULT FALSE
);
--------------------------------------------
--TABELA OBRA
CREATE TABLE obra (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    localizacao TEXT NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE,
    responsavel INT REFERENCES usuario (id) ON DELETE SET NULL, -- Relaciona com usuário responsável pela obra
    deleted BOOLEAN NOT NULL DEFAULT FALSE
);

--------------------------------------------
--RELACIONAMENTO 1:N
CREATE TABLE obra_material (
    id SERIAL PRIMARY KEY,
    obra_id INT NOT NULL REFERENCES obra (id) ON DELETE CASCADE,
    material_id INT NOT NULL REFERENCES material (id) ON DELETE CASCADE,
    quantidade_utilizada INT NOT NULL CHECK (quantidade_utilizada > 0),
    data_uso DATE DEFAULT CURRENT_DATE
);

--------------------------------------------
--RELACIONAMENTO N:M
CREATE TABLE material_fornecedor (
    id SERIAL PRIMARY KEY,
    material_id INT NOT NULL REFERENCES material (id) ON DELETE CASCADE,
    fornecedor_id INT NOT NULL REFERENCES fornecedor (id) ON DELETE CASCADE,
    preco_fornecido DECIMAL(10, 2) NOT NULL CHECK (preco_fornecido > 0),
    data_fornecimento DATE DEFAULT CURRENT_DATE
);

--------------------------------------------

INSERT INTO obra_material (obra_id, material_id, quantidade_utilizada)
VALUES (1, 2, 50);
