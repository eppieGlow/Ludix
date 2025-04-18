document.addEventListener("DOMContentLoaded", () => {
    const introVideo = document.getElementById("introVideo");
  
    // Vérifier si la vidéo a déjà été vue dans cette session
    if (!sessionStorage.getItem('videoSeen')) {
      // Si ce n'est pas le cas, afficher la vidéo
      introVideo.style.display = 'block';
      
      // Ajouter un événement de fin de vidéo pour la cacher une fois terminée
      introVideo.addEventListener('ended', () => {
        introVideo.style.display = 'none';
        // Marquer dans sessionStorage que la vidéo a été vue
        sessionStorage.setItem('videoSeen', 'true');
      });
    }
  });
  