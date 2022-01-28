valorProduto = float(input("Valor do produto: "));
valorDoICMS = 0;
origem = "SC";
destino = str(input("Insira o destino do produto: "));

if destino == 'MG' or destino == 'PB' or destino == 'RS' or destino == "RJ" or destino == "SP":
    valorDoICMS = 0.15;
    calcICMS =  valorProduto - ((1 - valorDoICMS) * valorProduto);
else:
    valorDoICMS = 0.7;  
    calcICMS =  valorProduto - ((1 - valorDoICMS) * valorProduto);
 
print(f"Valor do tributo ICMS: {calcICMS}");