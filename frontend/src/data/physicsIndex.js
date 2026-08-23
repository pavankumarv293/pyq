import { physicsChapter1 } from './physicsData';
import { physicsChapter2 } from './physicsChapter2';
import { physicsChapter3 } from './physicsChapter3';
import { physicsChapter4 } from './physicsChapter4';
import { physicsChapter5 } from './physicsChapter5';

export const physicsChapters = [
  physicsChapter1,
  physicsChapter2,
  physicsChapter3,
  physicsChapter4,
  physicsChapter5,
];

export const getPhysicsChapter = (chapterId) => {
  return physicsChapters.find((c) => c.chapter_no === parseInt(chapterId));
};
