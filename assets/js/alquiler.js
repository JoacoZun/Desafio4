const propiedades_alquiler = [
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de la montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 3,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa de veraneo en el bosque',
        src: 'https://a0.muscache.com/im/pictures/073c9ee3-df86-441f-a7da-e7fa1b0a8457.jpg?im_w=1920',
        descripcion: 'Casa ubicada cerca del bosque, naturaleza por todos lados.',
        ubicacion: '124 Forest Road, Summit Peaks, CA 23456',
        habitaciones: 3,
        baños: 2,
        costo: 2245,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en el Cerro',
        src: 'https://a0.muscache.com/im/pictures/5e67688b-757d-44d6-8b4b-1e91dc6fe49f.jpg?im_w=1920',
        descripcion: 'Esta casa está ubicado en una tranquila zona rural',
        ubicacion: '525 Cerro Street, Anytown, CA 91234',
        habitaciones: 4,
        baños: 3,
        costo: 2900,
        smoke: true,
        pets: true
    }
  ];
  
  
  
  function mostrarPropiedadesAlquiler(propiedades, contenedorId) {
    const contenedorAlquiler = document.getElementById(contenedorId);
    let htmlAlquiler = '';
  
    for (let alquiler of propiedades) {
      htmlAlquiler += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${alquiler.src}" class="card-img-top" alt="Imagen de la propiedad" />
            <div class="card-body">
              <h5 class="card-title">${alquiler.nombre}</h5>
              <p class="card-text">${alquiler.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p>
              <p><i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${alquiler.baños} Baños</p>
              <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
              ${alquiler.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
              ${alquiler.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
            </div>
          </div>
        </div>
      `;
    }
  
    contenedorAlquiler.innerHTML = htmlAlquiler;
  }
  
  mostrarPropiedadesAlquiler(propiedades_alquiler, 'alquileres');