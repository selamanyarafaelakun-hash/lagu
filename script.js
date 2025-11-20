const animals = {
  "jawa": [
    { 
      name: "Badak Jawa",
      img: "badak jawa.JPEG",
      latin: "Rhinoceros sondaicus",
      habitat: "Hutan hujan Ujung Kulon",
      food: "Daun-daunan, ranting",
      status: "Sangat Terancam Punah",
      info: "Salah satu hewan paling langka di dunia, hanya tersisa di Ujung Kulon."
    },
    { 
      name: "Elang Jawa",
      img: "elang jawa.JPEG",
      latin: "Nisaetus bartelsi",
      habitat: "Hutan pegunungan Jawa",
      food: "Mamalia kecil, kadal, burung lain",
      status: "Terancam Punah",
      info: "Menjadi inspirasi lambang negara Garuda."
    },
    { 
      name: "Lutung Jawa",
      img: "lutungjawa.JPEG",
      latin: "Trachypithecus auratus",
      habitat: "Hutan tropis Jawa",
      food: "Buah, daun, bunga",
      status: "Rentan",
      info: "Dikenal dengan warna bulu keemasan saat masih kecil."
    }
  ],

  "sumatra": [
    { 
      name: "Harimau Sumatra",
      img: "harimau.JPEG",
      latin: "Panthera tigris sumatrae",
      habitat: "Hutan Sumatra",
      food: "Rusa, babi hutan",
      status: "Kritis",
      info: "Subspesies harimau terkecil yang hanya ada di Indonesia."
    },
    { 
      name: "Gajah Sumatra",
      img: "gajah.JPEG",
      latin: "Elephas maximus sumatranus",
      habitat: "Hutan dataran rendah Sumatra",
      food: "Rumput, daun, kulit kayu",
      status: "Kritis",
      info: "Gajah paling kecil di Asia."
    },
    { 
      name: "Badak Sumatra",
      img: "badak.JPEG",
      latin: "Dicerorhinus sumatrensis",
      habitat: "Hutan tropis lebat",
      food: "Daun, ranting",
      status: "Kritis",
      info: "Badak bercula dua terkecil di dunia."
    }
  ],

  "kalimantan": [
    { 
      name: "Orangutan Kalimantan",
      img: "orangutan.jpeg",
      latin: "Pongo pygmaeus",
      habitat: "Hutan hujan Borneo",
      food: "Buah, kulit kayu, serangga",
      status: "Kritis",
      info: "Primata paling cerdas di Asia."
    },
    { 
      name: "Bekantan",
      img: "bekantan.jpeg",
      latin: "Nasalis larvatus",
      habitat: "Hutan bakau dan rawa",
      food: "Daun, biji, buah",
      status: "Terancam",
      info: "Dikenal dengan hidung besar."
    },
    { 
      name: "Kucing Hutan Borneo",
      img: "kucing.jpeg",
      latin: "Catopuma badia",
      habitat: "Hutan tropis Borneo",
      food: "Tikus, burung",
      status: "Rentan",
      info: "Kucing liar yang sangat jarang terlihat."
    }
  ],

  "sulawesi": [
    { 
      name: "Tarsius",
      img: "tarsius.jpg",
      latin: "Tarsius tarsier",
      habitat: "Hutan Sulawesi",
      food: "Serangga, kadal kecil",
      status: "Rentan",
      info: "Memiliki mata sangat besar untuk berburu di malam hari."
    },
    { 
      name: "Anoa",
      img: "anoa.jpg",
      latin: "Bubalus depressicornis",
      habitat: "Hutan pegunungan",
      food: "Rumput, daun",
      status: "Kritis",
      info: "Kerbau kerdil endemik Sulawesi."
    },
    { 
      name: "Babi Rusa",
      img: "babirusa.jpg",
      latin: "Babyrousa babyrussa",
      habitat: "Hutan Sulawesi",
      food: "Buah, daun",
      status: "Rentan",
      info: "Memiliki taring melengkung unik ke atas."
    }
  ],

  "papua": [
    { 
      name: "Burung Cendrawasih",
      img: "candrawasi.JPEG",
      latin: "Paradisaeidae",
      habitat: "Hutan Papua",
      food: "Serangga, buah",
      status: "Hampir Terancam",
      info: "Dijuluki 'Bird of Paradise' karena keindahannya."
    },
    { 
      name: "Kaswari",
      img: "kaswari.JPEG",
      latin: "Casuarius casuarius",
      habitat: "Hutan Papua",
      food: "Buah, akar",
      status: "Rentan",
      info: "Salah satu burung paling berbahaya di dunia."
    },
    { 
      name: "Kangguru Pohon",
      img: "kangguru pohon.JPEG",
      latin: "Dendrolagus",
      habitat: "Hutan hujan Papua",
      food: "Daun, buah",
      status: "Terancam",
      info: "Kangguru unik yang hidup di pohon."
    }
  ]
};

document.getElementById("search").addEventListener("keyup", function () {
  const query = this.value.toLowerCase().trim();
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "";

  if (animals[query]) {
    animals[query].forEach(animal => {
      resultDiv.innerHTML += `
        <div class="animal-card">
          <img src="${animal.img}" alt="${animal.name}">
          <h3>${animal.name}</h3>
          <p><b>Nama Latin:</b> ${animal.latin}</p>
          <p><b>Habitat:</b> ${animal.habitat}</p>
          <p><b>Makanan:</b> ${animal.food}</p>
          <p><b>Status:</b> ${animal.status}</p>
          <p><i>${animal.info}</i></p>
        </div>
      `;
    });
  } else if (query.length > 0) {
    resultDiv.innerHTML = `<p>Pulau tidak ditemukan. Coba: Jawa, Sumatra, Kalimantan, Papua...</p>`;
  }
});
