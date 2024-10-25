let currentImageIndex = 0;
let currentModalIndex = 0;
const images = [
    ['casa1foto1.jpg', 'img/casa1foto2.jpg', 'img/casa1foto3.jpg','img/casa1foto4.jpg','img/casa1foto5.jpg','img/casa1foto6.jpg','img/casa1foto7.jpg','img/casa1foto8.jpg','img/casa1foto9.jpg','img/casa1foto10.jpg,','img/casa1foto11.jpg'],  
    ['casa2foto1.jpg', 'img/casa2foto2.jpg', 'img/casa2foto3.jpg', 'img/casa2foto4.jpg','img/casa2foto5.jpg','img/casa2foto6.jpg','img/casa2foto7.jpg','img/casa2foto8.jpg','img/casa2foto9.jpg','img/casa2foto10.jpg','img/casa2foto11.jpg','img/casa2foto12.jpg'],  
    ['casa3foto1.jpg', 'img/casa3foto2.jpg', 'img/casa3foto3.jpg','img/casa3foto4.jpg','img/casa3foto5.jpg'],  
    ['casa4foto1.jpg', 'img/casa4foto2.jpg', 'img/casa4foto3.jpg', 'img/casa4foto4.jpg', 'img/casa4foto5.jpg', 'img/casa4foto6.jpg', 'img/casa4foto7.jpg', 'img/casa4foto8.jpg', 'img/casa4foto9.jpg', 'img/casa4foto10.jpg', 'img/casa4foto11.jpg'],
    ['casa5foto1.jpg', 'img/casa5foto2.jpg', 'img/casa5foto3.jpg', 'img/casa5foto4.jpg', 'img/casa5foto5.jpg', 'img/casa5foto6.jpg', 'img/casa5foto7.jpg', 'img/casa5foto8.jpg', 'img/casa5foto9.jpg', 'img/casa5foto10.jpg', 'img/casa5foto11.jpg', 'img/casa5foto12.jpg', 'img/casa5foto13.jpg', 'img/casa5foto14.jpg', 'img/casa5foto15.jpg', 'img/casa5foto16.jpg', 'img/casa5foto17.jpg'],
    ['casa6foto1.jpg', 'img/casa6foto2.jpg', 'img/casa6foto3.jpg', 'img/casa6foto4.jpg', 'img/casa6foto5.jpg', 'img/casa6foto6.jpg', 'img/casa6foto7.jpg', 'img/casa6foto8.jpg', 'img/casa6foto9.jpg', 'img/casa6foto10.jpg', 'img/casa6foto11.jpg', 'img/casa6foto12.jpg', 'img/casa6foto13.jpg', 'img/casa6foto14.jpg', 'img/casa6foto15.jpg'],
    ['casa7foto1.jpg', 'img/casa7foto2.jpg', 'img/casa7foto3.jpg', 'img/casa7foto4.jpg', 'img/casa7foto5.jpg', 'img/casa7foto6.jpg', 'img/casa7foto7.jpg', 'img/casa7foto8.jpg', 'img/casa7foto9.jpg', 'img/casa7foto10.jpg', 'img/casa7foto11.jpg', 'img/casa7foto12.jpg', 'img/casa7foto13.jpg', 'img/casa7foto14.jpg', 'img/casa7foto15.jpg', 'img/casa7foto16.jpg', 'img/casa7foto17.jpg'],
    ['casa8.jpg'],
    ['casa9.jpg'],
    ['casa10.jpg'],
    ['casa11foto1.jpg', 'img/casa11foto2.jpg', 'img/casa11foto3.jpg', 'img/casa11foto4.jpg', 'img/casa11foto5.jpg', 'img/casa11foto6.jpg', 'img/casa11foto7.jpg', 'img/casa11foto8.jpg', 'img/casa11foto9.jpg', 'img/casa11foto10.jpg', 'img/casa11foto11.jpg'],
    ['casa12foto1.jpg', 'img/casa12foto2.jpg', 'img/casa12foto3.jpg', 'img/casa12foto4.jpg', 'img/casa12foto5.jpg', 'img/casa12foto6.jpg', 'img/casa12foto7.jpg', 'img/casa12foto8.jpg', 'img/casa12foto9.jpg', 'img/casa12foto10.jpg', 'img/casa12foto11.jpg'],
    ['casa13foto1.jpg', 'img/casa13foto2.jpg', 'img/casa13foto3.jpg', 'img/casa13foto4.jpg', 'img/casa13foto5.jpg', 'img/casa13foto6.jpg', 'img/casa13foto7.jpg', 'img/casa13foto8.jpg'],
    ['casa14foto1.jpg', 'img/casa14foto2.jpg', 'img/casa14foto3.jpg', 'img/casa14foto4.jpg', 'img/casa14foto5.jpg', 'img/casa14foto6.jpg', 'img/casa14foto7.jpg', 'img/casa14foto8.jpg', 'img/casa14foto9.jpg', 'img/casa14foto10.jpg', 'img/casa14foto11.jpg', 'img/casa14foto12.jpg'],
    ['casa15foto1.jpg', 'img/casa15foto2.jpg', 'img/casa15foto3.jpg'],
    ['casa16foto1.jpg', 'img/casa16foto2.jpg', 'img/casa16foto3.jpg', 'img/casa16foto4.jpg', 'img/casa16foto5.jpg', 'img/casa16foto6.jpg', 'img/casa16foto7.jpg', 'img/casa16foto8.jpg', 'img/casa16foto9.jpg', 'img/casa16foto10.jpg', 'img/casa16foto11.jpg', 'img/casa16foto12.jpg', 'img/casa16foto13.jpg'],
    ['casa17foto1.jpg', 'img/casa17foto2.jpg', 'img/casa17foto3.jpg', 'img/casa17foto4.jpg', 'img/casa17foto5.jpg', 'img/casa17foto6.jpg', 'img/casa17foto7.jpg', 'img/casa17foto8.jpg', 'img/casa17foto9.jpg', 'img/casa17foto10.jpg', 'img/casa17foto11.jpg'],
    ['casa18foto1.jpg', 'img/casa18foto2.jpg', 'img/casa18foto3.jpg', 'img/casa18foto4.jpg', 'img/casa18foto5.jpg', 'img/casa18foto6.jpg', 'img/casa18foto7.jpg', 'img/casa18foto8.jpg', 'img/casa18foto9.jpg', 'img/casa18foto10.jpg'],
    ['casa19foto1.jpg', 'img/casa19foto2.jpg', 'img/casa19foto3.jpg', 'img/casa19foto4.jpg', 'img/casa19foto5.jpg', 'img/casa19foto6.jpg', 'img/casa19foto7.jpg', 'img/casa19foto8.jpg', 'img/casa19foto9.jpg', 'img/casa19foto10.jpg', 'img/casa19foto11.jpg'],
    ['casa20foto1.jpg', 'img/casa20foto2.jpg', 'img/casa20foto3.jpg', 'img/casa20foto4.jpg', 'img/casa20foto5.jpg', 'img/casa20foto6.jpg', 'img/casa20foto7.jpg', 'img/casa20foto8.jpg', 'img/casa20foto9.jpg', 'img/casa20foto10.jpg', 'img/casa20foto11.jpg', 'img/casa20foto12.jpg'],
    ['casa21foto1.jpg', 'img/casa21foto2.jpg', 'img/casa21foto3.jpg', 'img/casa21foto4.jpg', 'img/casa21foto5.jpg', 'img/casa21foto6.jpg', 'img/casa21foto7.jpg', 'img/casa21foto8.jpg', 'img/casa21foto9.jpg', 'img/casa21foto10.jpg', 'img/casa21foto11.jpg', 'img/casa21foto12.jpg', 'img/casa21foto13.jpg'],
    ['casa22foto1.jpg', 'img/casa22foto2.jpg', 'img/casa22foto3.jpg', 'img/casa22foto4.jpg'],
    ['casa23foto1.jpg', 'img/casa23foto2.jpg', 'img/casa23foto3.jpg', 'img/casa23foto4.jpg', 'img/casa23foto5.jpg', 'img/casa23foto6.jpg', 'img/casa23foto7.jpg', 'img/casa23foto8.jpg', 'img/casa23foto9.jpg', 'img/casa23foto10.jpg', 'img/casa23foto11.jpg', 'img/casa23foto12.jpg', 'img/casa23foto13.jpg', 'img/casa23foto14.jpg', 'img/casa23foto15.jpg'],
    ['casa24foto1.jpg', 'img/casa24foto2.jpg', 'img/casa24foto3.jpg', 'img/casa24foto4.jpg', 'img/casa24foto5.jpg', 'img/casa24foto6.jpg', 'img/casa24foto7.jpg', 'img/casa24foto8.jpg', 'img/casa24foto9.jpg', 'img/casa24foto10.jpg'],
    ['casa25foto1.jpg', 'img/casa25foto2.jpg', 'img/casa25foto3.jpg', 'img/casa25foto4.jpg', 'img/casa25foto5.jpg', 'img/casa25foto6.jpg', 'img/casa25foto7.jpg'],
    ['casa26foto1.jpg', 'img/casa26foto2.jpg', 'img/casa26foto3.jpg', 'img/casa26foto4.jpg'],
    ['casa27foto1.jpg', 'img/casa27foto2.jpg', 'img/casa27foto3.jpg', 'img/casa27foto4.jpg', 'img/casa27foto5.jpg'],
    ['casa28foto1.jpg', 'img/casa28foto2.jpg', 'img/casa28foto3.jpg', 'img/casa28foto4.jpg', 'img/casa28foto5.jpg', 'img/casa28foto6.jpg', 'img/casa28foto7.jpg', 'img/casa28foto8.jpg', 'img/casa28foto9.jpg'],
    ['casa29foto1.jpg', 'img/casa29foto2.jpg', 'img/casa29foto3.jpg', 'img/casa29foto4.jpg', 'img/casa29foto5.jpg'],
    ['condominiosfoto1.jpg', 'condominiosfoto2.jpg', 'condominiosfoto3.jpg'],
    ['praia1foto1.jpg', 'praia1foto2.jpg', 'praia1foto3.jpg', 'praia1foto4.jpg', 'praia1foto5.jpg', 'praia1foto6.jpg', 'praia1foto7.jpg', 'praia1foto8.jpg', 'img/praia1foto9.jpg', 'praia1foto10.jpg'],
    ['praiav1foto1.jpg', 'praia1vfoto2.jpg', 'praiav1foto3.jpg', 'praiav1foto4.jpg', 'praiav1foto5.jpg', 'praiav1foto6.jpg', 'praiav1foto7.jpg', 'praiav1foto8.jpg', 'praiav1foto9.jpg', 'praiav1foto10.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
    ['praiav2foto1.jpg', 'praiav2foto2.jpg', 'praiav2foto3.jpg', 'praiav2foto4.jpg', 'praiav2foto5.jpg', 'praiav2foto6.jpg', 'praiav2foto7.jpg', 'praiav2foto8.jpg', 'praiav2foto9.jpg', 'praiav2foto10.jpg', 'praiav2foto11.jpg', 'praiav2foto12.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
    ['praiav3foto1.jpg', 'praiav3foto2.jpg', 'praiav3foto3.jpg', 'praiav3foto4.jpg', 'praiav3foto5.jpg', 'praiav3foto6.jpg', 'praiav3foto7.jpg', 'praiav3foto8.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
    ['praiav4foto1.jpg', 'praiav4foto2.jpg', 'praiav4foto3.jpg', 'praiav4foto4.jpg', 'condominiovfoto1.jpg','condominiovfoto2.jpg','condominiovfoto3.jpg','condominiovfoto4.jpg','condominiovfoto5.jpg'],
  // Adicione outras imagens conforme necessário                        '''''''''''''''''''''''''
];

function openModal(index) {
    currentModalIndex = index;
    currentImageIndex = 0;
    document.getElementById('modalImage').src = images[index][currentImageIndex];
    document.getElementById('imovelModal').style.display = 'flex';  // Certifique-se de que o modal aparece
}

function closeModal() {
    document.getElementById('imovelModal').style.display = 'none';  // Fecha o modal
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images[currentModalIndex].length;
    document.getElementById('modalImage').src = images[currentModalIndex][currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images[currentModalIndex].length) % images[currentModalIndex].length;
    document.getElementById('modalImage').src = images[currentModalIndex][currentImageIndex];
}

