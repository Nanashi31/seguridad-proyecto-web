import { Product } from '../../domain/product';
import { ProductRepository } from '../../application/ports/product.repository';

export class InMemoryProductRepository implements ProductRepository {
    private products: Product[] = [];

    async create(product: Product): Promise<Product> {
        this.products.push(product);
        return product;
    }

    async findById(id: number): Promise<Product | null> {
        const product = this.products.find(p => p.id === id);
        return product || null;
    }

    async findAll(): Promise<Product[]> {
        return this.products;
    }

    async update(id: number, product: Partial<Product>): Promise<Product | null> {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            return null;
        }
        const updatedProduct = { ...this.products[index], ...product };
        this.products[index] = updatedProduct;
        return updatedProduct;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            return false;
        }
        this.products.splice(index, 1);
        return true;
    }
}
