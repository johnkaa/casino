type RarityType = "pink" | "violet" | "blue" | "gray";
export default interface ICsSkin {
  name: string;
  img: string;
  amount: number;
  rarity: RarityType;
  chance: number;
  diapasonIndex: number;
}
