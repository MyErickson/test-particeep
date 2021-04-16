const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    image:'https://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg'
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    image:'https://lesinstantsvolesalavie.files.wordpress.com/2018/06/midnight-sun.jpg'
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    image:'https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg'
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    image:'https://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg'
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    image:'https://fr.web.img5.acsta.net/pictures/18/11/27/14/25/1451897.jpg'
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    image:'https://static.posters.cz/image/750/affiches-et-posters/pulp-fiction-cover-i1288.jpg'
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    image:'https://images.affiches-et-posters.com//albums/3/6332/affiche-film-pulp-fiction-67847.jpg'
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    image:'https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/121/mohx8jgzideamlj1cqdzclyhmry-823.jpg'
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    image:'https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg'
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    image:'http://addict-culture.com/wp-content/uploads/2014/10/gone-girl-poster.jpg'
  },
]
  
export const movies$ = new Promise((resolve) => setTimeout(resolve, 100, movies))