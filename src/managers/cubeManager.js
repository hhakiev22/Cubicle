const Cube = require("../models/Cube");

// const cubes = [
//   {
//     id: "3psclglshbp2r8",
//     name: "Mirror Cube",
//     description: "A real cute mirror cube",
//     imageUrl:
//       "https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg",
//     difficultyLevel: 4,
//   },
//   {
//     id: "3p2clglshgp2r8",
//     name: "Rubic Classic",
//     description: "Evergreen",
//     imageUrl:
//       "https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg",
//     difficultyLevel: 5,
//   },
// ];

exports.getAll = async (search, from, to) => {
  let result = await Cube.find().lean();

  // TODO: use mongoose to filter in the db
  if (search) {
    result = result.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (from) {
    result = result.filter((cube) => cube.difficultyLevel >= Number(from));
  }

  if (to) {
    result = result.filter((cube) => cube.difficultyLevel <= Number(to));
  }

  return result;
};

exports.getOne = (cubeId) => Cube.findById(cubeId); // get data to details page

exports.create = async (cubeData) => {
  const cube = new Cube(cubeData);

  await cube.save();

  return cube;
};
