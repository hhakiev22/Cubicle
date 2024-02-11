const uniqid = require("uniqid");
const cubes = [
  {
    id: "3psclglshbp2r8",
    name: "Mirror Cube",
    description: "A real cute mirror cube",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg",
    difficultyLevel: 4,
  },
  {
    id: "3p2clglshgp2r8",
    name: "Rubic Classic",
    description: "Evergreen",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg",
    difficultyLevel: 5,
  },
];

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find((x) => x.id == cubeId); // get data to details page

exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };

  cubes.push(newCube);

  return newCube;
};
