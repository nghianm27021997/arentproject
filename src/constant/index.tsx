//image for transit
import IconKnife from "../assets/Transit/icon_knife.png";
import IconCoffee from "../assets/Transit/icon_coffee.png";

//image for meal history
import ImageM01 from "../assets/MealHistory/m01.jpg";
import ImageM02 from "../assets/MealHistory/l03.jpg";
import ImageM03 from "../assets/MealHistory/d01.jpg";
import ImageM04 from "../assets/MealHistory/l01.jpg";
import ImageM05 from "../assets/MealHistory/m01.jpg";
import ImageM06 from "../assets/MealHistory/l02.jpg";
import ImageM07 from "../assets/MealHistory/d02.jpg";
import ImageM08 from "../assets/MealHistory/s01.jpg";

//image for entry screen
import BodyRecord from "../assets/EntryScreen/body-record.jpg";
import MyExercise from "../assets/EntryScreen/my-exercise.jpg";
import MyDiary from "../assets/EntryScreen/my-diary.jpg";


export const TRANSIT_CONTENT = [
  {
    icon: IconKnife,
    content: "Morning",
  },
  {
    icon: IconKnife,
    content: "Lunch",
  },
  {
    icon: IconKnife,
    content: "Dinner",
  },
  {
    icon: IconCoffee,
    content: "Snack",
  },
];

export const MEAL_HISTORY_CONTENT = [
  {
    image: ImageM01,
    desciption: "05.21.Morning",
  },
  {
    image: ImageM02,
    desciption: "05.21.Lunch",
  },
  {
    image: ImageM03,
    desciption: "05.21.Dinner",
  },
  {
    image: ImageM04,
    desciption: "05.21.Snack",
  },
  {
    image: ImageM05,
    desciption: "05.21.Morning",
  },
  {
    image: ImageM06,
    desciption: "05.21.Lunch",
  },
  {
    image: ImageM07,
    desciption: "05.21.Dinner",
  },
  {
    image: ImageM08,
    desciption: "05.21.Snack",
  },
];

export const SCREEN_RECORD = [
  {
    image: BodyRecord,
    description: "BODY RECORD",
    content: '自分のカラダの記録',
    link: '#bodyrecord'
  },
  {
    image: MyExercise,
    description: "MY EXERCISE",
    content: '自分の運動の記録',
    link: '#myexercise'
  },
  {
    image: MyDiary,
    description: "MY DIARY",
    content: '自分の日記',
    link: '#mydiary'
  }
];
