/**
 * Options pour récupérer les catégories.
 * includeTotals: si true, calcule amount/percent depuis la table transactions (dépenses uniquement).
 */
export interface FetchCategoriesOptions {
  userId?: string;
  from?: string;
  to?: string;
  includeTotals?: boolean;
  limit?: number;
  offset?: number;
  order?: 'asc' | 'desc';
  orderBy?: string;
}


/**
 * Builder pour FetchCategoriesOptions
 */
export class CategoryOptionsBuilder {
  private options: FetchCategoriesOptions = {};

  userId(id: string): CategoryOptionsBuilder {
    this.options.userId = id;
    return this;
  }

  from(date: string): CategoryOptionsBuilder {
    this.options.from = date;
    return this;
  }

  to(date: string): CategoryOptionsBuilder {
    this.options.to = date;
    return this;
  }

  includeTotals(enabled = true): CategoryOptionsBuilder {
    this.options.includeTotals = enabled;
    return this;
  }

  limit(count: number): CategoryOptionsBuilder {
    this.options.limit = count;
    return this;
  }

  offset(count: number): CategoryOptionsBuilder {
    this.options.offset = count;
    return this;
  }

  order(direction: 'asc' | 'desc'): CategoryOptionsBuilder {
    this.options.order = direction;
    return this;
  }

  orderBy(field: string): CategoryOptionsBuilder {
    this.options.orderBy = field;
    return this;
  }

  default(): CategoryOptionsBuilder {
    this.options.limit = 100;
    this.options.offset = 0;
    this.options.order = 'asc';
    this.options.orderBy = 'nom';
    return this;
  }

  build(): FetchCategoriesOptions {
    return { ...this.options };
  }
}
