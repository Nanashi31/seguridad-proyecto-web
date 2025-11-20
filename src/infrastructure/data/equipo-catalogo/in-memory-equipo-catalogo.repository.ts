import { EquipoCatalogo } from '../../../domain/equipo-catalogo/equipo-catalogo';
import { EquipoCatalogoRepository } from '../../../application/ports/equipo-catalogo/equipo-catalogo.repository';

export class InMemoryEquipoCatalogoRepository implements EquipoCatalogoRepository {
    private equiposCatalogo: EquipoCatalogo[] = [];

    async create(equipoCatalogo: EquipoCatalogo): Promise<EquipoCatalogo> {
        this.equiposCatalogo.push(equipoCatalogo);
        return equipoCatalogo;
    }

    async findById(id: number): Promise<EquipoCatalogo | null> {
        const equipoCatalogo = this.equiposCatalogo.find(e => e.id_equipo === id);
        return equipoCatalogo || null;
    }

    async findAll(): Promise<EquipoCatalogo[]> {
        return this.equiposCatalogo;
    }

    async update(id: number, equipoCatalogo: Partial<EquipoCatalogo>): Promise<EquipoCatalogo | null> {
        const index = this.equiposCatalogo.findIndex(e => e.id_equipo === id);
        if (index === -1) {
            return null;
        }
        const updatedEquipoCatalogo = { ...this.equiposCatalogo[index], ...equipoCatalogo };
        this.equiposCatalogo[index] = updatedEquipoCatalogo;
        return updatedEquipoCatalogo;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.equiposCatalogo.findIndex(e => e.id_equipo === id);
        if (index === -1) {
            return false;
        }
        this.equiposCatalogo.splice(index, 1);
        return true;
    }
}
