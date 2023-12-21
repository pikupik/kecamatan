const express = require('express')

const app = express()
const port = 3000


//memanggil ejs template engine
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('landing', { 
    title: 'Landing Page'
  });
})


app.get('/home', (req, res) => {
  res.render('index', { 
    title: 'Home'
  });
})


app.get('/about', (req, res) => {
  // res.send('Hello World!')
  res.render('about', { 
    title: 'Halaman About'
  });
})
// 
app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Halaman Contact'
  });
})

app.get('/wisata', (req, res) => {
  
  res.render('wisata', { 
    title: 'Halaman Wisata'
  });
})

app.get('/profile', (req, res) => {
  
  res.render('profile', { 
    title: 'Profile Kecataman'
  });
})

app.get('/berita', (req, res) => {
  
  res.render('berita', { 
    title: 'Halaman Berita'
  });
})

app.get('/gallery', (req, res) => {
  
  res.render('gallery', { 
    title: 'Halaman gallery'
  });
})

app.get('/layanan', (req, res) => {
   
  res.render('layanan', { 
    title: 'Halaman Layanan',
  });
})

app.get('/ktp', (req, res) => {
   
  res.render('ktp', { 
    title: 'Halaman ktp',
  });
})

app.get('/kknasional', (req, res) => {
   
  res.render('kknasional', { 
    title: 'Halaman ktp'
  });
})

  app.get('/proposalbantuan', (req, res) => {
   
    res.render('proposalbantuan', { 
      title: 'Halaman proposal',
    });
  })

    app.get('/struktur', (req, res) => {
   
      res.render('struktur', { 
        title: 'Halaman struktur',

      });
    })

    app.get('/proposalkelompok', (req, res) => {
   
      res.render('proposalkelompok', { 
        title: 'Halaman struktur'
      });
    })

    app.get('/suratketeranganskck', (req, res) => {
   
      res.render('suratketeranganskck', { 
        title: 'Halaman struktur',
      });
    })



    app.get('/suratpindahpenduduk', (req, res) => {
   
      res.render('suratpindahpenduduk', { 
        title: 'Halaman struktur'
      });
    })
    
    app.get('/kematian', (req, res) => {
   
      res.render('kematian', { 
        title: 'Halaman struktur'
      });
    })
    
  

app.get('/proposalbeasiswa', (req, res) => {

  res.render('proposalbeasiswa' ,{
    title: 'Halaman beasiswa'
  });


})

app.get('/nagari', (req, res) => {

  res.render('nagari' ,{
    title: 'Halaman nagari'
  });


})

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})