export interface IMaterial {
  productID: number
  count: number
}

export interface IProduct {
  name: string
  id: number
  imageURL: string
  materials: IMaterial[]
}

export interface ICraftable extends IProduct {
  count: number
}

export interface IProductsList {
  products: IProduct[]
}

export enum Filter {
  Owned = 'Owned',
  NotOwned = 'Not Owned',
  Craftable = 'Craftable',
}

export interface IFilter {
  [Filter.Owned]: boolean
  [Filter.NotOwned]: boolean
  [Filter.Craftable]: boolean
}
