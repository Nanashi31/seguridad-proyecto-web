import { Zona } from '../../../domain/zona/zona';
import { ZonaRepository } from '../../../application/ports/zona/zona.repository';

export class InMemoryZonaRepository implements ZonaRepository {
    private zonas: Zona[] = [];

    async create(zona: Zona): Promise<Zona> {
        this.zonas.push(zona);
        return zona;
    }

    async findById(id: number): Promise<Zona | null> {
        const zona = this.zonas.find(z => z.id_zona === id);
        return zona || null;
    }

    async findAll(): Promise<Zona[]> {
        return this.zonas;
    }

    async update(id: number, zona: Partial<Zona>): Promise<Zona | null> {
        const index = this.zonas.findIndex(z => z.id_zona === id);
        if (index === -1) {
            return null;
        }
        const updatedZona = { ...this.zonas[index], ...zona };
        this.zonas[index] = updatedZona;
        return updatedZona;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.zonas.findIndex(z => z.id_zona === id);
        if (index === -1) {
            return false;
        }
        this.zonas.splice(index, 1);
        return true;
    }
}
