const linkPoster = 'https://image.tmdb.org/t/p/w400';
function posterNull(string) {
  if (string === '' || string === 'null' || string === null) {
    return (string =
      'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg');
  } else {
    return (string = linkPoster + string);
  }
}

export { posterNull };
