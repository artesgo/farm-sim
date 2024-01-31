export interface ICharacter extends IConsumable {
  damage: number;

  act?: boolean;
  price?: number;
  id?: string;
}

export interface IConsumable {
  name: string;
  attack: number;
  health: number;
}
