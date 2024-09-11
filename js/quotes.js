const quotes = [
  {
    quote: 'This too shall pass.',
    // 이또한 지나가리라.
    author: 'Et hoc transibit',
    // 에트 혹 트란시비트
  },
  {
    quote:
      'They must often change who would be constant in happiness or wisdom.',
    // 늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.
    author: 'Confucius',
    // 공자
  },
  {
    quote: 'Age is no guarantee of maturity.',
    // 나이가 성숙을 보장하지는 않는다.
    author: 'Lawana Blackwell',
    // 라와나 블랙웰
  },
  {
    quote:
      'he greatest glory in living lies not in never falling, but in rising every time we fall.',
    // 인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.
    author: 'Nelson Mandela',
    // 넬슨 만델라
  },
  {
    quote: 'When in doubt, choose change.',
    // 의심이 있다면, 변화해라.
    author: 'Lily leung',
    // 릴리 렁
  },
  {
    quote: 'Life is unfair, get used to it.',
    // 인생은 불공평 합니다. 익숙해지세요.
    author: 'Bill Gates',
    // 빌 게이츠
  },
  {
    quote: 'Being happy never goes out of style.',
    // 즐거움은 영원히 유행에 뒤떨어지지 않는다.
    author: 'Lilly Pulitzer',
    // 릴리 퓰리처
  },
  {
    quote:
      'Life is a mountain. Your goal is to find your path, not to reach the top.',
    // 인생은 산이다. 당신의 목표는 정상에 도달하는 것이 아니라 당신의 길을 찾는 것이다.
    author: 'Maxime Lagacé',
    // 막심 라가세
  },
  {
    quote:
      'Life is from the inside out. When you shift on the inside, life shifts on the outside.',
    // 인생은 내면으로부터 나온다. 당신이 내면을 바꿀 때, 삶은 외부로 바뀐다.
    author: 'Kamal Ravikant',
    // 카말 라비칸트
  },
  {
    quote: 'Despite the forecast, live like it’s spring.',
    // 일기예보에도 불구하고, 봄처럼 살아라.
    author: 'Lilly Pulitzer',
    // 릴리 퓰리처
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
