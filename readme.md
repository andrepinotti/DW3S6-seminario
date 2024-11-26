*Tema: Sistema de Gerenciamento de Obras*

**Entidades e Relacionamentos:**

Obras e Materiais (Relacionamento 1:N):
Uma obra pode utilizar vários materiais, mas cada material pertence a uma única obra.
Materiais e Fornecedores (Relacionamento M:N):
Um material pode ser fornecido por vários fornecedores, e um fornecedor pode fornecer vários materiais.
Exemplo de Modelagem:

**Entidades:**
Obra: ID, nome, localização, data de início, data de término.
Material: ID, nome, descrição, unidade de medida, preço unitário.
Fornecedor: ID, nome, contato, endereço.

**Relacionamentos:**

Obra–Material: Relacionamento 1:N (uma obra utiliza vários materiais, mas um material pertence a uma obra específica no contexto do projeto).

Material–Fornecedor: Relacionamento M:N (um material pode ser fornecido por diversos fornecedores, e um fornecedor pode fornecer vários materiais).

**Contexto:**

O sistema permite cadastrar obras e associar os materiais necessários para sua execução.
É possível gerenciar os fornecedores de cada material, com informações como preço e disponibilidade.
Exemplo de Casos de Uso:

Um engenheiro acessa o sistema para verificar os materiais cadastrados em uma obra específica.
Um administrador adiciona novos fornecedores para um determinado material.
O sistema gera relatórios de consumo de materiais por obra.