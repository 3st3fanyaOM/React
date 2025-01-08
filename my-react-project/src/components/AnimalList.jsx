//import React from 'react'

function AnimalList() {
  const animals = [
    {
      id: 1,
      name: "dog",
      img: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwdmlkZW98ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "frog",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1oPPZBh5RCp6XRSrNC41D4K0IlPvFOXFrlg&s",
    },
    {
      id: 1,
      name: "cow",
      img: "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
    },
  ];

  const HTMLanimals = animals.map((animal) => {
    return (
      <li key={animal.id}>
        <h3>{animal.name}</h3>
        <img src={animal.img} alt="" width={200}/>
      </li>
    );
  });
  return (
    <section>
      <h2>Animals</h2>
      <ul>{HTMLanimals}</ul>
    </section>
  );
}

export default AnimalList;
