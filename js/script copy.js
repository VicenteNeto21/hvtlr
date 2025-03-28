const UNSPLASH_ACCESS_KEY = "mcxVQhA1gyMHwt4CVAnWuK2wlpC1jnoTLqeWV4rdUXM"; // 🔹 Substitua pela sua chave da Unsplash API

const imageQueries = {
  "slide-img": "veterinary pet",
  "servico-img1": "dog vet",
  "servico-img2": "cat checkup",
  "servico-img3": "pet surgery",
  "blog-img1": "dog care",
  "blog-img2": "cat health",
  "blog-img3": "vet clinic"
};

// Função para buscar imagens na Unsplash API
async function fetchUnsplashImage(query) {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_ACCESS_KEY}`);
    
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    return data.urls?.regular || "https://via.placeholder.com/400";
  } catch (error) {
    console.error("Erro ao buscar imagem:", error);
    return "https://via.placeholder.com/400"; // Imagem padrão caso a API falhe
  }
}

// Aplicar imagens dinamicamente
async function loadImages() {
  for (const [id, query] of Object.entries(imageQueries)) {
    const imgElement = document.getElementById(id);
    if (imgElement) {
      const imgUrl = await fetchUnsplashImage(query);
      imgElement.src = imgUrl;
    }
  }
}

// Executar quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", loadImages);
