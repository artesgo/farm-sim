export interface ICharacter extends IConsumable {
  damage: number;

  price?: number;
  id?: string;
}

export interface IConsumable {
  name: string;
  attack: number;
  health: number;
}
