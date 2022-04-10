export interface IMaterial {
  productID: number
  count: number
}

export interface IProduct {
  name: string
  id: number
  imageURL: string
  materials?: IMaterial[]
}

export interface IProductsList {
  products: IProduct[]
}
