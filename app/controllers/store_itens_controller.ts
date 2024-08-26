import type { HttpContext } from '@adonisjs/core/http'

export default class StoreItemController {
  public async getStoreItems({ response }: HttpContext) {
    const items = [
      { id: 1, name: 'Produto 1', price: 29.99 },
      { id: 2, name: 'Produto 2', price: 49.99 },
      { id: 3, name: 'Produto 3', price: 19.99 },
    ]

    return response.json(items)
  }
}
