const str = `
010-1234-5678
thekjun@naver.com
https//www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddddddddd
`;

console.log(
  str.match(/.{1,}(?<=@)/g)
);