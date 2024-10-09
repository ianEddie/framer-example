import icon1 from '../icons/CardOneIcon';
import icon2 from '../icons/CardTwoIcon';

interface Card {
  id: number;
  icon: any;
  title: string;
  text: string;
}

export const CARDS_DATA: Card[] = [
  {
    id: 1,
    icon: icon1,
    title: 'Minimalism',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente hic temporibus pariatur saepe facere quia id molestiae atque minima, unde eaque eveniet delectus, nobis sint neque commodi perferendis! Fuga.'
  },
  {
    id: 2,
    icon: icon2,
    title: 'Elegance',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente hic temporibus pariatur saepe facere quia id molestiae atque minima, unde eaque eveniet delectus, nobis sint neque commodi perferendis! Fuga.'
  }
];
