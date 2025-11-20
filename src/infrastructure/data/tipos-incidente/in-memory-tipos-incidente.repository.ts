import { TiposIncidente } from '../../../domain/tipos-incidente/tipos-incidente';
import { TiposIncidenteRepository } from '../../../application/ports/tipos-incidente/tipos-incidente.repository';

export class InMemoryTiposIncidenteRepository implements TiposIncidenteRepository {
    private tiposIncidentes: TiposIncidente[] = [];

    async create(tiposIncidente: TiposIncidente): Promise<TiposIncidente> {
        this.tiposIncidentes.push(tiposIncidente);
        return tiposIncidente;
    }

    async findById(id: number): Promise<TiposIncidente | null> {
        const tiposIncidente = this.tiposIncidentes.find(t => t.id_tipo_incidente === id);
        return tiposIncidente || null;
    }

    async findAll(): Promise<TiposIncidente[]> {
        return this.tiposIncidentes;
    }

    async update(id: number, tiposIncidente: Partial<TiposIncidente>): Promise<TiposIncidente | null> {
        const index = this.tiposIncidentes.findIndex(t => t.id_tipo_incidente === id);
        if (index === -1) {
            return null;
        }
        const updatedTiposIncidente = { ...this.tiposIncidentes[index], ...tiposIncidente };
        this.tiposIncidentes[index] = updatedTiposIncidente;
        return updatedTiposIncidente;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.tiposIncidentes.findIndex(t => t.id_tipo_incidente === id);
        if (index === -1) {
            return false;
        }
        this.tiposIncidentes.splice(index, 1);
        return true;
    }
}
