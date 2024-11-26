// Mengambil elemen <hr> dan link navbar
    const links = document.querySelectorAll('.nav-link');
    const hr = document.querySelector('.navbar-nav hr'); // Elemen garis horizontal

    // Fungsi untuk mengatur posisi garis horizontal
    function moveUnderline(link) {
      const linkPosition = link.getBoundingClientRect(); // Mengambil posisi link yang diklik
      hr.style.left = `${linkPosition.left}px`;  // Menyesuaikan posisi garis horizontal
      hr.style.width = `${linkPosition.width}px`; // Menyesuaikan lebar garis horizontal
    }

    // Menambahkan event listener untuk setiap link
    links.forEach(link => {
      link.addEventListener('click', function() {
        // Menghapus kelas 'active' dari semua link
        links.forEach(l => l.classList.remove('active'));
        // Menambahkan kelas 'active' pada link yang diklik
        this.classList.add('active');
        // Memindahkan garis ke posisi link yang diklik
        moveUnderline(this);
      });
    });

    // Menambahkan garis di bawah link pertama secara default
    const firstLink = links[0];
    firstLink.classList.add('active');
    moveUnderline(firstLink); // Menetapkan garis di bawah link pertama saat halaman dimuat
  