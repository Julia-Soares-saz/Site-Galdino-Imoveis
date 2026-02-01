let currentImageIndex = 0;
let currentModalIndex = 0;
const images = [
    ['casa1foto1.jpg', 'casa1foto2.jpg', 'casa1foto3.jpg','casa1foto4.jpg','casa1foto5.jpg','casa1foto6.jpg','casa1foto7.jpg','casa1foto8.jpg','casa1foto9.jpg','casa1foto10.jpg,','casa1foto11.jpg'],  
    ['casa2foto1.jpg', 'casa2foto2.jpg', 'casa2foto3.jpg', 'casa2foto4.jpg','casa2foto5.jpg','casa2foto6.jpg','casa2foto7.jpg','casa2foto8.jpg','casa2foto9.jpg','casa2foto10.jpg','casa2foto11.jpg','casa2foto12.jpg'],  
    ['casa4foto1.jpg', 'casa4foto2.jpg', 'casa4foto3.jpg', 'casa4foto4.jpg', 'casa4foto5.jpg', 'casa4foto6.jpg', 'casa4foto7.jpg', 'casa4foto8.jpg', 'casa4foto9.jpg', 'casa4foto10.jpg', 'casa4foto11.jpg'],
    ['casa5foto1.jpg', 'casa5foto2.jpg', 'casa5foto3.jpg', 'casa5foto4.jpg', 'casa5foto5.jpg', 'casa5foto6.jpg', 'casa5foto7.jpg', 'casa5foto8.jpg', 'casa5foto9.jpg', 'casa5foto10.jpg', 'casa5foto11.jpg', 'casa5foto12.jpg', 'casa5foto13.jpg', 'casa5foto14.jpg', 'casa5foto15.jpg', 'casa5foto16.jpg', 'casa5foto17.jpg'],
    ['casa6foto1.jpg', 'casa6foto2.jpg', 'casa6foto3.jpg', 'casa6foto4.jpg', 'casa6foto5.jpg', 'casa6foto6.jpg', 'casa6foto7.jpg', 'casa6foto8.jpg', 'casa6foto9.jpg', 'casa6foto10.jpg', 'casa6foto11.jpg', 'casa6foto12.jpg', 'casa6foto13.jpg', 'casa6foto14.jpg', 'casa6foto15.jpg'],
    ['casa7foto1.jpg', 'casa7foto2.jpg', 'casa7foto3.jpg', 'casa7foto4.jpg', 'casa7foto5.jpg', 'casa7foto6.jpg', 'casa7foto7.jpg', 'casa7foto8.jpg', 'casa7foto9.jpg', 'casa7foto10.jpg', 'casa7foto11.jpg', 'casa7foto12.jpg', 'casa7foto13.jpg', 'casa7foto14.jpg', 'casa7foto15.jpg', 'casa7foto16.jpg', 'casa7foto17.jpg'],
    ['casa8.jpg'],
    ['casa9.jpg'],
   [''],
    ['casa11foto1.jpg', 'casa11foto2.jpg', 'casa11foto3.jpg', 'casa11foto4.jpg', 'casa11foto5.jpg', 'casa11foto6.jpg', 'casa11foto7.jpg', 'casa11foto8.jpg', 'casa11foto9.jpg', 'casa11foto10.jpg', 'casa11foto11.jpg'],
    ['casa12foto1.jpg', 'casa12foto2.jpg', 'casa12foto3.jpg', 'casa12foto4.jpg', 'casa12foto5.jpg', 'casa12foto6.jpg', 'casa12foto7.jpg', 'casa12foto8.jpg', 'casa12foto9.jpg', 'casa12foto10.jpg', 'casa12foto11.jpg'],
    ['casa14foto1.jpg', 'casa14foto2.jpg', 'casa14foto3.jpg', 'casa14foto4.jpg', 'casa14foto5.jpg', 'casa14foto6.jpg', 'casa14foto7.jpg', 'casa14foto8.jpg', 'casa14foto9.jpg', 'casa14foto10.jpg', 'casa14foto11.jpg', 'casa14foto12.jpg'],
    ['casa15foto1.jpg', 'casa15foto2.jpg', 'casa15foto3.jpg'],
    ['casa16foto1.jpg', 'casa16foto2.jpg', 'casa16foto3.jpg', 'casa16foto4.jpg', 'casa16foto5.jpg', 'casa16foto6.jpg', 'casa16foto7.jpg', 'casa16foto8.jpg', 'casa16foto9.jpg', 'casa16foto10.jpg', 'casa16foto11.jpg', 'casa16foto12.jpg', 'casa16foto13.jpg'],
    ['casa17foto1.jpg', 'casa17foto2.jpg', 'casa17foto3.jpg', 'casa17foto4.jpg', 'casa17foto5.jpg', 'casa17foto6.jpg', 'casa17foto7.jpg', 'casa17foto8.jpg', 'casa17foto9.jpg', 'casa17foto10.jpg', 'casa17foto11.jpg'],
    ['casa18foto1.jpg', 'casa18foto2.jpg', 'casa18foto3.jpg', 'casa18foto4.jpg', 'casa18foto5.jpg', 'casa18foto6.jpg', 'casa18foto7.jpg', 'casa18foto8.jpg', 'casa18foto9.jpg', 'casa18foto10.jpg'],
    ['casa20foto1.jpg', 'casa20foto2.jpg', 'casa20foto3.jpg', 'casa20foto4.jpg', 'casa20foto5.jpg', 'casa20foto6.jpg', 'casa20foto7.jpg', 'casa20foto8.jpg', 'casa20foto9.jpg', 'casa20foto10.jpg', 'casa20foto11.jpg', 'casa20foto12.jpg'],
    ['casa21foto1.jpg', 'casa21foto2.jpg', 'casa21foto3.jpg', 'casa21foto4.jpg', 'casa21foto5.jpg', 'casa21foto6.jpg', 'casa21foto7.jpg', 'casa21foto8.jpg', 'casa21foto9.jpg', 'casa21foto10.jpg', 'casa21foto11.jpg', 'casa21foto12.jpg', 'casa21foto13.jpg'],
    [''],
    ['casa24foto1.jpg', 'casa24foto2.jpg', 'casa24foto3.jpg', 'casa24foto4.jpg', 'casa24foto5.jpg', 'casa24foto6.jpg', 'casa24foto7.jpg', 'casa24foto8.jpg', 'casa24foto9.jpg', 'casa24foto10.jpg'],
    ['casa25foto1.jpg', 'casa25foto2.jpg', 'casa25foto3.jpg', 'casa25foto4.jpg', 'casa25foto5.jpg', 'casa25foto6.jpg', 'casa25foto7.jpg'],
    ['casa27foto.jpg','casa27foto1.jpg', 'casa27foto2.jpg', 'casa27foto3.jpg', 'casa27foto4.jpg', 'casa27foto5.jpg'],
    ['condominiosfoto1.jpg', 'condominiosfoto2.jpg', 'condominiosfoto3.jpg'],
    ['praia1foto1.jpg', 'praia1foto2.jpg', 'praia1foto3.jpg', 'praia1foto4.jpg', 'praia1foto5.jpg', 'praia1foto6.jpg', 'praia1foto7.jpg', 'praia1foto8.jpg', 'img/praia1foto9.jpg', 'praia1foto10.jpg'],
    ['praiav1foto1.jpg', 'praia1vfoto2.jpg', 'praiav1foto3.jpg', 'praiav1foto4.jpg', 'praiav1foto5.jpg', 'praiav1foto6.jpg', 'praiav1foto7.jpg', 'praiav1foto8.jpg', 'praiav1foto9.jpg', 'praiav1foto10.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
    ['praiav2foto1.jpg', 'praiav2foto2.jpg', 'praiav2foto3.jpg', 'praiav2foto4.jpg', 'praiav2foto5.jpg', 'praiav2foto6.jpg', 'praiav2foto7.jpg', 'praiav2foto8.jpg', 'praiav2foto9.jpg', 'praiav2foto10.jpg', 'praiav2foto11.jpg', 'praiav2foto12.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
    ['praiav3foto1.jpg', 'praiav3foto2.jpg', 'praiav3foto3.jpg', 'praiav3foto4.jpg', 'praiav3foto5.jpg', 'praiav3foto6.jpg', 'praiav3foto7.jpg', 'praiav3foto8.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
    ['praiav4foto1.jpg', 'praiav4foto2.jpg', 'praiav4foto3.jpg', 'praiav4foto4.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
    ['casa30foto1.jpg','casa30foto2.jpg','casa30foto3.jpg','casa30foto4.jpg','casa30foto5.jpg','casa30foto6.jpg','casa30foto7.jpg','casa30foto8.jpg','casa30foto9.jpg','casa30foto10.jpg','casa30foto11.jpg','casa30foto12.jpg','casa30foto13.jpg'],
    ['casa31foto1.jpg','casa31foto2.jpg','casa31foto3.jpg','casa31foto4.jpg','casa31foto5.jpg'],
    ['casa32foto1.jpg','casa32foto2.jpg','casa32foto3.jpg','casa32foto4.jpg','casa32foto5.jpg','casa32foto6.jpg', 'casa32foto7.jpg'],
    ['casa33foto1.jpg','casa33foto2.jpg','casa33foto3.jpg','casa33foto4.jpg','casa33foto5.jpg','casa33foto6.jpg', 'casa33foto7.jpg'],
    ['casa34foto1.jpg','casa34foto2.jpg','casa34foto3.jpg','casa34foto4.jpg','casa34foto5.jpg','casa34foto6.jpg', 'casa34foto7.jpg', 'casa34foto8.jpg', 'casa34foto9.jpg', 'casa34foto10.jpg', 'casa34foto11.jpg', 'casa34foto12.jpg'],
    ['casa35foto1.jpg','casa35foto2.jpg','casa35foto3.jpg','casa35foto4.jpg','casa35foto5.jpg','casa35foto6.jpg', 'casa35foto7.jpg', 'casa35foto8.jpg', 'casa35foto9.jpg', 'casa35foto10.jpg'],
    ['casa36foto1.jpg','casa36foto2.jpg','casa36foto3.jpg','casa36foto4.jpg','casa36foto5.jpg','casa36foto6.jpg', 'casa36foto7.jpg', 'casa36foto8.jpg', 'casa36foto9.jpg', 'casa36foto10.jpg', 'casa36foto11.jpg'],
    ['casa37foto1.jpg','casa37foto2.jpg','casa37foto3.jpg','casa37foto4.jpg','casa37foto5.jpg','casa37foto6.jpg', 'casa37foto7.jpg', 'casa37foto8.jpg', 'casa37foto9.jpg', 'casa37foto10.jpg', 'casa37foto11.jpg'],
    ['casa38foto1.jpg','casa38foto2.jpg','casa38foto3.jpg','casa38foto4.jpg','casa38foto5.jpg','casa38foto6.jpg'],
    ['casa39foto1.jpg','casa39foto2.jpg','casa39foto3.jpg','casa39foto4.jpg','casa39foto5.jpg','casa39foto6.jpg','casa39foto7.jpg','casa39foto8.jpg'],
    ['casa40foto9.jpg','casa40foto2.jpg','casa40foto3.jpg','casa40foto4.jpg','casa40foto5.jpg','casa40foto6.jpg','casa40foto7.jpg','casa40foto8.jpg','casa40foto10.jpg','casa40foto11.jpg','casa40foto12.jpg','casa40foto13.jpg'],
    ['casa41foto1.jpg','casa41foto2.jpg','casa41foto3.jpg','casa41foto4.jpg','casa41foto5.jpg','casa41foto6.jpg','casa41foto7.jpg','casa41foto8.jpg','casa41foto10.jpg','casa41foto12.jpg','casa41foto13.jpg','casa41foto14.jpg','casa41foto15.jpg','casa41foto16.jpg','casa41foto17.jpg','casa41foto18.jpg','casa41foto19.jpg','casa41foto20.jpg','casa41foto21.jpg','casa41foto22.jpg','casa41foto23.jpg','casa41foto24.jpg','casa41foto25.jpg','casa41foto26.jpg','casa41foto27.jpg','casa41foto28.jpg','casa41foto29.jpg','casa41foto30.jpg'],
    [''],
    ['Nitro Química.jpeg','Nitro Química0001.jpeg','Nitro Química0002.jpeg','Nitro Química0003.jpeg','Nitro Química0004.jpeg','Nitro Química0005.jpeg','Nitro Química0006.jpeg','Nitro Química0007.jpeg','Nitro Química0008.jpeg','Nitro Química0009.jpeg','Nitro Química00010.jpeg','Nitro Química00011.jpeg','Nitro Química00012.jpeg','Nitro Química00013.jpeg','Nitro Química00014.jpeg'],
    ['Residencial D-abril1.jpeg','Residencial D-abril2.jpeg','Residencial D-abril3.jpeg','Residencial D-abril4.jpeg','Residencial D-abril5.jpeg','Residencial D-abril6.jpeg','Residencial D-abril7.jpeg','Residencial D-abril8.jpeg','Residencial D-abril9.jpeg','Residencial D-abril10.jpeg','Residencial D-abril11.jpeg','Residencial D-abril12.jpeg'],
    ['Jardim São Jerônimo.jpeg','Jardim São Jerônimo (1).jpeg','Jardim São Jerônimo (2).jpeg','Jardim São Jerônimo (3).jpeg','Jardim São Jerônimo (4).jpeg','Jardim São Jerônimo (5).jpeg','Jardim São Jerônimo (6).jpeg','Jardim São Jerônimo (7).jpeg','Jardim São Jerônimo (8).jpeg','Jardim São Jerônimo (9).jpeg','Jardim São Jerônimo (10).jpeg','Jardim São Jerônimo (11).jpeg','Jardim São Jerônimo (12).jpeg','Jardim São Jerônimo (13).jpeg','Jardim São Jerônimo (14).jpeg','Jardim São Jerônimo (15).jpeg','Jardim São Jerônimo (16).jpeg','Jardim São Jerônimo (17).jpeg'],
    ['Vila Curuça Velha.jpeg','Vila Curuça Velha. (1).jpeg','Vila Curuça Velha. (3).jpeg','Vila Curuça Velha. (4).jpeg','Vila Curuça Velha. (5).jpeg','Vila Curuça Velha. (6).jpeg','Vila Curuça Velha. (7).jpeg','Vila Curuça Velha. (8).jpeg','Vila Curuça Velha. (9).jpeg','Vila Curuça Velha. (10).jpeg','Vila Curuça Velha. (11).jpeg','Vila Curuça Velha. (12).jpeg','Vila Curuça Velha. (13).jpeg','Vila Curuça Velha. (14).jpeg','Vila Curuça Velha. (15).jpeg','Vila Curuça Velha. (16).jpeg','Vila Curuça Velha. (17).jpeg','Vila Curuça Velha. (18).jpeg','Vila Curuça Velha. (19).jpeg','Vila Curuça Velha. (20).jpeg'],
    ['Terreno 129mt.jpeg','Terreno 129mt (2).jpeg','Terreno 129mt (3).jpeg','Terreno 129mt (4).jpeg','Terreno 129mt (5).jpeg','Terreno 129mt (6).jpeg','Terreno 129mt (7).jpeg','Terreno 129mt (8).jpeg','Terreno 129mt (9).jpeg','Terreno 129mt (10).jpeg','Terreno 129mt (11).jpeg','Terreno 129mt (12).jpeg','Terreno 129mt (13).jpeg','Terreno 129mt (14).jpeg'],
    ['Terreno amplo de Esquina (1).jpeg','Terreno amplo de Esquina (2).jpeg','Terreno amplo de Esquina (3).jpeg','Terreno amplo de Esquina (4).jpeg'],
    ['sobrado-vila feliz-capa.jpeg','sobrado-vila-feliz (1).jpeg','sobrado-vila-feliz (2).jpeg','sobrado-vila-feliz (3).jpeg','sobrado-vila-feliz (4).jpeg','sobrado-vila-feliz (5).jpeg','sobrado-vila-feliz (6).jpeg','sobrado-vila-feliz (7).jpeg','sobrado-vila-feliz (8).jpeg','sobrado-vila-feliz (9).jpeg','sobrado-vila-feliz (10).jpeg','sobrado-vila-feliz (11).jpeg','sobrado-vila-feliz (12).jpeg','sobrado-vila-feliz (13).jpeg'],
    [''],
    ['Sobrado com 2 casa-capa.jpeg','Sobrado com 2 casa (1).jpeg','Sobrado com 2 casa (2).jpeg','Sobrado com 2 casa (3).jpeg','Sobrado com 2 casa (4).jpeg','Sobrado com 2 casa (5).jpeg','Sobrado com 2 casa (6).jpeg','Sobrado com 2 casa (7).jpeg','Sobrado com 2 casa (8).jpeg','Sobrado com 2 casa (8).jpeg','Sobrado com 2 casa (10).jpeg','Sobrado com 2 casa (11).jpeg','Sobrado com 2 casa (12).jpeg'],
    ['CASA GEMINADA.jpeg','CASA GEMINADA (2).jpeg','CASA GEMINADA (3).jpeg','CASA GEMINADA (4).jpeg','CASA GEMINADA (5).jpeg','CASA GEMINADA (6).jpeg','CASA GEMINADA (7).jpeg','CASA GEMINADA (8).jpeg','CASA GEMINADA (9).jpeg','CASA GEMINADA (10).jpeg','CASA GEMINADA (11).jpeg','CASA GEMINADA (12).jpeg','CASA GEMINADA (13).jpeg','CASA GEMINADA (14).jpeg','CASA GEMINADA (15).jpeg','CASA GEMINADA (16).jpeg'],
    ['Casa JD Helena.jpeg','Casa JD Helene (1).jpeg','Casa JD Helene (2).jpeg','Casa JD Helene (3).jpeg','Casa JD Helene (4).jpeg','Casa JD Helene (5).jpeg','Casa JD Helene (6).jpeg','Casa JD Helene (7).jpeg','Casa JD Helene (8).jpeg','Casa JD Helene (9).jpeg','Casa JD Helene (10).jpeg','Casa JD Helene (11).jpeg','Casa JD Helene (12).jpeg','Casa JD Helene (13).jpeg','Casa JD Helene (14).jpeg','Casa JD Helene (15).jpeg','Casa JD Helene (16).jpeg','Casa JD Helene (17).jpeg','Casa JD Helene (18).jpeg','Casa JD Helene (19).jpeg','Casa JD Helene (20).jpeg','Casa JD Helene (21).jpeg','Casa JD Helene (22).jpeg','Casa JD Helene (23).jpeg','Casa JD Helene (24).jpeg','Casa JD Helene (25).jpeg'],
    ['casa-tupinamba (1).jpeg','casa-tupinamba (2).jpeg','casa-tupinamba (3).jpeg','casa-tupinamba (4).jpeg','casa-tupinamba (5).jpeg','casa-tupinamba (6).jpeg','casa-tupinamba (7).jpeg','casa-tupinamba (8).jpeg','casa-tupinamba (9).jpeg','casa-tupinamba (10).jpeg','casa-tupinamba (11).jpeg'],
    ['Salão-VilaMara.jpeg','Salão-VilaMara (1).jpeg','Salão-VilaMara (2).jpeg','Salão-VilaMara (3).jpeg','Salão-VilaMara (4).jpeg','Salão-VilaMara (5).jpeg'],
    ['Casa-JardimMaia.jpeg','Casa-JardimMaia (1).jpeg','Casa-JardimMaia (2).jpeg','Casa-JardimMaia (3).jpeg','Casa-JardimMaia (4).jpeg','Casa-JardimMaia (5).jpeg','Casa-JardimMaia (6).jpeg','Casa-JardimMaia (7).jpeg','Casa-JardimMaia (8).jpeg','Casa-JardimMaia (9).jpeg','Casa-JardimMaia (10).jpeg'],
    ['Salão comercia-VilaMara.jpeg','Salão comercia-VilaMara (1).jpeg','Salão comercia-VilaMara (2).jpeg','Salão comercia-VilaMara (3).jpeg','Salão comercia-VilaMara (4).jpeg','Salão comercia-VilaMara (5).jpeg','Salão comercia-VilaMara (6).jpeg','Salão comercia-VilaMara (7).jpeg','Salão comercia-VilaMara (8).jpeg','Salão comercia-VilaMara (9).jpeg','Salão comercia-VilaMara (10).jpeg','Salão comercia-VilaMara (11).jpeg','Salão comercia-VilaMara (12).jpeg'], 
    ['Salão comercial com recepção.jpeg','Salão comercial com recepção (1).jpeg','Salão comercial com recepção (2).jpeg','Salão comercial com recepção (3).jpeg','Salão comercial com recepção (4).jpeg','Salão comercial com recepção (5).jpeg','Salão comercial com recepção (6).jpeg','Salão comercial com recepção (7).jpeg','Salão comercial com recepção (8).jpeg'],
    ['CASA-Jardim Helena São PauloSP.jpeg','CASA-Jardim Helena São PauloSP (1).jpeg','CASA-Jardim Helena São PauloSP (2).jpeg','CASA-Jardim Helena São PauloSP (3).jpeg','CASA-Jardim Helena São PauloSP (4).jpeg','CASA-Jardim Helena São PauloSP (5).jpeg','CASA-Jardim Helena São PauloSP (6).jpeg','CASA-Jardim Helena São PauloSP (7).jpeg','CASA-Jardim Helena São PauloSP (8).jpeg','CASA-Jardim Helena São PauloSP (9).jpeg','CASA-Jardim Helena São PauloSP (10).jpeg','CASA-Jardim Helena São PauloSP (11).jpeg','CASA-Jardim Helena São PauloSP (12).jpeg','CASA-Jardim Helena São PauloSP (13).jpeg'],
    ['Casa térrea-Helena.jpeg','Casa térrea-Helena (1).jpeg','Casa térrea-Helena (2).jpeg','Casa térrea-Helena (3).jpeg','Casa térrea-Helena (4).jpeg','Casa térrea-Helena (5).jpeg','Casa térrea-Helena (6).jpeg','Casa térrea-Helena (7).jpeg','Casa térrea-Helena (8).jpeg','Casa térrea-Helena (9).jpeg','Casa térrea-Helena (10).jpeg','Casa térrea-Helena (11).jpeg','Casa térrea-Helena (12).jpeg','Casa térrea-Helena (13).jpeg','Casa térrea-Helena (14).jpeg','Casa térrea-Helena (15).jpeg','Casa térrea-Helena (16).jpeg','Casa térrea-Helena (17).jpeg','Casa térrea-Helena (18).jpeg','Casa térrea-Helena (19).jpeg','Casa térrea-Helena (20).jpeg','Casa térrea-Helena (21).jpeg','Casa térrea-Helena (22).jpeg','Casa térrea-Helena (23).jpeg','Casa térrea-Helena (24).jpeg'],
    ['salão comercial -  Jardim Maia.jpeg','salão comercial -  Jardim Maia (1).jpeg','salão comercial -  Jardim Maia (2).jpeg','salão comercial -  Jardim Maia (3).jpeg','salão comercial -  Jardim Maia (4).jpeg','salão comercial -  Jardim Maia (5).jpeg','salão comercial -  Jardim Maia (6).jpeg','salão comercial -  Jardim Maia (7).jpeg','salão comercial -  Jardim Maia (8).jpeg','salão comercial -  Jardim Maia (9).jpeg','salão comercial -  Jardim Maia (1).jpeg','salão comercial -  Jardim Maia (10).jpeg','salão comercial -  Jardim Maia (11).jpeg','salão comercial -  Jardim Maia (12).jpeg','salão comercial -  Jardim Maia (13).jpeg','salão comercial -  Jardim Maia (14).jpeg','salão comercial -  Jardim Maia (15).jpeg','salão comercial -  Jardim Maia (16).jpeg','salão comercial -  Jardim Maia (17).jpeg','salão comercial -  Jardim Maia (18).jpeg','salão comercial -  Jardim Maia (19).jpeg','salão comercial -  Jardim Maia (20).jpeg','salão comercial -  Jardim Maia (21).jpeg','salão comercial -  Jardim Maia (22).jpeg','salão comercial -  Jardim Maia (23).jpeg'],
    ['Terreno-JD-Helena.jpeg','Terreno-JD-Helena (1).jpeg','Terreno-JD-Helena (2).jpeg','Terreno-JD-Helena (3).jpeg','Terreno-JD-Helena (4).jpeg','Terreno-JD-Helena (5).jpeg','Terreno-JD-Helena (6).jpeg','Terreno-JD-Helena (7).jpeg','Terreno-JD-Helena (8).jpeg','Terreno-JD-Helena (9).jpeg','Terreno-JD-Helena (10).jpeg','Terreno-JD-Helena (11).jpeg','Terreno-JD-Helena (12).jpeg','Terreno-JD-Helena (13).jpeg'],
    ['Terreno-Jardim-Campos.jpeg','Terreno-Jardim-Campos (1).jpeg','Terreno-Jardim-Campos (2).jpeg','Terreno-Jardim-Campos (3).jpeg','Terreno-Jardim-Campos (4).jpeg','Terreno-Jardim-Campos (5).jpeg','Terreno-Jardim-Campos (6).jpeg','Terreno-Jardim-Campos (7).jpeg','Terreno-Jardim-Campos (8).jpeg','Terreno-Jardim-Campos (9).jpeg','Terreno-Jardim-Campos (10).jpeg','Terreno-Jardim-Campos (11).jpeg','Terreno-Jardim-Campos (12).jpeg','Terreno-Jardim-Campos (13).jpeg','Terreno-Jardim-Campos (14).jpeg','Terreno-Jardim-Campos (15).jpeg','Terreno-Jardim-Campos (16).jpeg','Terreno-Jardim-Campos (17).jpeg','Terreno-Jardim-Campos (18).jpeg','Terreno-Jardim-Campos (19).jpeg','Terreno-Jardim-Campos (20).jpeg'],
    ['Apartamento de 44 metros quadrados.jpeg','Apartamento de 44 metros quadrados (1).jpeg','Apartamento de 44 metros quadrados (2).jpeg','Apartamento de 44 metros quadrados (3).jpeg','Apartamento de 44 metros quadrados (4).jpeg','Apartamento de 44 metros quadrados (5).jpeg','Apartamento de 44 metros quadrados (6).jpeg','Apartamento de 44 metros quadrados (7).jpeg','Apartamento de 44 metros quadrados (8).jpeg','Apartamento de 44 metros quadrados (9).jpeg','Apartamento de 44 metros quadrados (10).jpeg','Apartamento de 44 metros quadrados (11).jpeg','Apartamento de 44 metros quadrados (12).jpeg','Apartamento de 44 metros quadrados (13).jpeg','Apartamento de 44 metros quadrados (14).jpeg','Apartamento de 44 metros quadrados (15).jpeg'],
    ['Salão comercial duas portas.jpeg','Salão comercial duas portas (1).jpeg','Salão comercial duas portas (2).jpeg','Salão comercial duas portas (3).jpeg','Salão comercial duas portas (4).jpeg'],
    ['Sobrado - Venda-Jardim Helena.jpeg','Sobrado - Venda-Jardim Helena (1).jpeg','Sobrado - Venda-Jardim Helena (2).jpeg','Sobrado - Venda-Jardim Helena (3).jpeg','Sobrado - Venda-Jardim Helena (4).jpeg','Sobrado - Venda-Jardim Helena (5).jpeg','Sobrado - Venda-Jardim Helena (6).jpeg','Sobrado - Venda-Jardim Helena (7).jpeg','Sobrado - Venda-Jardim Helena (8).jpeg','Sobrado - Venda-Jardim Helena (9).jpeg','Sobrado - Venda-Jardim Helena (10).jpeg','Sobrado - Venda-Jardim Helena (11).jpeg','Sobrado - Venda-Jardim Helena (12).jpeg','Sobrado - Venda-Jardim Helena (13).jpeg'],
    ['Salão comercial espaçoso.jpeg','Salão comercial espaçoso (1).jpeg','Salão comercial espaçoso (2).jpeg','Salão comercial espaçoso (3).jpeg','Salão comercial espaçoso (4).jpeg','Salão comercial espaçoso (5).jpeg','Salão comercial espaçoso (6).jpeg','Salão comercial espaçoso (7).jpeg','Salão comercial espaçoso (8).jpeg','Salão comercial espaçoso (9).jpeg'],
    ['Sobrado 3 quartos-Parque Paulistano.jpeg','Sobrado 3 quartos-Parque Paulistano (1).jpeg','Sobrado 3 quartos-Parque Paulistano (2).jpeg','Sobrado 3 quartos-Parque Paulistano (3).jpeg','Sobrado 3 quartos-Parque Paulistano (4).jpeg','Sobrado 3 quartos-Parque Paulistano (5).jpeg','Sobrado 3 quartos-Parque Paulistano (6).jpeg','Sobrado 3 quartos-Parque Paulistano (7).jpeg','Sobrado 3 quartos-Parque Paulistano (8).jpeg','Sobrado 3 quartos-Parque Paulistano (9).jpeg','Sobrado 3 quartos-Parque Paulistano (10).jpeg','Sobrado 3 quartos-Parque Paulistano (11).jpeg','Sobrado 3 quartos-Parque Paulistano (12).jpeg','Sobrado 3 quartos-Parque Paulistano (13).jpeg','Sobrado 3 quartos-Parque Paulistano (14).jpeg','Sobrado 3 quartos-Parque Paulistano (15).jpeg','Sobrado 3 quartos-Parque Paulistano (16).jpeg','Sobrado 3 quartos-Parque Paulistano (17).jpeg','Sobrado 3 quartos-Parque Paulistano (18).jpeg','Sobrado 3 quartos-Parque Paulistano (19).jpeg','Sobrado 3 quartos-Parque Paulistano (20).jpeg','Sobrado 3 quartos-Parque Paulistano (21).jpeg','Sobrado 3 quartos-Parque Paulistano (22).jpeg','Sobrado 3 quartos-Parque Paulistano (23).jpeg','Sobrado 3 quartos-Parque Paulistano (24).jpeg','Sobrado 3 quartos-Parque Paulistano (25).jpeg','Sobrado 3 quartos-Parque Paulistano (26).jpeg','Sobrado 3 quartos-Parque Paulistano (27).jpeg','Sobrado 3 quartos-Parque Paulistano (28).jpeg','Sobrado 3 quartos-Parque Paulistano (29).jpeg','Sobrado 3 quartos-Parque Paulistano (30).jpeg'],
    ['Terreno com 3 salões.jpeg','Terreno com 3 salões (1).jpeg','Terreno com 3 salões (2).jpeg','Terreno com 3 salões (3).jpeg'],
    ['Terreno 10x25.jpeg','Terreno 10x25 (1).jpeg','Terreno 10x25 (2).jpeg','Terreno 10x25 (3).jpeg','Terreno 10x25 (4).jpeg','Terreno 10x25 (5).jpeg','Terreno 10x25 (6).jpeg','Terreno 10x25 (7).jpeg','Terreno 10x25 (8).jpeg','Terreno 10x25 (9).jpeg','Terreno 10x25 (10).jpeg','Terreno 10x25 (11).jpeg','Terreno 10x25 (12).jpeg','Terreno 10x25 (13).jpeg','Terreno 10x25 (14).jpeg','Terreno 10x25 (15).jpeg'],
    ['Jardim Noêmia-6 vagas.jpeg','Jardim Noêmia-6 vagas (1).jpeg','Jardim Noêmia-6 vagas (2).jpeg','Jardim Noêmia-6 vagas (3).jpeg','Jardim Noêmia-6 vagas (4).jpeg','Jardim Noêmia-6 vagas (5).jpeg','Jardim Noêmia-6 vagas (6).jpeg','Jardim Noêmia-6 vagas (7).jpeg','Jardim Noêmia-6 vagas (8).jpeg','Jardim Noêmia-6 vagas (9).jpeg','Jardim Noêmia-6 vagas (10).jpeg','Jardim Noêmia-6 vagas (11).jpeg','Jardim Noêmia-6 vagas (12).jpeg','Jardim Noêmia-6 vagas (13).jpeg','Jardim Noêmia-6 vagas (14).jpeg','Jardim Noêmia-6 vagas (15).jpeg','Jardim Noêmia-6 vagas (16).jpeg','Jardim Noêmia-6 vagas (17).jpeg','Jardim Noêmia-6 vagas (18).jpeg','Jardim Noêmia-6 vagas (19).jpeg','Jardim Noêmia-6 vagas (20).jpeg','Jardim Noêmia-6 vagas (21).jpeg','Jardim Noêmia-6 vagas (22).jpeg','Jardim Noêmia-6 vagas (23).jpeg','Jardim Noêmia-6 vagas (24).jpeg','Jardim Noêmia-6 vagas (25).jpeg','Jardim Noêmia-6 vagas (26).jpeg','Jardim Noêmia-6 vagas (27).jpeg','Jardim Noêmia-6 vagas (28).jpeg','Jardim Noêmia-6 vagas (29).jpeg','Jardim Noêmia-6 vagas (30).jpeg','Jardim Noêmia-6 vagas (31).jpeg','Jardim Noêmia-6 vagas (32).jpeg','Jardim Noêmia-6 vagas (33).jpeg','Jardim Noêmia-6 vagas (34).jpeg','Jardim Noêmia-6 vagas (35).jpeg','Jardim Noêmia-6 vagas (36).jpeg','Jardim Noêmia-6 vagas (37).jpeg','Jardim Noêmia-6 vagas (38).jpeg','Jardim Noêmia-6 vagas (39).jpeg','Jardim Noêmia-6 vagas (40).jpeg','Jardim Noêmia-6 vagas (41).jpeg','Jardim Noêmia-6 vagas (42).jpeg','Jardim Noêmia-6 vagas (43).jpeg','Jardim Noêmia-6 vagas (44).jpeg','Jardim Noêmia-6 vagas (45).jpeg','Jardim Noêmia-6 vagas (46).jpeg','Jardim Noêmia-6 vagas (47).jpeg','Jardim Noêmia-6 vagas (48).jpeg','Jardim Noêmia-6 vagas (49).jpeg','Jardim Noêmia-6 vagas (50).jpeg','Jardim Noêmia-6 vagas (51).jpeg'],
    ['Apartamento Jardim Belém.jpeg','Apartamento Jardim Belém (1).jpeg','Apartamento Jardim Belém (2).jpeg','Apartamento Jardim Belém (3).jpeg','Apartamento Jardim Belém (4).jpeg','Apartamento Jardim Belém (5).jpeg','Apartamento Jardim Belém (6).jpeg','Apartamento Jardim Belém (7).jpeg','Apartamento Jardim Belém (8).jpeg','Apartamento Jardim Belém (9).jpeg','Apartamento Jardim Belém (10).jpeg','Apartamento Jardim Belém (11).jpeg','Apartamento Jardim Belém (12).jpeg','Apartamento Jardim Belém (13).jpeg','Apartamento Jardim Belém (14).jpeg','Apartamento Jardim Belém (15).jpeg','Apartamento Jardim Belém (16).jpeg','Apartamento Jardim Belém (17).jpeg','Apartamento Jardim Belém (18).jpeg'],
    ['sobrado espaçoso jardim Maia.jpeg','sobrado espaçoso jardim Maia (1).jpeg','sobrado espaçoso jardim Maia (2).jpeg','sobrado espaçoso jardim Maia (3).jpeg','sobrado espaçoso jardim Maia (4).jpeg','sobrado espaçoso jardim Maia (5).jpeg','sobrado espaçoso jardim Maia (6).jpeg','sobrado espaçoso jardim Maia (7).jpeg','sobrado espaçoso jardim Maia (8).jpeg','sobrado espaçoso jardim Maia (9).jpeg','sobrado espaçoso jardim Maia (10).jpeg','sobrado espaçoso jardim Maia (11).jpeg','sobrado espaçoso jardim Maia (12).jpeg','sobrado espaçoso jardim Maia (13).jpeg','sobrado espaçoso jardim Maia (14).jpeg','sobrado espaçoso jardim Maia (15).jpeg','sobrado espaçoso jardim Maia (16).jpeg','sobrado espaçoso jardim Maia (17).jpeg','sobrado espaçoso jardim Maia (18).jpeg','sobrado espaçoso jardim Maia (19).jpeg','sobrado espaçoso jardim Maia (20).jpeg','sobrado espaçoso jardim Maia (21).jpeg','sobrado espaçoso jardim Maia (22).jpeg','sobrado espaçoso jardim Maia (23).jpeg','sobrado espaçoso jardim Maia (24).jpeg','sobrado espaçoso jardim Maia (25).jpeg','sobrado espaçoso jardim Maia (26).jpeg','sobrado espaçoso jardim Maia (27).jpeg','sobrado espaçoso jardim Maia (28).jpeg','sobrado espaçoso jardim Maia (29).jpeg','sobrado espaçoso jardim Maia (30).jpeg','sobrado espaçoso jardim Maia (31).jpeg'],
    ['Casa térrea-Jardim Helena.jpeg','Casa térrea-Jardim Helena (1).jpeg','Casa térrea-Jardim Helena (2).jpeg','Casa térrea-Jardim Helena (3).jpeg','Casa térrea-Jardim Helena (4).jpeg','Casa térrea-Jardim Helena (5).jpeg','Casa térrea-Jardim Helena (6).jpeg','Casa térrea-Jardim Helena (7).jpeg','Casa térrea-Jardim Helena (8).jpeg','Casa térrea-Jardim Helena (9).jpeg','Casa térrea-Jardim Helena (10).jpeg','Casa térrea-Jardim Helena (11).jpeg'],
  ];


   
    // Adicionar outras imagens conforme necessário                        '''''''''''''''''''''''''

 

function openModal(index) {
    currentModalIndex = index;
    currentImageIndex = 0;
    document.getElementById('modalImage').src = images[index][currentImageIndex];
    document.getElementById('imovelModal').style.display = 'flex';  
}

function closeModal() {
    document.getElementById('imovelModal').style.display = 'none';  // Fechar o modal
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images[currentModalIndex].length;
    document.getElementById('modalImage').src = images[currentModalIndex][currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images[currentModalIndex].length) % images[currentModalIndex].length;
    document.getElementById('modalImage').src = images[currentModalIndex][currentImageIndex];
}
document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.querySelector('.chatbox');
    const chatToggle = document.querySelector('.chat-toggle');
    const chatClose = document.querySelector('.chat-close');
    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    const chatBody = document.querySelector('.chat-body');
  
    let stage = 0; // Controla o fluxo de mensagens
    let clientName = ''; // Armazena o nome do cliente
    let serviceOption = ''; // Armazena a opção escolhida pelo cliente
  
    const whatsappNumber = "5511975563880"; 
  
    chatToggle.addEventListener('click', () => {
      chatbox.style.display = 'flex';
      chatToggle.style.display = 'none';
    });
  
    chatClose.addEventListener('click', () => {
      chatbox.style.display = 'none';
      chatToggle.style.display = 'block';
    });
  
    chatSend.addEventListener('click', handleChat);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleChat();
    });
  
    function handleChat() {
      const message = chatInput.value.trim();
      if (!message) return;
  
      chatBody.innerHTML += `<p><strong>Você:</strong> ${message}</p>`;
      chatInput.value = '';
  
      if (stage === 0) {
        clientName = message;
        chatBody.innerHTML += `<p>Olá, ${clientName}! Por favor, escolha uma das opções abaixo:</p>
          <p>1. Locação de Imóvel</p>
          <p>2. Compra de Imóvel</p>
          <p>3. Outras Informações</p>`;
        stage = 1;
      } else if (stage === 1) {
        if (['1', '2', '3'].includes(message)) {
          serviceOption = getOptionText(message);
          chatBody.innerHTML += `<p>Ótimo! Vou te direcionar para o WhatsApp da Galdino Imóveis com essa informação.</p>`;
          redirectToWhatsApp(clientName, serviceOption);
        } else {
          chatBody.innerHTML += `<p>Por favor, escolha uma opção válida (1, 2 ou 3).</p>`;
        }
      }
      chatBody.scrollTop = chatBody.scrollHeight; // Scroll para última mensagem
    }
  
    function getOptionText(option) {
      switch (option) {
        case '1': return 'Locação de Imóvel';
        case '2': return 'Compra de Imóvel';
        case '3': return 'Outras Informações';
        default: return '';
      }
    }
  
    function redirectToWhatsApp(name, option) {
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá, meu nome é ${name}. Estou interessado em ${option}.`;
      setTimeout(() => {
        window.open(whatsappLink, '_blank');
        resetChat();
      }, 2000);
    }
  
    function resetChat() {
      stage = 0;
      clientName = '';
      serviceOption = '';
      chatBody.innerHTML = `<p>Olá! 👋</p>
        <p>Bem-vindo à Galdino Imóveis. Qual o seu nome?</p>`;
    }
  });
  



