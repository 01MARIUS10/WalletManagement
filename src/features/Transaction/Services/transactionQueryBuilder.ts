export interface FetchTransactionsOptions {
  userId?: string;
  categoryId?: number | string | null;
  from?: string;
  to?: string;
  limit?: number;
  offset?: number;
  order?: 'asc' | 'desc';
  orderBy?: string;
}


/**
 * Builder pattern pour créer les options de récupération des transactions
 */
export class TransactionOptionsBuilder {
  private options: FetchTransactionsOptions = {};

  userId(id: string): TransactionOptionsBuilder {
    this.options.userId = id;
    return this;
  }

  categoryId(id: number | string | null): TransactionOptionsBuilder {
    this.options.categoryId = id;
    return this;
  }

  from(date: string): TransactionOptionsBuilder {
    this.options.from = date;
    return this;
  }

  to(date: string): TransactionOptionsBuilder {
    this.options.to = date;
    return this;
  }

  limit(count: number): TransactionOptionsBuilder {
    this.options.limit = count;
    return this;
  }

  offset(count: number): TransactionOptionsBuilder {
    this.options.offset = count;
    return this;
  }

  order(direction: 'asc' | 'desc'): TransactionOptionsBuilder {
    this.options.order = direction;
    return this;
  }

  orderBy(field: string): TransactionOptionsBuilder {
    this.options.orderBy = field;
    return this;
  }

  /**
   * Applique les valeurs par défaut
   */
  default(): TransactionOptionsBuilder {
    this.options.limit = 100;
    this.options.offset = 0;
    this.options.order = 'desc';
    this.options.orderBy = 'date';
    return this;
  }

  build(): FetchTransactionsOptions {
    return { ...this.options };
  }
}
